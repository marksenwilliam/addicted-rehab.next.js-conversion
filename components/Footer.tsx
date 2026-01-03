import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative">
            {/* Main Footer Section - Image Left, Content Right */}
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
                                <Link href="/" className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-white font-serif font-bold text-xs border border-white/30">
                                        N
                                    </div>
                                    <span className="font-serif font-bold text-lg text-brand-navy tracking-tight">
                                        Nytt Liv
                                    </span>
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
                                            href="/berattelser"
                                            className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all"
                                        >
                                            Berättelser
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
