"use client";

import { useState, useEffect, FormEvent } from "react";
import TurnstileWidget from "./TurnstileWidget";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const [canSubmitWithoutTurnstile, setCanSubmitWithoutTurnstile] = useState(false);
    const [formLoadTime, setFormLoadTime] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    // Record when form loads (for bot detection)
    useEffect(() => {
        setFormLoadTime(Date.now());
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");
        setSubmitStatus("idle");

        // Check if Turnstile token is present (unless timeout/error occurred)
        if (!turnstileToken && !canSubmitWithoutTurnstile) {
            setErrorMessage("Vänligen verifiera att du inte är en robot.");
            setIsSubmitting(false);
            return;
        }

        const formElement = e.currentTarget;
        const data = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            honeypot: (formElement.elements.namedItem("website") as HTMLInputElement)?.value || "",
            formLoadTime: formLoadTime,
            turnstileToken: turnstileToken || "timeout-fallback",
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Något gick fel");
            }

            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTurnstileToken(null);
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Kunde inte skicka meddelandet. Försök igen senare.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-brand-navy relative py-16 lg:py-20 text-brand-cream"
        >
            {/* Texture on dark bg */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e8a838' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="font-serif text-3xl md:text-4xl font-medium mb-3">
                        Hör gärna av dig
                    </h2>
                    <p className="text-brand-cream/70 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                        Vi finns här för att svara på dina frågor. All kontakt är konfidentiell.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-orange"
                        >
                            Namn
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="DITT NAMN"
                            required
                            className="w-full px-5 py-3 bg-brand-navy border-2 border-brand-cream/30 focus:outline-none focus:border-brand-orange text-brand-cream placeholder-brand-cream/20 text-sm font-bold tracking-wide uppercase sketchy-box transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-orange"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="DIN EMAIL"
                            required
                            className="w-full px-5 py-3 bg-brand-navy border-2 border-brand-cream/30 focus:outline-none focus:border-brand-orange text-brand-cream placeholder-brand-cream/20 text-sm font-bold tracking-wide uppercase sketchy-box transition-colors"
                        />
                    </div>

                    {/* Message - Full width */}
                    <div className="md:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-orange"
                        >
                            Meddelande
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            placeholder="DITT MEDDELANDE..."
                            required
                            className="w-full px-5 py-3 bg-brand-navy border-2 border-brand-cream/30 focus:outline-none focus:border-brand-orange text-brand-cream placeholder-brand-cream/20 text-sm font-bold tracking-wide uppercase sketchy-box transition-colors"
                        ></textarea>
                    </div>

                    {/* Honeypot field - hidden from real users, bots will fill it */}
                    <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                    {/* Turnstile Widget */}
                    <div className="md:col-span-2">
                        <TurnstileWidget
                            onVerify={(token) => setTurnstileToken(token)}
                            onExpire={() => setTurnstileToken(null)}
                            onError={() => setCanSubmitWithoutTurnstile(true)}
                            onTimeout={() => setCanSubmitWithoutTurnstile(true)}
                            theme="light"
                        />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                        <div className="md:col-span-2 p-4 bg-green-500/20 border-2 border-green-500 text-green-400 text-center rounded sketchy-box">
                            ✓ Tack! Ditt meddelande har skickats. Vi återkommer så snart som möjligt.
                        </div>
                    )}

                    {submitStatus === "error" && errorMessage && (
                        <div className="md:col-span-2 p-4 bg-red-500/20 border-2 border-red-500 text-red-400 text-center rounded sketchy-box">
                            ✗ {errorMessage}
                        </div>
                    )}

                    <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full md:w-auto bg-brand-orange text-brand-navy px-10 py-4 text-xs font-bold uppercase tracking-widest border-2 border-transparent hover:bg-brand-cream transition-colors sketchy-btn shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "SKICKAR..." : "SKICKA MEDDELANDE"}
                        </button>

                        <div className="text-center md:text-right">
                            <p className="text-[10px] font-sans font-bold text-brand-cream/50 uppercase tracking-widest mb-1">
                                ELLER RING OSS DIREKT
                            </p>
                            <a
                                href="tel:0732520358"
                                className="text-xl font-serif font-bold text-brand-white hover:text-brand-orange transition-colors border-b-2 border-brand-orange border-dashed pb-1"
                            >
                                073 - 252 03 58
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
