import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Berättelser & Recensioner | Addicted Rehab",
    description: "Läs berättelser från tidigare klienter som har genomgått behandling på Addicted Rehab.",
};

export default function BerattelerPage() {
    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-brand-cream relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                        Inspiration
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-brand-navy mb-8 leading-tight">
                        Tidigare klienter <span className="marker-highlight px-2">berättar</span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
                        Läs verkliga berättelser från människor som tagit steget mot ett nytt liv. Deras ord kan ge
                        hopp och inspiration på din egen resa.
                    </p>
                </div>
            </header>

            {/* Featured Stories */}
            <section className="py-24 bg-brand-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Robert's Story */}
                        <div className="bg-brand-cream border-2 border-brand-navy sketchy-box p-8 shadow-sketch">
                            <div className="mb-6">
                                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-1">
                                    Utvalda berättelser
                                </span>
                            </div>
                            <h3 className="font-serif text-3xl text-brand-navy mb-4">&quot;Robert&quot;</h3>
                            <p className="text-brand-gray mb-6 leading-relaxed">
                                &quot;Innan jag kom ner till Spanien kändes livet som om det hade låst sig. Jag vaknade med
                                ångest nästan varje dag... Idag är livet nästan oigenkännligt.&quot;
                            </p>
                            <Link
                                href="/berattelser/robert"
                                className="text-brand-orange font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2"
                            >
                                Läs hela berättelsen
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Samir's Story */}
                        <div className="bg-brand-cream border-2 border-brand-navy sketchy-box p-8 shadow-sketch">
                            <div className="mb-6">
                                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-1">
                                    Utvalda berättelser
                                </span>
                            </div>
                            <h3 className="font-serif text-3xl text-brand-navy mb-4">&quot;Samir&quot;</h3>
                            <p className="text-brand-gray mb-6 leading-relaxed">
                                &quot;Jag försökte i åratal att sluta på egen hand. Det var först när jag fick professionell
                                hjälp som jag förstod vad jag hade kämpat emot.&quot;
                            </p>
                            <Link
                                href="/berattelser/samir"
                                className="text-brand-orange font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2"
                            >
                                Läs hela berättelsen
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Reviews */}
            <section className="py-24 bg-brand-cream border-y-2 border-brand-navy/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="font-serif text-4xl text-brand-navy mb-12 text-center">Fler röster</h2>

                    <div className="space-y-8">
                        {/* Madelene */}
                        <div className="bg-brand-white p-8 border-l-4 border-brand-orange">
                            <p className="font-serif text-xl italic text-brand-gray mb-4">
                                &quot;Arne och Jan gav mig verktygen jag behövde för att ta tillbaka mitt liv. Jag är evigt
                                tacksam för deras tålamod och professionalism.&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-orange font-bold">
                                    M
                                </div>
                                <div>
                                    <span className="font-bold text-brand-navy block">&quot;Madelene&quot;</span>
                                    <span className="text-xs text-brand-gray uppercase tracking-widest">Tidigare klient</span>
                                </div>
                            </div>
                        </div>

                        {/* Peter */}
                        <div className="bg-brand-white p-8 border-l-4 border-brand-navy">
                            <p className="font-serif text-xl italic text-brand-gray mb-4">
                                &quot;Det bästa beslutet jag tagit i mitt liv. Miljön i Spanien, den individuella uppmärksamheten
                                och den genuina omtanken gjorde hela skillnaden.&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-brand-navy font-bold">
                                    P
                                </div>
                                <div>
                                    <span className="font-bold text-brand-navy block">&quot;Peter&quot;</span>
                                    <span className="text-xs text-brand-gray uppercase tracking-widest">Tidigare klient</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-24 pb-0 bg-brand-navy text-brand-cream text-center">
                <div className="container mx-auto px-6 max-w-3xl pb-24">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Din berättelse kan börja idag</h2>
                    <p className="text-xl text-brand-cream/80 mb-12">
                        Vi finns här för att hjälpa dig ta det första steget mot ett nytt liv.
                    </p>
                    <Link
                        href="#contact"
                        className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-orange px-10 py-5 font-bold text-lg uppercase tracking-widest hover:bg-brand-cream transition-colors shadow-sketch inline-block"
                    >
                        Kontakta oss idag
                    </Link>
                </div>
            </section>
        </>
    );
}
