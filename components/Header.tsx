"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Hem" },
    { href: "/om-oss", label: "Om Oss" },
    { href: "/var-behandling", label: "Vår Behandling" },
    { href: "/vad-ar-alkoholism", label: "Vad är alkoholism?" },
    { href: "/vanliga-fragor", label: "Frågor" },
    { href: "/berattelser", label: "Berättelser & Recensioner" },
    { href: "/blogg", label: "Blogg" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-brand-header-bg/95 backdrop-blur-sm border-b-2 border-brand-navy/10">
            <div className="w-full px-6 md:px-12 h-24 flex items-center justify-between relative">
                {/* Logo - Left Aligned */}
                <Link href="/" className="flex flex-col group relative z-50">
                    <div className="relative w-48 h-16">
                        <Image
                            src="/images/logo-header-footer.png"
                            alt="Nytt Liv - Addicted Rehab"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav - Absolute Centered */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-xs font-bold tracking-widest uppercase transition-colors ${pathname === link.href
                                ? "text-brand-orange"
                                : "text-brand-navy hover:text-brand-orange"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4 relative z-50">
                    {/* Desktop Contact Button */}
                    <button
                        onClick={scrollToContact}
                        className="hidden md:block sketchy-btn border-2 border-brand-navy px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-navy hover:text-brand-white transform hover:-rotate-1"
                    >
                        Kontakt
                    </button>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-brand-navy p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Container */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-brand-header-bg border-b-2 border-brand-navy/10">
                    <div className="flex flex-col p-6 space-y-4 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-sm font-bold tracking-widest uppercase ${pathname === link.href
                                    ? "text-brand-orange"
                                    : "text-brand-navy hover:text-brand-orange"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                scrollToContact();
                            }}
                            className="text-sm font-bold tracking-widest uppercase text-brand-navy hover:text-brand-orange"
                        >
                            Kontakt
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
