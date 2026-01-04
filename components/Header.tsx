"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Hem" },
    { href: "/om-oss", label: "Om Oss" },
    { href: "/var-behandling", label: "Vår Behandling" },
    { href: "/vad-ar-alkoholism", label: "Vad är alkoholism?" },
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
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col group">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-serif font-bold text-lg border border-white/30">
                            N
                        </div>
                        <span className="font-serif font-bold text-2xl text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors">
                            Nytt Liv
                        </span>
                    </div>
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-brand-gray uppercase pl-10">
                        Addicted Rehab
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
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
                    <button
                        onClick={scrollToContact}
                        className="sketchy-btn border-2 border-brand-navy px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-navy hover:text-brand-white transform hover:-rotate-1"
                    >
                        Kontakt
                    </button>
                </div>

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
