import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
    title: "Vår Behandling | Addicted Rehab",
    description: "Individuell 12-stegsbehandling enligt Minnesotametoden i Spanien. En behandling som helt och hållet utgår från dig.",
};

export default function VarBehandlingPage() {
    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-brand-cream relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <div>
                        <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                            Behandlingen
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-brand-navy mb-8 leading-tight">
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
                            <div className="absolute -inset-4 border-2 border-brand-orange sketchy-box transform rotate-1 opacity-20"></div>
                            <div className="border-2 border-brand-navy sketchy-box p-3 bg-white relative z-10 transform -rotate-1 transition-transform group-hover:rotate-0">
                                <Image
                                    src="/images/hero-image.jpg"
                                    alt="La Marina, Spanien"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto rounded-sm"
                                />
                                <div className="absolute bottom-6 right-6 bg-brand-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-navy shadow-sm transform rotate-2">
                                    La Marina, Spanien
                                </div>
                            </div>
                        </div>

                        {/* Text Right */}
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6">
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
                            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy mb-6">
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
                            <div className="border-2 border-brand-navy sketchy-box p-3 bg-white relative z-10 transform rotate-1 transition-transform group-hover:rotate-0">
                                <Image
                                    src="/images/portrait_arne.jpg"
                                    alt="Arne Stålberg"
                                    width={600}
                                    height={400}
                                    className="w-full h-[400px] object-cover rounded-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Individuell Behandling Benefits */}
            <section className="py-24 bg-brand-navy text-brand-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e8a838' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Individuell behandling – på riktigt</h2>
                        <p className="text-xl text-brand-cream/80 max-w-2xl mx-auto">
                            Vi arbetar endast med en klient åt gången. Effekten av detta är:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "check", title: "Fokus på dig", desc: "Fokus på dina unika mönster och behov." },
                            { icon: "lock", title: "Öppenhet", desc: "Samtal där du vågar vara helt öppen." },
                            { icon: "clock", title: "Ditt tempo", desc: "Ett tempo som följer din förmåga, inte en gruppstruktur." },
                            { icon: "wrench", title: "Verktyg", desc: "Verktyg som fungerar i just din vardag." },
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-white/5 border border-brand-cream/10 p-6 rounded-lg backdrop-blur-sm hover:bg-brand-white/10 transition-colors">
                                <div className="w-8 h-8 text-brand-orange mb-4">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                                        {item.icon === "check" && <path d="M20 6L9 17l-5-5" />}
                                        {item.icon === "lock" && <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>}
                                        {item.icon === "clock" && <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>}
                                        {item.icon === "wrench" && <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />}
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-brand-cream/70">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-brand-orange mt-12 font-serif text-xl italic">
                        &quot;Det är behandling utan störningsmoment och utan jämförelser.&quot;
                    </p>
                </div>
            </section>

            {/* Tools & Outcome */}
            <section className="py-24 bg-brand-cream">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Tools */}
                        <div>
                            <h2 className="font-serif text-3xl text-brand-navy mb-6">
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
                        <div className="bg-brand-white p-8 border-2 border-brand-navy sketchy-box shadow-sketch">
                            <h2 className="font-serif text-3xl text-brand-navy mb-6">Ett liv du kan stå stadigt i</h2>
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
            <section className="py-24 bg-brand-white relative border-y-2 border-brand-navy/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="inline-block border-2 border-brand-orange px-4 py-1 mb-8 rounded-full transform -rotate-2">
                        <span className="font-bold text-xs tracking-widest text-brand-navy uppercase">Metodik</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-8">
                        Vi jobbar med Individuell 12-stegsbehandling enligt Minnesotametoden
                    </h2>

                    <div className="text-left prose prose-lg prose-gray mx-auto mb-12">
                        <h3 className="text-brand-navy font-serif">Vad är tolvstegsprogrammet?</h3>
                        <p>
                            Att kämpa mot alkoholism och alkoholberoende kan vara en utmanande resa. Men det är viktigt att veta
                            att du inte är ensam. På vår klinik arbetar vi med individuell 12-stegsbehandling enligt Minnesotametoden
                            för att hjälpa människor att återfå kontrollen över sina liv.
                        </p>
                        <p>
                            12-stegsprogrammet har sina rötter inom självhjälpsrörelsen Anonyma Alkoholister (AA), men det är inte
                            identiskt med AA. Det betraktas som en behandlingsmetod för alkoholism och följer en manual med olika steg.
                        </p>
                    </div>

                    <div className="bg-brand-navy/5 p-8 rounded-2xl sketchy-box inline-block">
                        <p className="font-bold text-brand-navy mb-4">Ring oss idag, så kan vi prata om din situation</p>
                        <a
                            href="tel:0732520358"
                            className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-lg uppercase tracking-widest hover:bg-brand-white transition-colors shadow-sketch inline-flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            073 - 252 03 58
                        </a>
                    </div>
                </div>
            </section>

            {/* Plan & Logistics */}
            <section className="py-24 bg-brand-cream">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Behandlingsplan */}
                        <div>
                            <h2 className="font-serif text-3xl text-brand-navy mb-6 flex items-center gap-3">
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
                        <div>
                            <h2 className="font-serif text-3xl text-brand-navy mb-6 flex items-center gap-3">
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
            <section className="py-24 bg-brand-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="font-serif text-4xl text-center text-brand-navy mb-4">Vanliga frågor och svar</h2>
                    <p className="text-center text-brand-gray mb-16 max-w-2xl mx-auto">
                        Här finns svar på vanliga frågor för dig som känner dig tveksam om antingen behandlingen eller de praktiska bitarna.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Treatment FAQ */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-sm tracking-widest uppercase text-brand-orange mb-6">Frågor om behandlingen</h3>
                            {[
                                { q: "Behandlar ni bara alkoholism?", a: "Kontakta oss för mer information om våra behandlingsområden." },
                                { q: "Kan jag verkligen göra en förändring på bara 30 dagar?", a: "30 dagar ger en stark grund. Med rätt verktyg och uppföljning kan en månad vara starten på ett helt nytt liv." },
                                { q: "Kommer vi att ha kontakt efter behandlingen?", a: "Ja, utvecklingssamtal och uppföljning ingår." },
                            ].map((item, i) => (
                                <details key={i} className="group bg-brand-cream/30 p-4 rounded-lg cursor-pointer">
                                    <summary className="font-bold text-brand-navy flex justify-between items-center list-none">
                                        {item.q}
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-brand-gray text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>

                        {/* Practical FAQ */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-sm tracking-widest uppercase text-brand-orange mb-6">Praktiska frågor</h3>
                            {[
                                { q: "Får jag ta med husdjur?", a: "Ja, husdjur är ofta välkomna hos oss. Kontakta oss för detaljer." },
                                { q: "Hur tar jag mig från flygplatsen?", a: "Vi hjälper till med transfer från flygplatsen till kliniken." },
                                { q: "Vad kostar det?", a: "Kostnaden är betydligt lägre än i Sverige för motsvarande kvalitet. Ring oss för prisuppgift." },
                            ].map((item, i) => (
                                <details key={i} className="group bg-brand-cream/30 p-4 rounded-lg cursor-pointer">
                                    <summary className="font-bold text-brand-navy flex justify-between items-center list-none">
                                        {item.q}
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-brand-gray text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-xs text-brand-gray mt-12 italic">
                        Svar på fler frågor fås vid kontakt.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <ContactSection />
        </>
    );
}
