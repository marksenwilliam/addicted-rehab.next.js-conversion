import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy initialization of Resend client (initialized on first request, not at build time)
let resend: Resend | null = null;

function getResendClient(): Resend {
    if (!resend) {
        resend = new Resend(process.env.RESEND_API_KEY);
    }
    return resend;
}

// Email recipient
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@addicted-rehab.se";

// Simple in-memory rate limiting (resets on server restart)
// For production with multiple instances, use Redis instead
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 25; // Max requests per window
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
        return false;
    }

    if (record.count >= RATE_LIMIT) {
        return true;
    }

    record.count++;
    return false;
}

// Clean up old entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now > record.resetTime) {
            rateLimitMap.delete(ip);
        }
    }
}, 60 * 60 * 1000); // Clean up every hour

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting and Turnstile verification
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ||
            request.headers.get("x-real-ip") ||
            "unknown";

        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "För många förfrågningar. Försök igen senare." },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { name, email, message, honeypot, formLoadTime, turnstileToken } = body;

        // Bot Protection Layer 1: Honeypot check - if this field is filled, it's a bot
        if (honeypot) {
            // Pretend success but don't send email
            console.log("Bot detected via honeypot");
            return NextResponse.json({ success: true });
        }

        // Bot Protection Layer 2: Time check - form must be open for at least 3 seconds
        const minTime = 3000; // 3 seconds
        if (formLoadTime && Date.now() - formLoadTime < minTime) {
            // Too fast, likely a bot
            console.log("Bot detected via timing check");
            return NextResponse.json({ success: true });
        }

        // Bot Protection Layer 3: Verify Turnstile token (skip if timeout-fallback or no secret key)
        const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;
        if (turnstileToken && turnstileToken !== "timeout-fallback" && turnstileSecretKey) {
            const turnstileResponse = await fetch(
                "https://challenges.cloudflare.com/turnstile/v0/siteverify",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        secret: turnstileSecretKey,
                        response: turnstileToken,
                        remoteip: ip,
                    }),
                }
            );

            const turnstileData = await turnstileResponse.json();

            if (!turnstileData.success) {
                console.log("Turnstile verification failed:", turnstileData);
                return NextResponse.json(
                    { error: "Verifieringen misslyckades. Försök igen." },
                    { status: 400 }
                );
            }
        }
        // If turnstileToken is "timeout-fallback", missing, or no secret key configured,
        // we still allow submission because honeypot, rate limiting, and time check provide baseline protection

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Alla fält måste fyllas i" },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Ogiltig e-postadress" },
                { status: 400 }
            );
        }

        // Send email via Resend
        const { data, error } = await getResendClient().emails.send({
            from: "Addicted Rehab <onboarding@resend.dev>",
            to: [CONTACT_EMAIL],
            subject: `Nytt meddelande från ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a365d; border-bottom: 2px solid #e8a838; padding-bottom: 10px;">Nytt meddelande från webbplatsen</h2>
                    <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #1a365d;">Namn:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #1a365d;">E-post:</strong> <a href="mailto:${email}" style="color: #e8a838;">${email}</a></p>
                    </div>
                    <div style="background-color: #1a365d; color: #fff; padding: 20px; border-radius: 8px;">
                        <h3 style="color: #e8a838; margin-top: 0;">Meddelande:</h3>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
                        Detta meddelande skickades via kontaktformuläret på addicted-rehab.se
                    </p>
                </div>
            `,
            replyTo: email,
        });

        if (error) {
            console.error("Email error:", error);
            return NextResponse.json(
                { error: "Kunde inte skicka meddelandet. Försök igen senare." },
                { status: 500 }
            );
        }

        console.log("Email sent successfully:", data);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json(
            { error: "Något gick fel" },
            { status: 500 }
        );
    }
}
