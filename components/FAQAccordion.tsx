"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQAccordionProps {
    title: string;
    items: FAQItem[];
    openIndex: number | null;
    onToggle: (index: number, sectionOffset: number) => void;
    sectionOffset: number;
}

function FAQAccordion({ title, items, openIndex, onToggle, sectionOffset }: FAQAccordionProps) {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-sm tracking-widest uppercase text-brand-orange mb-6">{title}</h3>
            {items.map((item, i) => {
                const globalIndex = sectionOffset + i;
                const isOpen = openIndex === globalIndex;
                return (
                    <div
                        key={i}
                        className="bg-brand-cream/30 sketchy-box border-2 border-brand-navy/10 overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() => onToggle(globalIndex, sectionOffset)}
                            className="w-full p-5 text-left font-bold text-brand-navy flex justify-between items-center gap-4 hover:bg-brand-cream/50 transition-colors"
                        >
                            <span>{item.question}</span>
                            <svg
                                className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <div className="px-5 pb-5 text-brand-gray text-sm leading-relaxed">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const treatmentFAQs: FAQItem[] = [
        {
            question: "Behandlar ni bara alkoholism?",
            answer: "För det mesta är det alkohol men vi tar emot även dom som brukar narkotika."
        },
        {
            question: "Bör jag följa tolvstegsmetoden för resten av mitt liv?",
            answer: (
                <div className="space-y-3">
                    <p className="font-semibold text-brand-navy">Vad forskningen visar:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>Vissa människor förblir nyktra länge med fortsatt tolvstegsengagemang</li>
                        <li>Andra bygger med tiden upp egna strategier: terapi, relationer, rutiner, mening, självkännedom</li>
                        <li>Det viktiga är inte metoden, utan resultatet: stabilitet, livskvalitet och låg återfallsrisk</li>
                    </ul>
                </div>
            )
        },
        {
            question: "Kan jag verkligen göra en förändring på bara 30 dagar?",
            answer: (
                <div className="space-y-3">
                    <p>Ja. En förändring kan faktiskt ske på 30 dagar – inte som ett färdigt slutresultat, utan som ett tydligt skifte i riktning, funktion och självbild. Det avgörande är att förstå vilken sorts förändring som är möjlig på den tidsramen.</p>
                    <p>En förändring innebär inte att alla problem är lösta. Den innebär att:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Ditt fysiska och mentala grundläge förändras märkbart</li>
                        <li>Ditt beteende inte längre styrs helt av automatiska impulser</li>
                        <li>Ditt beslutsutrymme ökar</li>
                        <li>Din självbild förskjuts från &quot;fast&quot; till &quot;handlingsförmögen&quot;</li>
                    </ul>
                    <p>För många är detta den största förändringen de gjort på flera år. <strong className="text-brand-navy">Din motivation till förändring är avgörande.</strong></p>
                </div>
            )
        },
        {
            question: "Jag har varit på behandling förut, varför är detta annorlunda?",
            answer: (
                <div className="space-y-3">
                    <p>Vi erbjuder individuell samtalsbehandling, vilket innebär att du arbetar enbart tillsammans med en terapeut. Till skillnad från många andra behandlingsformer som bygger på gruppbehandling, sker arbetet här i enskilda samtal.</p>
                    <p>Gruppbehandling passar inte alla. För vissa kan det upplevas som svårt eller belastande att dela personliga erfarenheter och livssituation inför andra. I samtalsbehandling får du istället ett tryggt, avskilt utrymme där fokus ligger helt på dig, dina behov och din vardag.</p>
                    <p>Det skapar förutsättningar för ett mer personligt, flexibelt och fördjupat arbete i din egen takt.</p>
                </div>
            )
        },
        {
            question: "Kommer vi att ha kontakt efter behandlingen?",
            answer: (
                <div className="space-y-3">
                    <p>Ja. Vi erbjuder uppföljning efter avslutad behandling för att:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Stödja dig i övergången till vardagen</li>
                        <li>Följa upp hur det fungerar över tid</li>
                        <li>Fånga upp svårigheter i ett tidigt skede</li>
                    </ul>
                    <p>Många upplever att just tiden efter behandlingen är avgörande. Genom uppföljning säkerställer vi att du inte står ensam när den intensiva behandlingsfasen är över.</p>
                </div>
            )
        },
        {
            question: "Vilka resultat kan jag förvänta mig av den här behandlingen?",
            answer: (
                <div className="space-y-3">
                    <p>Det du får med dig från samtalsbehandlingen kan beskrivas som en verktygslåda för vardagen. Den innehåller konkreta strategier och metoder som hjälper dig att:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Förstå och hantera alkoholens funktion i ditt liv</li>
                        <li>Identifiera och hantera risksituationer</li>
                        <li>Fatta medvetna beslut i vardagssituationer</li>
                        <li>Skapa hållbara rutiner och stödstrukturer</li>
                    </ul>
                    <p>Resultatet är inte ett &quot;perfekt liv utan problem&quot;, utan praktiska verktyg som gör att du kan leva mer stabilt, känna större kontroll och fatta beslut som stödjer din förändring på lång sikt.</p>
                </div>
            )
        }
    ];

    const practicalFAQs: FAQItem[] = [
        {
            question: "Får jag ta med husdjur?",
            answer: "Ja det är absolut möjligt, men kontakta oss först."
        },
        {
            question: "Hur tar jag mig från flygplatsen?",
            answer: "Vi hämtar upp dig på flygplatsen. Vi kommer att ha kontakt dagen innan du reser för att stämma av."
        },
        {
            question: "Finns det tillgång till gym eller liknande?",
            answer: (
                <p>
                    Ja, det finns ett riktigt fint gym.{" "}
                    <Link href="https://www.marinasenses.com/gym/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-medium">
                        Besök Marina Senses Gym →
                    </Link>
                </p>
            )
        },
        {
            question: "Hur bor jag?",
            answer: "Du kommer att bo själv i ett eget hus/radhus där du sköter dig själv, lagar mat och vanliga bestyr som du gör hemma."
        },
        {
            question: "Ingår mat med boendet?",
            answer: "Nej, mat ingår ej. Du bor i ett eget boende och sköter allt själv – du köper och lagar din egen mat. Ibland går vi ut och äter tillsammans."
        },
        {
            question: "Vad kostar det?",
            answer: "Det kan variera beroende på hur behandlingen läggs upp samt om du behöver boendet. Vår behandling är betydligt billigare än den som finns i Sverige."
        },
        {
            question: "Sjukskrivning och sjukpenning?",
            answer: (
                <div className="space-y-3">
                    <p>Våra behandlingsprogram ger rätt till sjukpenning i förebyggande syfte, vilket gör att arbetsgivaren inte behöver betala sjuklön när medarbetaren är i behandling.</p>
                    <p className="font-semibold text-brand-navy">Se relevanta länkar nedan:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>
                            <Link href="https://forsakringsmedicin.socialstyrelsen.se/beslutsstod-for-diagnoser/diagnoser/psykisk-sjukdom/skadligt-bruk-av-alkohol-och-alkoholberoende/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                                Socialstyrelsen - Sjukskrivning vid skadligt bruk av alkohol och alkoholberoende
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.forsakringskassan.se/privatperson/sjuk-eller-skadad/forebyggande-sjukpenning-rehabilitering-eller-planerad-vard" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                                Försäkringskassan - Förebyggande sjukpenning
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.forsakringskassan.se/privatperson/sjuk-eller-skadad/vad-ska-jag-gora-om-jag-drabbas-av-psykisk-ohalsa" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                                Försäkringskassan - Jag kan inte jobba på grund av psykisk ohälsa
                            </Link>
                        </li>
                    </ul>
                </div>
            )
        }
    ];

    const treatmentOffset = 0;
    const practicalOffset = treatmentFAQs.length;

    return (
        <section className="py-24 bg-brand-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="font-serif text-4xl text-center text-brand-navy mb-4">Vanliga frågor och svar</h2>
                <p className="text-center text-brand-gray mb-16 max-w-2xl mx-auto">
                    Här finns svar på vanliga frågor för dig som känner dig tveksam om antingen behandlingen eller de praktiska bitarna.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <FAQAccordion
                        title="Frågor om behandlingen"
                        items={treatmentFAQs}
                        openIndex={openIndex}
                        onToggle={handleToggle}
                        sectionOffset={treatmentOffset}
                    />
                    <FAQAccordion
                        title="Praktiska frågor"
                        items={practicalFAQs}
                        openIndex={openIndex}
                        onToggle={handleToggle}
                        sectionOffset={practicalOffset}
                    />
                </div>

                <div className="text-center mt-20 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-12 bg-brand-orange/10 -rotate-1 rounded-full blur-xl pointer-events-none"></div>
                    <p className="relative font-serif text-2xl md:text-3xl text-brand-navy italic">
                        Svar på fler frågor fås vid <Link href="#contact" className="underline decoration-2 decoration-brand-orange underline-offset-4 hover:text-brand-orange transition-colors">kontakt.</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
