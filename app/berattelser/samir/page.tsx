import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Samirs berättelse | Addicted Rehab",
    description: "Läs Samirs resa från ångest och utmattning till ett stabilt liv med verktyg som fungerar i vardagen.",
};

export default function SamirStoryPage() {
    return (
        <>
            {/* Hero */}
            <header className="pt-32 pb-12 bg-brand-cream relative">
                <div className="max-w-3xl mx-auto px-6">
                    <Link
                        href="/berattelser"
                        className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-8 inline-flex items-center gap-2 hover:underline"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Tillbaka till berättelser
                    </Link>
                    <h1 className="font-serif text-5xl md:text-6xl text-brand-navy mb-4">
                        &quot;Samir&quot; berättar
                    </h1>
                    <p className="text-brand-gray text-lg">
                        Från ångest och utmattning till stabilitet och kontroll
                    </p>
                </div>
            </header>

            {/* Story Content */}
            <article className="py-16 bg-brand-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="prose prose-lg prose-gray">
                        <h2 className="font-serif text-brand-navy">Hur såg ditt liv ut innan du kom till vår behandling nere i Spanien?</h2>
                        <p>
                            Innan jag kom till behandlingen i Spanien levde jag ett liv som kändes allt mer ohållbart.
                            Jag kämpade med ångest, stress och utmattning. Levde i en dålig relation. Det påverkade
                            min vardag, mina relationer och mitt allmänna mående.
                        </p>
                        <p>
                            Jag visste att jag behövde hjälp men hade svårt att bryta cirkeln på egen hand. Jag ville
                            göra något innan det skulle vara för sent.
                        </p>

                        <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 my-8 not-prose">
                            <p className="font-serif text-xl italic text-brand-navy">
                                &quot;Jag visste att jag behövde hjälp men hade svårt att bryta cirkeln på egen hand.&quot;
                            </p>
                        </div>

                        <h2 className="font-serif text-brand-navy">Hur ser ditt liv ut idag efter vår behandling?</h2>
                        <p>
                            Efter behandling har mitt liv påverkats på ett positivt sätt. Jag har verktyg som fungerar
                            i vardagen och känner mig mer stabil, medveten och närvarande. Mina relationer har förbättrats.
                            Jag har återfått kontrollen och min hälsa.
                        </p>

                        <h2 className="font-serif text-brand-navy">Hur var det att jobba med Arne & Jan?</h2>
                        <p>
                            Att jobba med Arne & Jan var väldigt tryggt och professionellt. Jag kände mig förstådd
                            och han kunde identifiera vad just jag behövde arbeta med.
                        </p>

                        <h2 className="font-serif text-brand-navy">
                            Tror du att upplägget med individuell behandling var mer effektivt eller på något sätt bättre för dig än en gruppbaserad behandling på behandlingshem, och i så fall varför?
                        </h2>
                        <p>
                            Ja, för mig var den individuella behandling mycket mer effektiv. Jag fick allt fokus på
                            mina specifika mönster, min bakgrund, mina behov, vilket gjorde att vi kunde gå djupare
                            arbeta snabbare. I grupp får man oftast anpassa sig till andras tempo och problematik,
                            men här handlade allt om min situation. Det kändes bra för mig.
                        </p>

                        <div className="bg-brand-navy text-brand-cream p-8 my-8 rounded-xl not-prose text-center">
                            <p className="font-serif text-2xl italic mb-4">
                                &quot;Jag har verktyg som fungerar i vardagen och känner mig mer stabil, medveten och närvarande.&quot;
                            </p>
                            <p className="text-brand-cream/70 text-sm uppercase tracking-widest">
                                – &quot;Samir&quot;, Tidigare klient
                            </p>
                        </div>

                        <h2 className="font-serif text-brand-navy">
                            Skulle du rekommendera andra som söker behandling att vända sig till Arne & kollega och i så fall varför?
                        </h2>
                        <p>
                            Ja, jag skulle absolut rekommendera dem. Arbetssättet är personligt, effektivt och
                            professionellt. De ser hela människan och anpassar behandlingen efter individen, vilket
                            jag tror är avgörande för att skapa en hållbar förändring.
                        </p>
                        <p>
                            Om man verkligen vill jobba med sig själv och få stöd som ger skillnad, är det ett
                            mycket bra val.
                        </p>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="py-16 bg-brand-cream border-t border-brand-navy/10">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h3 className="font-serif text-3xl text-brand-navy mb-6">
                        Din berättelse kan också förändras
                    </h3>
                    <p className="text-brand-gray mb-8">
                        Om Samirs berättelse väcker något i dig, tveka inte att höra av dig.
                        Vi finns här för att lyssna.
                    </p>
                    <Link
                        href="#contact"
                        className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-white transition-colors shadow-sketch inline-block"
                    >
                        Kontakta oss
                    </Link>
                </div>
            </section>
        </>
    );
}
