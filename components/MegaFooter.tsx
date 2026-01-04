"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactSection from "./ContactSection";

// Define all available navigation cards with SEO-friendly alt text
const allNavCards = [
    { href: "/", label: "Hem", image: "/images/hero-image.jpg", alt: "Hem - Addicted Rehab privat behandling för alkoholism i Spanien" },
    { href: "/var-behandling", label: "Vår Behandling", image: "/images/nav-treatment.jpg", alt: "Vår individuella 12-stegsbehandling enligt Minnesotamodellen" },
    { href: "/om-oss", label: "Om Oss", image: "/images/nav-about-us.jpg", alt: "Möt vårt team av erfarna beroendeterapeuter" },
    { href: "/vad-ar-alkoholism", label: "Vad är alkoholism?", image: "/images/nav-alcoholism.jpg", alt: "Information om alkoholism, symptom och behandling" },
    { href: "/berattelser", label: "Berättelser", image: "/images/berattelser-recensioner.jpeg", alt: "Berättelser och recensioner från tidigare klienter" },
    { href: "/blogg", label: "Blogg", image: "https://images.unsplash.com/photo-1496814795703-e5b242546673?w=1600&q=80", alt: "Bloggartiklar om återhämtning och behandling" },
];

export default function MegaFooter() {
    const pathname = usePathname();

    // Filter out the current page and get exactly 5 cards
    const navCards = allNavCards
        .filter(card => card.href !== pathname)
        .slice(0, 5);

    return (
        <footer className="relative">
            {/* Navigation Grid Section */}
            <section>
                <div className="grid grid-cols-2 lg:grid-cols-5 w-full">
                    {navCards.map((card, index) => (
                        <Link
                            key={card.href}
                            href={card.href}
                            className={`group relative overflow-hidden ${index === 4
                                ? "col-span-2 aspect-[2/1] lg:col-span-1 lg:aspect-[4/3]"
                                : "aspect-[4/3]"
                                }`}
                        >
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-brand-navy/60 transition-colors duration-300"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-brand-white text-xl md:text-2xl lg:text-3xl text-center px-4 drop-shadow-lg" style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 600 }}>
                                    {card.label}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Contact Form Section - Using shared ContactSection component with Turnstile */}
            <ContactSection />
            <div className="flex flex-col lg:flex-row">
                {/* Left side - Spanish Steps Image */}
                <div className="lg:w-1/2 relative">
                    <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[300px] lg:min-h-full">
                        <Image
                            src="/images/iStock-1363152959.jpg"
                            alt="Spanish Steps in Calpe, Spain"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right side - Footer Content */}
                <div className="lg:w-1/2 bg-brand-cream py-12 lg:py-16 flex flex-col">
                    <div className="max-w-lg mx-auto px-6 lg:px-12 flex-1">
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            {/* Logo & Description */}
                            <div className="col-span-2 space-y-4">
                                <Link href="/" className="inline-block relative w-48 h-16">
                                    <Image
                                        src="/images/logo-header-footer.png"
                                        alt="Nytt Liv - Addicted Rehab"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </Link>
                                <p className="text-xs font-sans text-brand-gray max-w-sm leading-relaxed">
                                    Privat rehab &amp; beroendeklinik i Spanien.
                                    <br />
                                    Vi hjälper dig till ett nytt liv.
                                </p>
                            </div>

                            {/* Navigation */}
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                                    Navigering
                                </h4>
                                <ul className="space-y-2 text-sm font-sans font-medium text-brand-navy">
                                    <li>
                                        <Link
                                            href="/"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Hem
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/om-oss"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Om Oss
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/var-behandling"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Vår Behandling
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/vad-ar-alkoholism"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Vad är alkoholism?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/vanliga-fragor"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Vanliga Frågor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/berattelser"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Berättelser
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/blogg"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Blogg
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                                    Kontakt
                                </h4>
                                <ul className="space-y-2 text-sm font-sans font-medium text-brand-navy">
                                    <li>
                                        <a
                                            href="tel:0732520358"
                                            className="hover:text-brand-orange transition-colors"
                                        >
                                            073 - 252 03 58
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:info@addictedrehab.se"
                                            className="hover:text-brand-orange transition-colors"
                                        >
                                            info@addictedrehab.se
                                        </a>
                                    </li>
                                    <li>
                                        <span className="text-brand-gray">La Marina, Spanien</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Copyright & Policy */}
                        <div className="pt-6 pb-8 border-t border-brand-navy/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-sans font-bold text-brand-gray uppercase tracking-widest">
                            <span>© 2026 Addicted Rehab. Alla rättigheter reserverade.</span>
                            <div className="flex gap-4">
                                <Link href="/integritetspolicy" className="hover:text-brand-orange">
                                    Integritetspolicy
                                </Link>
                                <Link href="/cookies" className="hover:text-brand-orange">
                                    Cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
