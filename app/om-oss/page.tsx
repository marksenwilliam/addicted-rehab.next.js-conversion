import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Om Oss | Addicted Rehab",
    description: "Möt teamet på Addicted Rehab - diplomerade A-terapeuter med egen erfarenhet av beroendesjukdom.",
};

export default function OmOssPage() {
    return (
        <>
            {/* Header Section */}
            <header className="pt-32 pb-20 bg-brand-cream relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h1 className="font-serif text-5xl md:text-7xl text-brand-navy mb-8 leading-tight">
                        Möt teamet på <br />
                        <span className="marker-highlight px-2 transform -rotate-1 inline-block">Addicted Rehab</span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-brand-gray mb-12 leading-relaxed">
                        På Addicted Rehab möter du diplomerade A-terapeuter med treårig utbildning från Svenska Jellinek
                        Institutet. Vi förenar gedigen akademisk kompetens med den unika förståelse som bara kan komma från
                        att själva ha gjort resan från beroende till tillfrisknande.
                    </p>
                    <div className="w-16 h-1 bg-brand-orange/50 mx-auto mb-12 rounded-full"></div>
                    <p className="font-sans text-lg md:text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed">
                        Vi arbetar med en helhetssyn på människan där vi behandlar de fysiska, sociala och psykiska
                        aspekterna av beroendesjukdomen. Genom att kombinera vetenskapligt grundade metoder med
                        äkta empati skräddarsyr vi en anonym och trygg plan för din återhämtning.
                    </p>
                </div>
            </header>

            {/* Team Section - Arne */}
            <section className="py-24 bg-brand-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Left */}
                    <div className="relative group">
                        <div className="absolute inset-0 border-2 border-brand-orange sketchy-box transform -rotate-2 scale-105 opacity-20"></div>
                        <div className="relative sketchy-box overflow-hidden border-2 border-brand-navy shadow-sketch transform rotate-1 transition-transform group-hover:rotate-0">
                            <Image
                                src="/images/portrait_arne.jpg"
                                alt="Arne Stålberg"
                                width={600}
                                height={600}
                                className="w-full h-[600px] object-cover transition-all duration-700"
                            />
                        </div>
                    </div>
                    {/* Text Right */}
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-2">Arne Stålberg</h2>
                        <p className="text-brand-orange tracking-widest text-sm font-bold uppercase mb-8">
                            Beroendeterapeut och Grundare
                        </p>
                        <div className="space-y-6 text-brand-gray leading-relaxed font-sans text-lg">
                            <p>
                                Arne Stålberg grundade Addicted Rehab med visionen att erbjuda den hjälp han
                                själv en gång behövde – en professionell vård som vilar på en djup personlig
                                förståelse för beroendets mörker. Som diplomerad A-terapeut kombinerar han
                                sin treårig utbildning med den ovärderliga insikten av att själv ha gjort resan
                                från ohanterlighet till ett nytt, fritt liv.
                            </p>
                            <div className="relative pl-8 italic text-brand-navy font-serif text-xl">
                                <span className="absolute top-0 left-0 text-6xl text-brand-orange/20 -translate-y-4">&quot;</span>
                                <p className="relative z-10">
                                    Arne möter varje individ med genuin empati och utan dömande, driven av en stark
                                    övertygelse om att ingen är för trasig för att få uppleva en varaktig förändring.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section - Jan */}
            <section className="py-24 bg-brand-cream border-y-2 border-brand-navy/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Left */}
                    <div className="order-2 md:order-1">
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-2">Jan Hellberg</h2>
                        <p className="text-brand-orange tracking-widest text-sm font-bold uppercase mb-8">
                            Beroendeterapeut och Certifierad Sorgbearbetare
                        </p>
                        <div className="space-y-6 text-brand-gray leading-relaxed font-sans text-lg">
                            <p>
                                Jan Hellberg är en djupt erfaren vägvisare inom beroendevården som förenar
                                gedigen teoretisk kunskap med en naturlig auktoritet grundad i decennier av
                                praktiskt arbete. Som tidigare lärare för beroendeterapeuter är han känd för sin
                                unika förmåga att se människan bakom beroendet.
                            </p>
                            <div className="relative pl-8 italic text-brand-navy font-serif text-xl">
                                <span className="absolute top-0 left-0 text-6xl text-brand-orange/20 -translate-y-4">&quot;</span>
                                <p className="relative z-10">
                                    Genom sitt lugn och sin djupa självinsikt hjälper Jan klienter att navigera i komplexa
                                    tillstånd som missbruk och medberoende, alltid med fokus på att skapa trygga och
                                    medvetna vägar till tillfrisknande.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image Right */}
                    <div className="relative order-1 md:order-2 group">
                        <div className="absolute inset-0 border-2 border-brand-orange sketchy-box transform rotate-2 scale-105 opacity-20"></div>
                        <div className="relative sketchy-box overflow-hidden border-2 border-brand-navy shadow-sketch transform -rotate-1 transition-transform group-hover:rotate-0">
                            <Image
                                src="/images/portrait_jan.jpg"
                                alt="Jan Hellberg"
                                width={600}
                                height={600}
                                className="w-full h-[600px] object-cover transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Arnes Story Section */}
            <section className="py-24 bg-brand-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                            En resa till frihet
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl text-brand-navy">Arnes Story</h2>
                    </div>

                    <div className="space-y-16 text-brand-gray font-sans text-lg leading-relaxed">
                        {/* Part 1 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-brand-orange font-bold text-xl">
                                    1
                                </div>
                                <h3 className="font-serif text-3xl text-brand-orange">Söka hjälp</h3>
                            </div>

                            <p className="font-bold text-brand-navy text-xl mb-6">Mitt liv var ohanterligt.</p>
                            <p className="mb-6">
                                Jag försökte sluta dricka på egen hand, om och om igen, men ingenting
                                fungerade. Jag letade ständigt efter olika lösningar för att komma bort från
                                alkoholen. Ett av mina försök var att köpa en stor fiskebåt som jag tänkte
                                renovera och använda på min lediga tid.
                            </p>
                            <p className="mb-6">
                                Det jag inte förstod då – men ser väldigt tydligt i efterhand – var att jag i praktiken
                                köpte ett nytt ställe där jag kunde fortsätta dricka alkohol, ostört. Det känns korkat
                                att säga det nu, men så var det.
                            </p>
                            <p className="mb-8">
                                Till slut kom jag till en punkt i livet där jag var fullständigt utmattad av att dricka.
                                Konsekvenserna började hopa sig, både fysiskt och psykiskt, och jag insåg att
                                om jag fortsatte på samma sätt så skulle det här ta livet av mig. Framför allt slog
                                en tanke mig med full kraft:
                            </p>

                            <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-8 my-8 rounded-r-xl">
                                <p className="italic font-bold text-brand-navy text-xl md:text-2xl font-serif">
                                    &quot;Om jag inte gjorde något nu skulle jag inte få se mina barn växa upp.&quot;
                                </p>
                            </div>

                            <p>
                                Det var där jag inte längre kunde blunda. Jag förstod att jag inte klarade detta
                                själv och att jag behövde hjälp.
                            </p>
                        </div>

                        {/* Part 2 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-brand-orange font-bold text-xl">
                                    2
                                </div>
                                <h3 className="font-serif text-3xl text-brand-orange">Återhämtning</h3>
                            </div>
                            <p className="mb-6">
                                Jag började läsa mycket om vad alkoholberoende faktiskt är. Att förstå beroendet
                                som en sjukdom, och inte som ett personligt misslyckande, var en viktig
                                vändpunkt för mig. Kunskapen tog bort mycket av skammen och gav mig ett
                                sammanhang för det jag hade levt i under så lång tid.
                            </p>
                            <p className="mb-6">
                                Parallellt började jag gå på AA-möten, till en början två gånger om dagen under
                                de första tre månaderna. Mötena blev en stabil grund i min vardag. Där mötte jag
                                människor som förstod exakt vad jag gick igenom, utan förklaringar och utan
                                dömande. Gemenskapen, igenkänningen och strukturen gjorde att jag inte längre var ensam i mitt beroende.
                            </p>
                            <p className="mb-6">
                                Efter en tid sökte jag in till en treårig utbildning till A-terapeut och blev antagen. Den utbildningen gav mig oerhört mycket insikt – både professionellt och personligt. Ju mer jag förstod om beroendets mekanismer, desto mindre makt fick alkoholen över mig. Det kändes inte längre som en ständig kamp; det blev faktiskt lätt att avstå från alkohol.
                            </p>
                            <p className="mb-6">
                                AA-mötena fortsatte att vara en viktig del av min återhämtning. De hjälpte mig att hålla mig ärlig, närvarande och ödmjuk inför att beroendet alltid behöver tas på allvar, även när livet fungerar bra.
                            </p>
                            <p>
                                För mig var det alltså kombinationen av kunskap, gemenskap och långsiktigt arbete med mig själv som fungerade. Inte en snabb lösning – utan ett nytt sätt att leva.
                            </p>
                        </div>

                        {/* Quote Section */}
                        <div className="bg-brand-navy text-brand-cream p-12 rounded-2xl text-center my-16">
                            <div className="w-16 h-16 mx-auto mb-8 text-brand-orange">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full rotate-180">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="font-serif text-3xl md:text-4xl italic leading-tight">
                                JAG VET HUR DET KÄNNS,<br /> FÖR JAG HAR VARIT DÄR SJÄLV
                            </p>
                        </div>

                        {/* Part 3 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-brand-orange font-bold text-xl">
                                    3
                                </div>
                                <h3 className="font-serif text-3xl text-brand-orange">Utbildning</h3>
                            </div>
                            <p className="mb-6">
                                Att gå från att vara den som behövde hjälp till att själv hjälpa andra var både ödmjukande och meningsfullt.
                            </p>
                            <p className="mb-6">
                                I början kände jag en stor respekt – nästan en försiktighet – inför rollen. Jag visste hur sårbar man är när man söker hjälp, eftersom jag själv hade varit där. Det gjorde att jag tog uppgiften på största allvar. Jag bar med mig en ständig medvetenhet om hur mycket mod det krävs för att erkänna sitt beroende och be om stöd.
                            </p>
                            <p className="mb-6">
                                Samtidigt upplevde jag att mina egna erfarenheter blev en styrka. Jag behövde inte gissa hur det kunde kännas för någon som satt mittemot mig; jag kände igen rädslan, skammen och hopplösheten. Det skapade en genuin närvaro och en tillit som inte går att läsa sig till.
                            </p>
                            <p className="mb-6">
                                Det var också läkande på ett personligt plan. Att kunna använda min egen resa till något konstruktivt gav mening åt det jag hade gått igenom. Det som tidigare varit ett misslyckande i mitt liv blev i stället en resurs.
                            </p>
                            <p className="mb-6">
                                Samtidigt lärde jag mig snabbt vikten av ödmjukhet. Att hjälpa andra handlar inte om att ha svaren, utan om att kunna lyssna, möta människor där de är och påminna sig om att återhämtning är en pågående process – även för mig.
                            </p>
                            <p>
                                Att få vara en del av någon annans tillfrisknande är inget man vänjer sig vid. Det är ett förtroende, och ett ansvar, som jag bär med stor respekt.
                            </p>
                        </div>

                        {/* Part 4 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-brand-orange font-bold text-xl">
                                    4
                                </div>
                                <h3 className="font-serif text-3xl text-brand-orange">Varför jobba som beroendeterapeut</h3>
                            </div>
                            <p className="mb-6">
                                Jag valde att utbilda mig till beroendeterapeut för att jag vet vilket helvete det kan vara att leva i ett beroende. Jag vet hur ensam, hopplös och fast man kan känna sig – och hur svårt det är att ta steget att be om hjälp. Efter min egen resa kände jag ett starkt ansvar att använda mina erfarenheter och min kunskap till att hjälpa andra att hitta en väg ut, och visa att förändring faktiskt är möjlig.
                            </p>
                            
                            <h4 className="font-bold text-brand-navy text-xl mb-4">Egen erfarenhet i terapeutrollen</h4>
                            <p className="mb-6">
                                Min egen erfarenhet av beroende gör att jag kan möta klienter med äkta förståelse och empati. Jag vet hur det känns att vara fast, rädd och skamsen, och det gör att jag kan lyssna utan att döma. Samtidigt ger det mig insikt i vilka strategier och stöd som faktiskt kan fungera, vilket gör mitt arbete både mer konkret och meningsfullt.
                            </p>
                            
                            <h4 className="font-bold text-brand-navy text-xl mb-4">Varför jag hjälper andra idag</h4>
                            <p className="mb-6">
                                Att gå från att behöva hjälp till att själv vara den som stöttar är djupt meningsfullt. Min styrka som terapeut ligger inte i att jag har alla svar, utan i att jag känner igen rädslan och hopplösheten i dina ögon. Jag behöver inte gissa hur du mår – jag bär med mig samma erfarenhet.
                            </p>
                            <p className="mb-6">
                                Mitt löfte till dig: Jag möter dig med äkta empati och utan dömande. Jag vet att återhämtning aldrig är en rak väg, men jag vet också att förändring är möjlig, oavsett hur djupt du har fallit.
                            </p>
                            
                            <h4 className="font-bold text-brand-navy text-xl mb-4">Vad jag önskar någon hade sagt till mig</h4>
                            <p className="mb-6">
                                Jag önskar att någon hade sagt till mig att jag inte var trasig eller svag – utan sjuk, och att det fanns hjälp som faktiskt fungerade. Att jag inte behövde klara det själv, och att det inte var för sent. Framför allt önskar jag att någon hade sagt att ett liv utan alkohol inte bara är möjligt, utan kan bli bättre än jag någonsin trodde.
                            </p>
                            
                            <h4 className="font-bold text-brand-navy text-xl mb-4">Återhämtning alltid är individuell och aldrig en rak väg</h4>
                            <p>
                                Jag har lärt mig att återhämtning alltid är individuell och aldrig en rak väg. Varje klient är unik, med sin egen historia, rädslor och utmaningar, och det är något jag bär med mig i varje möte. Min egen resa har gett mig ödmjukhet och tålamod – jag vet hur svårt det kan kännas att ta de första stegen, och hur lätt det är att tappa hoppet. Samtidigt har jag också sett att förändring är möjlig. Den insikten försöker jag förmedla, steg för steg, till alla jag möter, så att de inte känner sig ensamma i processen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="py-16 bg-brand-cream border-t border-brand-navy/10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
                    <span className="text-brand-navy font-bold uppercase tracking-widest text-lg">
                        För snabb kontakt, ring alla dagar
                    </span>
                    <svg className="w-6 h-6 text-brand-orange hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <a
                        href="tel:0732520358"
                        className="sketchy-btn bg-brand-navy text-brand-white px-8 py-4 font-bold tracking-widest hover:bg-brand-orange hover:text-brand-navy transition-colors shadow-lg"
                    >
                        073 - 252 03 58
                    </a>
                </div>
            </section>
        </>
    );
}
