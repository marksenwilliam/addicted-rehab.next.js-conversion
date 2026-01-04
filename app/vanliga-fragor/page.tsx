import { Metadata } from "next";
import FAQSection from "@/components/FAQAccordion";

export const metadata: Metadata = {
    title: "Vanliga Frågor",
    description: "Svar på vanliga frågor om vår behandling, boende och det praktiska upplägget i Spanien.",
};

// FAQ structured data for rich results
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Behandlar ni bara alkoholism?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "För det mesta är det alkohol men vi tar emot även dom som brukar narkotika.",
            },
        },
        {
            "@type": "Question",
            name: "Kan jag verkligen göra en förändring på bara 30 dagar?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. En förändring kan faktiskt ske på 30 dagar – inte som ett färdigt slutresultat, utan som ett tydligt skifte i riktning, funktion och självbild. Din motivation till förändring är avgörande.",
            },
        },
        {
            "@type": "Question",
            name: "Jag har varit på behandling förut, varför är detta annorlunda?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Vi erbjuder individuell samtalsbehandling, vilket innebär att du arbetar enbart tillsammans med en terapeut. Till skillnad från många andra behandlingsformer som bygger på gruppbehandling, sker arbetet här i enskilda samtal.",
            },
        },
        {
            "@type": "Question",
            name: "Kommer vi att ha kontakt efter behandlingen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Vi erbjuder uppföljning efter avslutad behandling för att stödja dig i övergången till vardagen, följa upp hur det fungerar över tid, och fånga upp svårigheter i ett tidigt skede.",
            },
        },
        {
            "@type": "Question",
            name: "Får jag ta med husdjur?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja det är absolut möjligt, men kontakta oss först.",
            },
        },
        {
            "@type": "Question",
            name: "Hur tar jag mig från flygplatsen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Vi hämtar upp dig på flygplatsen. Vi kommer att ha kontakt dagen innan du reser för att stämma av.",
            },
        },
        {
            "@type": "Question",
            name: "Hur bor jag under behandlingen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Du kommer att bo själv i ett eget hus/radhus där du sköter dig själv, lagar mat och vanliga bestyr som du gör hemma.",
            },
        },
        {
            "@type": "Question",
            name: "Vad kostar behandlingen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Det kan variera beroende på hur behandlingen läggs upp samt om du behöver boendet. Vår behandling är betydligt billigare än den som finns i Sverige.",
            },
        },
    ],
};

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <header className="pt-32 pb-20 bg-brand-section-bg relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <div>
                        <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                            FAQ
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-brand-header-text mb-8 leading-tight">
                            Vanliga frågor <br />
                            <span className="marker-highlight px-2 transform -rotate-1 inline-block">& svar</span>
                        </h1>
                        <p className="text-xl text-brand-gray leading-relaxed max-w-3xl">
                            Här samlar vi svaren på de vanligaste funderingarna kring vår behandling, trygghet och hur allt fungerar praktiskt.
                        </p>
                    </div>
                </div>
            </header>

            <FAQSection />
        </>
    );
}
