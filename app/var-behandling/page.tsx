import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FAQSection from "@/components/FAQAccordion";

export const metadata: Metadata = {
    title: "Vår Behandling | Addicted Rehab",
    description: "Individuell 12-stegsbehandling enligt Minnesotametoden i Spanien. En behandling som helt och hållet utgår från dig.",
};

export default function VarBehandlingPage() {
    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-brand-section-bg relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <div>
                        <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                            Behandlingen
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-brand-header-text mb-8 leading-tight">
                            En behandling som <br />
                            <span className="marker-highlight px-2 transform -rotate-1 inline-block">utgår från dig</span>
                        </h1>
                        <p className="text-xl text-brand-gray leading-relaxed max-w-3xl">
                            Hos oss får du en behandling som är helt och hållet formad efter dig – dina erfarenheter, dina
                            känslor och dina behov. Inga grupper, inga generella program, inga krav på att dela mer än du vill.
                            Här är det du som står i centrum, och varje samtal, övning och strategi anpassas efter just din livssituation.
                        </p>
                    </div>
                </div>
            </header>

            {/* Environment & Support Section */}
            <section className="py-24 bg-brand-white relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        {/* Image Left */}
                        <div className="relative group">
                            <div className="absolute inset-0 border-2 border-brand-orange sketchy-box transform -rotate-2 scale-105 opacity-20"></div>
                            <div className="relative sketchy-box overflow-hidden border-2 border-brand-navy shadow-sketch transform rotate-1 transition-transform group-hover:rotate-0">
                                <Image
                                    src="/images/vår-behandling 1x1.jpg"
                                    alt="Arne Stålberg"
                                    width={600}
                                    height={600}
                                    className="w-full h-[600px] object-cover transition-all duration-700 hover-brighten"
                                />
                            </div>
                        </div>

                        {/* Text Right */}
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-header-text mb-6">
                                En lugn miljö som skapar förändring
                            </h2>
                            <p className="text-brand-gray text-lg leading-relaxed mb-6">
                                Behandlingen sker i en trygg och avskild miljö i Spanien, där värmen, naturen och avståndet till
                                vardagen gör det lättare att hitta tillbaka till sig själv. När stressen och kraven får vila kan
                                både kropp och sinne landa, och det är ofta då den riktiga förändringen börjar växa fram.
                            </p>
                            <p className="text-brand-gray text-lg leading-relaxed">
                                Här får du tid att andas, tänka klart och möta dina känslor utan att kastas tillbaka i gamla mönster.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Left */}
                        <div className="order-2 lg:order-1">
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-header-text mb-6">
                                Ett nära stöd genom hela processen
                            </h2>
                            <p className="text-brand-gray text-lg leading-relaxed mb-6">
                                Arne och kollega arbetar med ett varmt, lugnt och lyhört bemötande som gör att många beskriver
                                att de för första gången känner sig riktigt förstådda. Du blir sedd, bekräftad och mött utan
                                dömande eller förutfattade meningar.
                            </p>
                            <div className="bg-brand-cream p-6 border-l-4 border-brand-orange">
                                <p className="text-brand-navy italic font-serif text-lg">
                                    &quot;Den relationella tryggheten gör att du vågar vara ärlig – med dig själv och med
                                    behandlingen – och det är då verkliga förändringar kan ske. Vi går vid din sida i varje steg.&quot;
                                </p>
                            </div>
                        </div>

                        {/* Image Right */}
                        <div className="order-1 lg:order-2 relative group">
                            <div className="absolute inset-0 border-2 border-brand-orange sketchy-box transform rotate-2 scale-105 opacity-20"></div>
                            <div className="relative sketchy-box overflow-hidden border-2 border-brand-navy shadow-sketch transform -rotate-1 transition-transform group-hover:rotate-0">
                                <Image
                                    src="/images/vår-behandling%201x1%20%232.png"
                                    alt="Jan Hellberg"
                                    width={600}
                                    height={600}
                                    className="w-full h-[600px] object-cover transition-all duration-700 hover-brighten"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Individuell Behandling Benefits */}
            <section className="py-24 px-6 bg-brand-navy relative">
                {/* Decorative blurs */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Column - Text */}
                        <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
                            <div className="space-y-4">
                                <span className="text-brand-orange font-medium tracking-wider uppercase text-sm border-b-2 border-brand-orange inline-block pb-1">
                                    Behandlingsmetodik
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-white leading-[1.1] tracking-tight">
                                    Individuell<br />behandling
                                </h2>
                                <p className="text-brand-cream/70 text-lg leading-relaxed max-w-md">
                                    Vi arbetar endast med en klient åt gången för att säkerställa maximalt fokus och resultat. Effekten av detta arbetssätt är djupgående.
                                </p>
                            </div>

                            <div className="pt-4 border-l-4 border-brand-orange pl-6">
                                <blockquote className="text-xl md:text-2xl font-serif text-brand-white italic leading-snug">
                                    &quot;Det är behandling utan störningsmoment och utan jämförelser.&quot;
                                </blockquote>
                            </div>


                        </div>

                        {/* Right Column - Cards */}
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Card 1 - Fokus på dig */}
                                <div className="group bg-brand-white/5 border-2 border-brand-cream/20 sketchy-box p-8 transition-all duration-300 hover:border-brand-orange/50 hover:shadow-sketch relative overflow-hidden transform rotate-1 hover:rotate-0 hover-lift">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-transparent -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" style={{ borderRadius: '0 0 0 100%' }}></div>
                                    <div className="relative w-14 h-14 mb-6">
                                        <div className="absolute inset-0 bg-brand-orange/30 sketchy-box transform translate-x-1 translate-y-1"></div>
                                        <div className="relative w-full h-full bg-brand-white/10 border-2 border-brand-orange/50 sketchy-box flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                                            <svg className="w-7 h-7 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-white mb-3">Fokus på dig</h3>
                                    <p className="text-brand-cream/70 leading-relaxed">
                                        Fokus på dina unika mönster och behov. Din resa formas helt efter dina förutsättningar utan kompromisser.
                                    </p>
                                </div>

                                {/* Card 2 - Öppenhet */}
                                <div className="group bg-brand-white/5 border-2 border-brand-cream/20 sketchy-box p-8 transition-all duration-300 hover:border-brand-orange/50 hover:shadow-sketch relative overflow-hidden transform -rotate-1 hover:rotate-0 hover-lift">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-transparent -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" style={{ borderRadius: '0 0 0 100%' }}></div>
                                    <div className="relative w-14 h-14 mb-6">
                                        <div className="absolute inset-0 bg-brand-orange/30 sketchy-box transform translate-x-1 translate-y-1"></div>
                                        <div className="relative w-full h-full bg-brand-white/10 border-2 border-brand-orange/50 sketchy-box flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                                            <svg className="w-7 h-7 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5-2.28 0-4.27 1.54-4.84 3.75-.14.54.18 1.08.72 1.22.53.14 1.08-.18 1.22-.72C9.44 3.93 10.63 3 12 3c1.65 0 3 1.35 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-white mb-3">Öppenhet</h3>
                                    <p className="text-brand-cream/70 leading-relaxed">
                                        Samtal där du vågar vara helt öppen. En trygg miljö där sekretess och förtroende är grundstenarna.
                                    </p>
                                </div>

                                {/* Card 3 - Ditt tempo */}
                                <div className="group bg-brand-white/5 border-2 border-brand-cream/20 sketchy-box p-8 transition-all duration-300 hover:border-brand-orange/50 hover:shadow-sketch relative overflow-hidden transform -rotate-[0.5deg] hover:rotate-0 hover-lift">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-transparent -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" style={{ borderRadius: '0 0 0 100%' }}></div>
                                    <div className="relative w-14 h-14 mb-6">
                                        <div className="absolute inset-0 bg-brand-orange/30 sketchy-box transform translate-x-1 translate-y-1"></div>
                                        <div className="relative w-full h-full bg-brand-white/10 border-2 border-brand-orange/50 sketchy-box flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                                            <svg className="w-7 h-7 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-white mb-3">Ditt tempo</h3>
                                    <p className="text-brand-cream/70 leading-relaxed">
                                        Ett tempo som följer din förmåga, inte en gruppstruktur. Vi accelererar när du är redo och pausar när du behöver.
                                    </p>
                                </div>

                                {/* Card 4 - Verktyg */}
                                <div className="group bg-brand-white/5 border-2 border-brand-cream/20 sketchy-box p-8 transition-all duration-300 hover:border-brand-orange/50 hover:shadow-sketch relative overflow-hidden transform rotate-[0.75deg] hover:rotate-0 hover-lift">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-orange/10 to-transparent -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500" style={{ borderRadius: '0 0 0 100%' }}></div>
                                    <div className="relative w-14 h-14 mb-6">
                                        <div className="absolute inset-0 bg-brand-orange/30 sketchy-box transform translate-x-1 translate-y-1"></div>
                                        <div className="relative w-full h-full bg-brand-white/10 border-2 border-brand-orange/50 sketchy-box flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                                            <svg className="w-7 h-7 text-brand-orange" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-white mb-3">Verktyg</h3>
                                    <p className="text-brand-cream/70 leading-relaxed">
                                        Konkreta verktyg som fungerar i just din vardag. Strategier anpassade för dina utmaningar och mål.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Outcome */}
            <section className="py-24 bg-brand-section-bg">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Tools */}
                        <div>
                            <h2 className="font-serif text-3xl text-brand-header-text mb-6">
                                Konkreta verktyg för ett nyktert och stabilt liv
                            </h2>
                            <p className="text-brand-gray leading-relaxed mb-8">
                                Under behandlingen arbetar du både med samtal och praktiska övningar som hjälper dig att förstå
                                dina mönster och utveckla nya strategier. Du får lära dig hur du hanterar sug och återfallstankar,
                                hur du möter stress och känslor utan alkohol, hur du bygger struktur i vardagen och hur du stärker
                                relationer som betyder något för dig.
                            </p>

                            <h3 className="font-bold text-sm tracking-widest uppercase text-brand-navy mb-6 border-b border-brand-navy/10 pb-2">
                                Du lär dig bl.a:
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Hantera sug och återfallstankar",
                                    "Möta stress och känslor utan alkohol",
                                    "Bygga rutiner och struktur",
                                    "Stärka relationer",
                                    "Behålla motivationen över tid",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-gray">
                                        <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Outcome */}
                        <div className="bg-brand-white p-8 border-2 border-brand-navy sketchy-box shadow-sketch hover-lift">
                            <h2 className="font-serif text-3xl text-brand-header-text mb-6">Ett liv du kan stå stadigt i</h2>
                            <p className="text-brand-gray leading-relaxed mb-6">
                                Många som genomgår vår behandling beskriver att de får med sig en ny känsla av lugn, klarhet och hopp.
                                När du förstår dig själv på djupet och lär dig hur du kan möta livet utan alkohol skapas också något
                                annat – en stabilitet som gör att du kan stå kvar, även när det blåser.
                            </p>
                            <p className="text-brand-gray leading-relaxed">
                                Vår ambition är att du ska få tillbaka både dig själv och ditt liv, och att du ska känna att
                                framtiden faktiskt är möjlig att forma.
                            </p>

                            <div className="mt-8 pt-6 border-t border-brand-navy/10 flex items-center justify-between">
                                <span className="text-xs font-bold tracking-widest text-brand-orange uppercase">La Marina, Spanien</span>
                                <svg className="w-6 h-6 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="5" />
                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 bg-brand-section-bg relative">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex items-center px-5 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-brand-orange/50 text-brand-navy bg-brand-white shadow-sm">
                            Metodik
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-center font-serif text-brand-navy mb-12 max-w-3xl mx-auto">
                        Vi jobbar med Individuell 12-stegsbehandling enligt Minnesotametoden
                    </h2>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed text-brand-gray">
                        <p>
                            Att kämpa mot alkoholism och alkoholberoende kan vara en utmanande resa. Men det är viktigt att veta att du inte är ensam. På vår klinik arbetar vi med individuell 12-stegsbehandling enligt Minnesotametoden för att hjälpa människor att återfå kontrollen över sina liv.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-2xl font-semibold text-brand-navy mb-4 font-serif italic">
                                Vad är tolvstegsprogrammet?
                            </h3>
                            <p>
                                12-stegsprogrammet har sina rötter inom självhjälpsrörelsen Anonyma Alkoholister (AA), men det är inte identiskt med AA. Det betraktas som en behandlingsmetod för alkoholism och följer en manual med olika steg.
                            </p>
                        </div>

                        <p>
                            Kärnan i 12-stegsprogrammet är erkännandet av att man har förlorat kontrollen över sitt drickande och att man behöver hjälp för att bryta mönstret. Genom att arbeta sig igenom stegen, får individen verktyg för att hantera känslor, bygga upp relationer och skapa en meningsfull tillvaro utan alkohol.
                        </p>

                        <p>
                            På vår klinik anpassar vi behandlingen efter varje individs unika behov och förutsättningar. Vi tror på att varje människa har potential att förändras och att tillfrisknande är möjligt för alla.
                        </p>
                    </div>

                    {/* Call to Action Card */}
                    <div className="mt-20 max-w-xl mx-auto">
                        <div className="bg-brand-white border-2 border-brand-navy/10 sketchy-box p-8 md:p-12 text-center relative overflow-hidden shadow-sketch">
                            {/* Dotted pattern background */}
                            <div
                                className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(#0e1626 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            ></div>

                            <h3 className="text-xl font-medium text-brand-navy mb-8 relative z-10 font-serif italic">
                                Ring oss idag, så kan vi prata om din situation
                            </h3>

                            <a
                                href="tel:0732520358"
                                className="inline-flex items-center justify-center gap-3 bg-brand-orange text-brand-navy font-bold py-4 px-10 text-lg sketchy-btn border-2 border-brand-navy shadow-sketch hover:shadow-sketch-hover hover:translate-x-[-2px] hover:translate-y-[-2px] relative z-10 group transition-all"
                            >
                                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span className="tracking-wider">073 - 252 03 58</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plan & Logistics */}
            <section className="py-24 bg-brand-section-bg">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Behandlingsplan */}
                        <div>
                            <h2 className="font-serif text-3xl text-brand-header-text mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-brand-navy text-brand-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                Behandlingsplan
                            </h2>
                            <div className="bg-brand-white p-8 border-l-4 border-brand-navy shadow-sm h-full">
                                <p className="text-brand-gray mb-4">
                                    Den vanligaste behandlingstiden är <span className="font-bold text-brand-navy">30 dagar på plats i Spanien</span>.
                                    Men för att anpassa klienternas behov går det att göra upp andra behandlingsformer.
                                </p>
                                <p className="text-brand-gray">
                                    En behandling med hög kvalitet till ett betydligt lägre pris än i Sverige.
                                </p>
                                <Link href="#contact" className="mt-4 text-brand-orange font-bold text-sm uppercase tracking-widest hover:underline inline-block">
                                    Kontakta oss för prisuppgift →
                                </Link>
                            </div>
                        </div>

                        {/* Upplägg */}
                        <div className="mt-8 md:mt-0">
                            <h2 className="font-serif text-3xl text-brand-header-text mb-6 flex items-center gap-3">
                                <span className="w-8 h-8 bg-brand-orange text-brand-navy rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                Upplägg
                            </h2>
                            <div className="bg-brand-white p-8 border-l-4 border-brand-orange shadow-sm h-full">
                                <ul className="space-y-4 text-brand-gray">
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-brand-orange shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        <span>Behandling i Spanien 2 veckor, uppehåll hemma 1-2 veckor för att sedan slutföra behandlingen i Spanien med 2 veckor.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-brand-orange shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                        </svg>
                                        <span>För dig som har ont om tid så finns det möjlighet att jobba in tid eftersom Söndag är ledig dag.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <svg className="w-5 h-5 text-brand-orange shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                        <span>Andra lösningar kan diskuteras. Efter avslutad behandling ingår utvecklingssamtal.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />
        </>
    );
}
