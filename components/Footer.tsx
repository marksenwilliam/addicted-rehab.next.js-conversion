import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-cream border-t border-brand-navy/10 py-20 relative">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2 space-y-6">
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

                <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                        Navigering
                    </h4>
                    <ul className="space-y-3 text-sm font-sans font-medium text-brand-navy">
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

                <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                        Kontakt
                    </h4>
                    <ul className="space-y-3 text-sm font-sans font-medium text-brand-navy">
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

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-navy/5 flex justify-between items-center text-[10px] font-sans font-bold text-brand-gray uppercase tracking-widest">
                <span>© 2026 Addicted Rehab. Alla rättigheter reserverade.</span>
                <Link href="#" className="hover:text-brand-orange">
                    Integritetspolicy
                </Link>
            </div>
        </footer>
    );
}
