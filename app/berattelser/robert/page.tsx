import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
    title: "Roberts berättelse | Addicted Rehab",
    description: "Läs Roberts resa från alkoholberoende till ett fritt liv genom individuell behandling.",
};

export default function RobertStoryPage() {
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
                        &quot;Robert&quot; berättar
                    </h1>
                    <p className="text-brand-gray text-lg">
                        En resa från ohanterlighet till frihet
                    </p>
                </div>
            </header>

            {/* Story Content */}
            <article className="py-16 bg-brand-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="prose prose-lg prose-gray">
                        <h2 className="font-serif text-brand-navy">Hur såg ditt liv ut innan?</h2>
                        <p>
                            Innan jag kom ner till Spanien kändes livet som om det hade låst sig. Jag vaknade med
                            ångest nästan varje dag, med hjärtat bultande och en känsla av att något var fel – utan
                            att jag kunde sätta fingret på vad.
                        </p>
                        <p>
                            Alkoholen hade gått från att vara något som &quot;hjälpte mig att slappna av&quot; till något
                            som styrde hela mitt dygn. Jag visste innerst inne att det inte längre handlade om att
                            njuta av ett glas vin – det handlade om att jag inte kunde vara utan.
                        </p>
                        <p>
                            Jag skämdes djupt. Jag ljög för min familj, drog mig undan vänner och försökte dölja
                            hur mycket jag faktiskt drack. Jag kände mig ensam, trots att jag var omgiven av
                            människor.
                        </p>

                        <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-6 my-8 not-prose">
                            <p className="font-serif text-xl italic text-brand-navy">
                                &quot;Jag kände mig ensam, trots att jag var omgiven av människor.&quot;
                            </p>
                        </div>

                        <h2 className="font-serif text-brand-navy">Vad fick dig att söka hjälp?</h2>
                        <p>
                            Det var min fru som till slut sa de ord jag behövde höra: &quot;Jag älskar dig, men
                            jag orkar inte längre se dig förstöra dig själv.&quot; Det slog hål på muren jag
                            hade byggt upp.
                        </p>
                        <p>
                            Jag insåg att jag höll på att förlora allt som betydde något för mig. Inte för att
                            jag var en dålig människa, utan för att jag var sjuk och behövde hjälp.
                        </p>

                        <h2 className="font-serif text-brand-navy">Hur upplevde du behandlingen?</h2>
                        <p>
                            Att komma till Addicted Rehab i Spanien var som att andas ut för första gången på
                            åratal. Miljön var lugn och varm, och jag kände direkt att Arne och Jan förstod
                            vad jag gick igenom – på riktigt.
                        </p>
                        <p>
                            Det som gjorde störst skillnad var att behandlingen var helt individuell. Jag
                            behövde inte sitta i en grupp och berätta om mina värsta ögonblick för främlingar.
                            Istället fick jag arbeta i min egen takt, med fokus på mina specifika mönster
                            och behov.
                        </p>

                        <h2 className="font-serif text-brand-navy">Hur ser ditt liv ut idag?</h2>
                        <p>
                            Idag är livet nästan oigenkännligt. Jag vaknar klar i huvudet. Jag känner mig
                            stolt över mina dagar istället för att skämmas över kvällarna.
                        </p>
                        <p>
                            Min relation till min fru har aldrig varit bättre. Vi pratar på ett sätt vi
                            inte gjort på år. Och mina barn – de har fått tillbaka sin pappa.
                        </p>

                        <div className="bg-brand-navy text-brand-cream p-8 my-8 rounded-xl not-prose text-center">
                            <p className="font-serif text-2xl italic mb-4">
                                &quot;Jag är inte längre en fånge i mitt eget liv.&quot;
                            </p>
                            <p className="text-brand-cream/70 text-sm uppercase tracking-widest">
                                – &quot;Robert&quot;, Tidigare klient
                            </p>
                        </div>
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
                        Om Roberts berättelse väcker något i dig, tveka inte att höra av dig.
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

            <ContactSection />
        </>
    );
}
