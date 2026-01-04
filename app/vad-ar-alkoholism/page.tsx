import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vad är alkoholism? | Addicted Rehab",
    description: "Lär dig mer om alkoholism och alkoholberoende - symptom, orsaker, konsekvenser och behandling.",
};

export default function VadArAlkoholismPage() {
    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-brand-section-bg relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                        Kunskap
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-brand-header-text mb-8 leading-tight">
                        Vad är <span className="marker-highlight px-2">alkoholism?</span>
                    </h1>
                    <p className="font-sans text-lg text-brand-gray font-light leading-relaxed max-w-2xl mx-auto">
                        Alkoholism är en kronisk sjukdom som påverkar hjärnans belöningssystem. Det handlar inte om
                        viljestyrka eller moral – det är en medicinsk tillstånd som kräver professionell behandling.
                    </p>
                </div>
            </header>

            {/* Section 1: What is Alcoholism + Symptoms */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] bg-brand-section-bg">
                <div className="flex flex-col justify-center px-8 py-16 lg:px-20 lg:py-24 order-2 lg:order-1">
                    <div className="max-w-xl mx-auto lg:mx-0 space-y-8">
                        <h2 className="font-serif text-5xl md:text-6xl font-medium text-brand-header-text leading-tight tracking-tight">
                            Vad är <br />
                            <span className="text-brand-header-text/80">alkoholism</span>
                        </h2>
                        <div className="space-y-4">
                            <p className="text-lg text-brand-gray font-sans font-light leading-relaxed">
                                Alkoholism, eller alkoholberoende, är en kronisk sjukdom som gör att en person förlorar kontrollen över sitt drickande. Det handlar inte bara om mängden alkohol utan om ett starkt sug, tvångsmässiga beteenden och fortsatta problem trots negativa konsekvenser.
                            </p>
                            <p className="text-lg text-brand-gray font-sans font-light leading-relaxed">
                                Alkoholism påverkar både kroppen och psyket och kan leda till allvarliga hälsorisker och sociala svårigheter.
                            </p>
                        </div>
                        <div className="pt-8 space-y-6">
                            <h3 className="font-serif text-4xl md:text-5xl font-medium text-brand-header-text leading-tight">
                                Vanliga symtom på <br /> alkoholism
                            </h3>
                            <p className="text-lg text-brand-navy font-sans font-medium leading-relaxed">
                                Att känna igen symtomen i tid är avgörande för att kunna söka rätt hjälp. Vanliga tecken är:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Starkt behov eller sug efter alkohol",
                                    "Svårt att sluta dricka när man väl har börjat",
                                    "Behov av större mängder alkohol för att uppnå samma effekt",
                                    "Abstinenssymtom som oro, svettningar, irritabilitet eller skakningar",
                                    "Fortsatt användning trots problem i arbete, relationer eller hälsa",
                                ].map((symptom, i) => (
                                    <li key={i} className="flex items-start gap-3 text-brand-gray font-sans font-light">
                                        <span className="text-lg mt-0.5 text-brand-navy font-bold">✕</span>
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative order-1 lg:order-2 h-96 lg:h-auto overflow-hidden bg-brand-section-bg">
                    <Image
                        src="/images/8eec4807-8c8b-4a0f-afbf-9a6200c0fa6b.jpeg"
                        alt="Man sitting at a table looking distressed with bottles, artistic illustration style"
                        fill
                        quality={100}
                        priority
                        className="object-cover opacity-90 hover-brighten"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cream/20 pointer-events-none"></div>
                </div>
            </section>

            {/* Section 2: Causes + Consequences */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-brand-section-bg">
                <div className="relative h-96 lg:h-auto overflow-hidden bg-brand-section-bg">
                    <Image
                        src="/images/transparent-bild.png"
                        alt="Sketch illustration of a person hiding face on table with bottles"
                        fill
                        quality={100}
                        className="object-cover hover-brighten"
                    />
                </div>
                <div className="flex flex-col justify-center px-8 py-16 lg:px-20 lg:py-24">
                    <div className="max-w-xl mx-auto lg:mx-0 space-y-12">
                        {/* Causes */}
                        <div className="space-y-6">
                            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-header-text leading-tight">
                                Orsaker till <br /> alkoholberoende
                            </h2>
                            <p className="text-lg text-brand-gray font-sans font-light leading-relaxed">
                                Alkoholism utvecklas oftast av flera faktorer i kombination. Genetiska anlag, stress, ångest, uppväxtmiljö och sociala sammanhang kan alla bidra. För vissa fungerar alkohol som ett sätt att hantera svåra känslor, medan andra påverkas starkare biologiskt av alkoholens effekter.
                            </p>
                        </div>

                        {/* Consequences */}
                        <div className="space-y-6 pt-4">
                            <h2 className="font-serif text-4xl md:text-5xl font-medium text-brand-header-text leading-tight">
                                Konsekvenser av <br /> alkoholism
                            </h2>
                            <p className="text-lg text-brand-gray font-sans font-light leading-relaxed">
                                Utan behandling kan alkoholberoende leda till fysiska skador som leversjukdom, högt blodtryck och hjärtproblem. Psykiska konsekvenser som depression, ångest och relationsproblem är också vanliga. Ju tidigare man söker hjälp, desto större är chansen till återhämtning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Treatment & When to Seek Help */}
            <section className="py-24 px-8 lg:px-20 bg-brand-section-bg border-t border-brand-navy/10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                        <article className="space-y-6 border-l-2 border-brand-navy pl-8 hover-lift">
                            <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-header-text">
                                Är alkoholism behandlingsbart?
                            </h3>
                            <p className="text-lg text-brand-gray font-sans font-light leading-relaxed">
                                Ja. Alkoholberoende kan behandlas med professionellt stöd. Vanliga metoder är samtalsterapi, gruppbehandling, stödprogram och strukturerad uppföljning. Många upplever stora förbättringar när de får rätt hjälp i tid.
                            </p>
                        </article>
                        <article className="space-y-6 border-l-2 border-brand-navy pl-8 hover-lift">
                            <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-header-text">
                                När bör man söka hjälp?
                            </h3>
                            <p className="text-lg text-brand-gray font-sans font-light leading-relaxed">
                                Om alkoholen börjar påverka din vardag, relationer eller hälsa är det viktigt att agera tidigt. Professionell behandling kan hjälpa dig att förstå orsakerna bakom beroendet, hantera suget och återfå kontrollen över livet.
                            </p>
                        </article>
                    </div>
                    <div className="mt-24 text-center">
                        <Link
                            href="#contact"
                            className="sketchy-btn bg-brand-orange hover:bg-brand-orange/90 text-brand-navy font-bold text-xs uppercase tracking-widest px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
                        >
                            Kontakta Oss
                        </Link>
                        <p className="mt-4 text-sm text-brand-gray font-sans font-light">
                            Vi finns här för att lyssna och hjälpa dig vidare.
                        </p>
                    </div>
                </div>
            </section>

            {/* Treatment Info Section */}
            <section className="pt-24 pb-0 bg-brand-navy text-brand-cream">
                <div className="container mx-auto px-6 max-w-4xl text-center pb-24">
                    <h2 className="font-serif text-4xl md:text-5xl mb-8">Det finns en väg framåt</h2>
                    <p className="text-xl text-brand-cream/80 font-sans font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Med rätt behandling och stöd kan du återta kontrollen över ditt liv. På Addicted Rehab erbjuder vi
                        individuell behandling som är anpassad efter just dina behov.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/var-behandling"
                            className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-orange px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors shadow-sketch"
                        >
                            Läs om vår behandling
                        </Link>
                        <Link
                            href="/berattelser"
                            className="sketchy-btn bg-transparent text-brand-cream border-2 border-brand-cream px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-cream hover:text-brand-navy transition-colors"
                        >
                            Läs andras berättelser
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
