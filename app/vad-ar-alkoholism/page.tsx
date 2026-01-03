import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
    title: "Vad är alkoholism? | Addicted Rehab",
    description: "Lär dig mer om alkoholism och alkoholberoende - symptom, orsaker, konsekvenser och behandling.",
};

export default function VadArAlkoholismPage() {
    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-brand-cream relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                        Kunskap
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-brand-navy mb-8 leading-tight">
                        Vad är <span className="marker-highlight px-2">alkoholism?</span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
                        Alkoholism är en kronisk sjukdom som påverkar hjärnans belöningssystem. Det handlar inte om
                        viljestyrka eller moral – det är en medicinsk tillstånd som kräver professionell behandling.
                    </p>
                </div>
            </header>

            {/* Symptoms Section */}
            <section className="py-24 bg-brand-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="font-serif text-4xl text-brand-navy mb-12 text-center">
                        Tecken på alkoholberoende
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Svårighet att begränsa drickandet",
                            "Behov av större mängder för samma effekt",
                            "Abstinenssymptom vid försök att sluta",
                            "Fortsatt drickande trots negativa konsekvenser",
                            "Att ge upp aktiviteter för alkoholens skull",
                            "Stark längtan eller sug efter alkohol",
                            "Misslyckas med att fullfölja åtaganden",
                            "Drickande i riskfyllda situationer",
                        ].map((symptom, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 bg-brand-cream/50 rounded-lg border-l-4 border-brand-orange">
                                <div className="w-8 h-8 bg-brand-navy text-brand-orange rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                                    {i + 1}
                                </div>
                                <p className="text-brand-gray">{symptom}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-brand-navy text-brand-cream rounded-2xl text-center">
                        <p className="font-serif text-xl italic mb-4">
                            &quot;Känner du igen dig i flera av dessa punkter? Du är inte ensam, och det finns hjälp att få.&quot;
                        </p>
                        <Link
                            href="#contact"
                            className="text-brand-orange font-bold uppercase tracking-widest hover:underline"
                        >
                            Kontakta oss för ett första samtal →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Causes Section */}
            <section className="py-24 bg-brand-cream border-y-2 border-brand-navy/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="font-serif text-4xl text-brand-navy mb-8 text-center">
                        Varför utvecklar man alkoholism?
                    </h2>
                    <p className="text-brand-gray text-lg text-center mb-12 max-w-2xl mx-auto">
                        Alkoholism uppstår genom ett komplext samspel mellan genetiska, psykologiska och sociala faktorer.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Genetik",
                                desc: "Forskning visar att ärftlighet spelar en viktig roll. Har du nära släktingar med alkoholproblem ökar risken.",
                            },
                            {
                                title: "Psykologi",
                                desc: "Ångest, depression, trauma och stress kan leda till självmedicinering med alkohol som tillfällig lindring.",
                            },
                            {
                                title: "Miljö",
                                desc: "Uppväxtmiljö, socialt umgänge och kulturella normer påverkar vår relation till alkohol.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-white p-8 border-2 border-brand-navy sketchy-box shadow-sketch">
                                <h3 className="font-serif text-2xl text-brand-navy mb-4">{item.title}</h3>
                                <p className="text-brand-gray leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consequences Section */}
            <section className="py-24 bg-brand-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="font-serif text-4xl text-brand-navy mb-8 text-center">
                        Konsekvenser av obehandlat beroende
                    </h2>

                    <div className="prose prose-lg prose-gray mx-auto">
                        <p>
                            Alkoholberoende som inte behandlas kan leda till allvarliga konsekvenser för både kropp och sinne.
                            Fysiskt kan det orsaka leverskador, hjärt-kärlsjukdomar och neurologiska problem. Psykiskt ökar
                            risken för depression, ångest och kognitiva svårigheter.
                        </p>
                        <p>
                            Socialt påverkas relationer, arbete och ekonomi negativt. Många upplever isolering och skam som
                            i sin tur förstärker beroendet. Det är en ond cirkel som är svår att bryta på egen hand.
                        </p>
                    </div>

                    <div className="mt-12 bg-brand-orange/10 border-l-4 border-brand-orange p-8 rounded-r-xl">
                        <p className="font-serif text-xl text-brand-navy italic">
                            &quot;Det viktigaste steget är att erkänna att man behöver hjälp. Därifrån kan resan mot ett friskt liv börja.&quot;
                        </p>
                    </div>
                </div>
            </section>

            {/* Treatment Info Section */}
            <section className="py-24 bg-brand-navy text-brand-cream">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="font-serif text-4xl md:text-5xl mb-8">Det finns en väg framåt</h2>
                    <p className="text-xl text-brand-cream/80 mb-12 max-w-2xl mx-auto">
                        Med rätt behandling och stöd kan du återta kontrollen över ditt liv. På Addicted Rehab erbjuder vi
                        individuell behandling som är anpassad efter just dina behov.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/var-behandling"
                            className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-orange px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-cream transition-colors shadow-sketch"
                        >
                            Läs om vår behandling
                        </Link>
                        <Link
                            href="/berattelser"
                            className="sketchy-btn bg-transparent text-brand-cream border-2 border-brand-cream px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-cream hover:text-brand-navy transition-colors"
                        >
                            Läs andras berättelser
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </>
    );
}
