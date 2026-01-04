import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Blog articles data
const articles: Record<string, {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    content: React.ReactNode;
}> = {
    "varfor-avskildhet-ar-nyckeln": {
        title: "Varför avskildhet kan vara nyckeln till verklig återhämtning",
        excerpt: "Det finns en anledning till att vi pratar om att \"komma bort\" när livet blir för mycket. Att byta miljö, lämna det som trycker ner oss, andas ut någon annanstans.",
        category: "Återhämtning",
        date: "2026-01-03",
        image: "https://images.unsplash.com/photo-1602677416338-c4c916ad5590?w=1600&q=80",
        content: (
            <>
                <p className="lead">
                    Det finns en anledning till att vi pratar om att &quot;komma bort&quot; när livet blir för mycket. Att byta miljö, lämna det som trycker ner oss, andas ut någon annanstans. Det är ingen slump att vi instinktivt söker oss bort när vi behöver läka.
                </p>
                <p>
                    Men för den som kämpar med alkoholism är det sällan så enkelt som att boka en resa. Problemet följer ju med. Flaskan finns på flygplatsen, på hotellet, i restaurangen. Och även om man lyckas hålla sig nykter några dagar så väntar samma liv hemma. Samma stress. Samma triggers. Samma kompisar som vill ta en öl.
                </p>
                <p>
                    Så vad händer om man faktiskt lämnar – på riktigt? Inte för en semester, utan för att ge sig själv en chans att börja om?
                </p>

                <h2>Att bryta mönster kräver mer än viljestyrka</h2>
                <p>
                    Jag tror att de flesta som har försökt sluta dricka vet hur det känns. Man vaknar en morgon med en fruktansvärd känsla i kroppen och lovar sig själv att det här var sista gången. Och man menar det. Man menar det verkligen.
                </p>
                <p>
                    Sen går det några dagar, kanske en vecka. Man börjar må lite bättre. Och så kommer helgen. En kollega frågar om man ska hänga med på after work. Eller så går man förbi systemet på väg hem och benen tar en dit nästan av sig själva.
                </p>
                <p>
                    Det är inte svaghet. Det är så beroende fungerar. Hjärnan har lärt sig att alkohol hör ihop med vissa platser, vissa människor, vissa situationer. Och så länge man befinner sig i samma miljö kommer de signalerna att fortsätta trigga samma beteende.
                </p>
                <p>
                    Det är därför avskildhet kan vara så kraftfullt. Inte för att fly från verkligheten, utan för att ge sig själv en paus från alla de automatiska mönster som håller en fast.
                </p>

                <h2>Spanien är inte en flykt – det är en omstart</h2>
                <p>
                    När man åker till ett behandlingshem i Spanien handlar det inte om att gömma sig. Det handlar om att skapa utrymme. Fysiskt, mentalt och känslomässigt.
                </p>
                <p>
                    Tänk på det: hemma vaknar du i samma säng där du legat sömnlös efter en fylla. Du går förbi samma krog där du druckit för mycket mer gånger än du kan räkna. Du träffar samma människor som antingen dricker med dig eller har gett upp hoppet om att du ska förändras.
                </p>
                <p>
                    I Spanien finns inget av det. Ingen känner dig. Ingen har förväntningar på dig baserade på vem du har varit. Du kan börja från scratch.
                </p>
                <p>
                    Och så är det klimatet. Det kanske låter ytligt, men det finns forskning som visar att solljus, värme och närheten till naturen påverkar hur vi mår psykiskt. När man går igenom något så tufft som att bryta ett beroende spelar omgivningen roll. Att vakna till sol istället för novembergrå, att kunna gå utomhus utan att frysa, att se havet – det gör något med en.
                </p>

                <h2>Ensam tid, men inte ensam</h2>
                <p>
                    En sak jag vill vara tydlig med: avskildhet betyder inte isolering. Det handlar inte om att sitta ensam i ett rum och kämpa sig igenom.
                </p>
                <p>
                    Det handlar om att få individuell uppmärksamhet. Att någon ser just dig, just dina problem, just din historia. Inte som en i mängden, utan som den enda personen som spelar roll just nu.
                </p>
                <p>
                    I gruppbehandling är det lätt att försvinna. Man kan sitta tyst i ett hörn och nicka medan andra pratar. Man kan gömma sig bakom andras berättelser istället för att gräva i sina egna. Vissa mår bra av gruppformatet – det ska inte underskattas – men för andra blir det ett sätt att undvika det verkliga arbetet.
                </p>
                <p>
                    I ett en-till-en-upplägg finns ingen plats att gömma sig. Och det kan vara skrämmande, men det är också där förändringen händer. När någon tar sig tid att förstå varför du dricker, inte bara att du dricker.
                </p>

                <h2>Att komma tillbaka som en annan människa</h2>
                <p>
                    Den vanligaste invändningen jag hör är: &quot;Men jag kan ju inte fly från mina problem för alltid. Jag måste ändå hem till samma liv.&quot;
                </p>
                <p>
                    Ja, det stämmer. Du måste hem. Men du behöver inte hem som samma människa.
                </p>
                <p>
                    Poängen med att åka bort för behandling är inte att undvika ditt vanliga liv för evigt. Det är att ge dig själv en chans att bygga upp de verktyg du behöver för att hantera det livet. När du kommer hem kommer triggersarna fortfarande att finnas där. Men du kommer att vara annorlunda.
                </p>
                <p>
                    Du kommer att ha lärt dig känna igen de där situationerna innan de drar iväg med dig. Du kommer att ha strategier för att hantera suget. Du kommer att veta vem du kan ringa när det blir tufft. Du kommer att ha upplevt att det faktiskt går att leva utan alkohol – inte bara i teorin, utan på riktigt.
                </p>
                <p>
                    Och du kommer att ha fått tid. Tid att tänka. Tid att läka. Tid att bli bekant med dig själv igen, utan alkoholen som ständigt brus i bakgrunden.
                </p>

                <h2>Det är inte själviskt att prioritera sig själv</h2>
                <p>
                    Jag vet att det kan kännas omöjligt att lämna allt. Jobbet, familjen, ansvaret. Hur ska man bara kunna åka iväg?
                </p>
                <p>
                    Men låt mig fråga dig en sak: hur fungerar det just nu? Hur närvarande är du egentligen för din familj när du dricker? Hur bra presterar du på jobbet med bakfylla? Hur mycket av ditt ansvar tar du faktiskt?
                </p>
                <p>
                    Att åka iväg för att bli frisk är inte att svika de som behöver dig. Det är att ge dem en chans att få tillbaka den person de en gång kände. Den du var innan alkoholen tog över.
                </p>
                <p>
                    Ibland är det mest osjälviska man kan göra att ta hand om sig själv.
                </p>

                <h2>En öppen dörr</h2>
                <p>
                    Om du läser det här och känner igen dig – om du har försökt sluta och misslyckats, om du är trött på att vakna med ångest, om du undrar om det finns ett annat sätt att leva – så vill jag att du ska veta att det finns.
                </p>
                <p>
                    Det kräver mod att ta steget. Det kräver att man erkänner att man inte klarar det själv. Men det finns ingen skam i det. Tvärtom. Det är styrka.
                </p>
                <p>
                    Och ibland behöver man bara komma bort en stund för att hitta tillbaka till sig själv.
                </p>
            </>
        ),
    },
    "individuell-behandling-vs-gruppterapi": {
        title: "Individuell behandling vs. gruppterapi: Vad passar dig?",
        excerpt: "Om du har börjat läsa på om behandling för alkoholism har du förmodligen stött på gruppterapi. Det är den vanligaste formen. Men det funkar inte för alla.",
        category: "Behandling",
        date: "2025-12-28",
        image: "https://images.unsplash.com/photo-1517669375942-946a1f02d705?w=1600&q=80",
        content: (
            <>
                <p className="lead">
                    Om du har börjat läsa på om behandling för alkoholism har du förmodligen stött på gruppterapi. Det är den vanligaste formen. Man sitter i en ring, delar med sig, lyssnar på andra. Det funkar för många. Men det funkar inte för alla.
                </p>
                <p>
                    Och det är okej.
                </p>
                <p>
                    Det här är ingen artikel som ska säga att gruppterapi är dåligt. Det finns människor som har räddat sina liv tack vare AA-möten och gruppbaserade behandlingshem. Men det finns också människor som har provat den vägen och känt att det inte passade dem. Som har gått därifrån och tänkt att om det här är vad återhämtning ser ut så kanske det inte är något för mig.
                </p>
                <p>
                    Om du är en av dem vill jag att du läser vidare.
                </p>

                <h2>Varför gruppterapi är så vanligt</h2>
                <p>
                    Gruppterapi har några uppenbara fördelar. Man får träffa andra som går igenom samma sak. Man känner sig mindre ensam. Man hör berättelser som påminner om ens egen och inser att man inte är unik i sitt lidande.
                </p>
                <p>
                    Det finns också en praktisk aspekt. Gruppterapi är billigare att anordna. En terapeut kan hjälpa tio personer samtidigt istället för en. Det gör att fler kan få hjälp för mindre pengar, vilket i sig är bra.
                </p>
                <p>
                    Och för många fungerar dynamiken. Man blir ansvarig inför gruppen. Man vill inte svika de andra. Man bygger relationer som kan hålla även efter behandlingen är slut.
                </p>
                <p>
                    Men – och det här är ett stort men – gruppterapi kräver att man är bekväm med att dela. Att öppna sig inför främlingar. Att vara sårbar offentligt.
                </p>
                <p>
                    Och det är långt ifrån alla som är det.
                </p>

                <h2>När gruppen blir ett hinder</h2>
                <p>
                    Jag har pratat med människor som har suttit i gruppmöten vecka efter vecka utan att säga ett ord. De har lyssnat, nickat, kanske ställt en fråga till någon annan – men de har aldrig delat sin egen historia.
                </p>
                <p>
                    Varför? Det kan vara hundra anledningar.
                </p>
                <p>
                    Kanske skäms de för mycket. Kanske är de rädda för att gråta inför andra. Kanske har de saker i sitt förflutna som känns för privata att säga högt i ett rum fullt av människor de inte känner. Kanske är de oroliga för att någon ska känna igen dem. Kanske gillar de helt enkelt inte att vara i centrum.
                </p>
                <p>
                    Inget av det är konstigt. Det är mänskligt.
                </p>
                <p>
                    Men problemet är att om man inte delar så får man inte heller ut lika mycket av behandlingen. Man sitter och tar emot andras berättelser, men man bearbetar aldrig sina egna. Det blir som att gå på en matlagningskurs och bara titta på – man kanske lär sig något, men man lär sig aldrig laga mat.
                </p>

                <h2>En-till-en: Ingen publik, inga undanflykter</h2>
                <p>
                    Individuell behandling ser annorlunda ut. Det är du och en person. Ingen publik. Inget att gömma sig bakom.
                </p>
                <p>
                    Det kan låta skrämmande. Och det är det, på ett sätt. Men det är också befriande.
                </p>
                <p>
                    I gruppterapi kan man undvika de svåra ämnena genom att fokusera på andras problem. I individuell terapi finns den möjligheten inte. Terapeuten är där för dig, och samtalet handlar om dig. Det går inte att sitta tyst i ett hörn och hoppas att ingen märker.
                </p>
                <p>
                    Det betyder att processen ofta blir intensivare. Man kommer djupare, snabbare. Man tvingas konfrontera saker som man kanske har sprungit ifrån i åratal.
                </p>
                <p>
                    Men det betyder också att behandlingen kan anpassas helt efter dig. Dina trauman. Dina mönster. Dina triggers. Din historia. Inte en generell metod som ska passa tjugo olika personer, utan en skräddarsydd plan för just ditt liv.
                </p>

                <h2>Vem passar individuell behandling för?</h2>
                <p>
                    Det finns ingen enkel checklista, men jag kan ge dig några ledtrådar.
                </p>
                <p>
                    Du kanske passar bättre för individuell behandling om du är introvert och får energi av att vara ensam snarare än i grupp. Om du har en position i samhället där du behöver vara diskret – kanske är du chef, offentlig person, eller bara lever i en liten stad där rykten sprids. Om du har upplevt trauma som du inte är redo att dela med främlingar. Om du har provat gruppterapi förut och känt att det inte fungerade. Om du lär dig bäst genom djupa samtal snarare än genom att observera andra.
                </p>
                <p>
                    Men egentligen handlar det om en enda sak: känner du motstånd mot att sitta i grupp? Om svaret är ja, så är det värt att utforska alternativ.
                </p>
                <p>
                    Motståndet är inte något du ska tvinga dig igenom. Det är information. Din hjärna säger att den behöver något annat. Lyssna på den.
                </p>

                <h2>Det handlar inte om att undvika arbetet</h2>
                <p>
                    En missuppfattning jag ibland stöter på är att människor som väljer individuell behandling gör det för att de vill ta den lätta vägen. Att de inte orkar göra jobbet som gruppterapi kräver.
                </p>
                <p>
                    Det kunde inte vara längre från sanningen.
                </p>
                <p>
                    Individuell behandling är inte lättare. Den är annorlunda. Och på många sätt är den tuffare. Det finns ingen grupp att gömma sig i. Ingen paus medan någon annan pratar. Varje minut handlar om dig och dina problem.
                </p>
                <p>
                    Det kräver mod att sitta i det. Att titta på sina egna mönster utan att kunna peka på någon annans berättelse och säga &quot;ja, jag har det precis så.&quot; Att erkänna saker högt som man knappt har vågat tänka på egen hand.
                </p>

                <h2>Att hitta rätt väg för dig</h2>
                <p>
                    Det finns inget objektivt rätt svar här. Gruppterapi har räddat liv. Individuell terapi har räddat liv. Det handlar om att hitta vad som fungerar för just dig.
                </p>
                <p>
                    Om du har provat ett sätt och det inte funkade, ge inte upp. Prova ett annat. Återhämtning ser olika ut för olika människor, och det finns ingen standardmodell som passar alla.
                </p>
                <p>
                    Det jag vill att du tar med dig från den här artikeln är att det är okej att välja bort gruppen. Du är inte svagare för det. Du är inte mer trasig. Du är bara en människa som behöver en annan väg.
                </p>
                <p>
                    Och den vägen finns.
                </p>

                <h2>Nästa steg</h2>
                <p>
                    Om du läser det här och känner att gruppbehandling inte är din grej – eller om du har provat det och känt dig mer ensam i gruppen än du någonsin känt dig på egen hand – så finns det alternativ.
                </p>
                <p>
                    Du behöver inte tvinga dig själv in i en form som inte passar. Du behöver inte acceptera att &quot;så här funkar behandling&quot; när det inte funkar för dig.
                </p>
                <p>
                    Ta reda på mer om individuell behandling. Ställ frågor. Ring och prata med någon. Det kostar ingenting att höra sig för, och det kan vara skillnaden mellan att ge upp och att äntligen hitta något som fungerar.
                </p>
                <p>
                    Du förtjänar en chans som faktiskt passar dig.
                </p>
            </>
        ),
    },
    "12-stegsmetoden-utan-religionen": {
        title: "12-stegsmetoden utan religionen: Hur det funkar",
        excerpt: "Om du har läst något om beroendebehandling har du förmodligen stött på 12-stegsprogrammet. Men det finns ett problem för många svenskar: Gud.",
        category: "Metod",
        date: "2025-12-20",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&q=80",
        content: (
            <>
                <p className="lead">
                    Om du har läst något om beroendebehandling har du förmodligen stött på 12-stegsprogrammet. Det har funnits sedan 1930-talet och har hjälpt miljontals människor världen över. Det är grunden för AA, NA och de flesta behandlingshem.
                </p>
                <p>
                    Men det finns ett problem för många svenskar: Gud.
                </p>
                <p>
                    Steg två pratar om &quot;en kraft större än oss själva.&quot; Steg tre handlar om att lägga sin vilja i händerna på &quot;Gud, sådan vi uppfattade Honom.&quot; Steg elva nämner bön och meditation.
                </p>
                <p>
                    För den som är troende kanske det här känns naturligt. Men för den som inte är det – och det är rätt många av oss i Sverige – kan det bli ett oöverstigligt hinder. Man hör &quot;Gud&quot; och stänger av. Man tänker att det här programmet inte är för mig. Man letar efter alternativ, och när man inte hittar något som fungerar lika bra så ger man kanske upp.
                </p>
                <p>
                    Det behöver inte vara så.
                </p>

                <h2>Vad 12-stegsprogrammet egentligen handlar om</h2>
                <p>
                    Låt oss lägga religionen åt sidan en stund och titta på vad programmet faktiskt försöker åstadkomma.
                </p>
                <p>
                    Steg ett handlar om att erkänna att man har ett problem. Att alkoholen har tagit kontroll och att man inte kan hantera det själv. Det är ärlighet. Inte religion.
                </p>
                <p>
                    Steg fyra och fem handlar om att göra en grundlig inventering av sitt liv – sina fel, sina skador, sina mönster – och sen dela det med någon annan. Det är självinsikt och sårbarhet. Inte religion.
                </p>
                <p>
                    Steg åtta och nio handlar om att göra rätt för sig. Att identifiera människor man har skadat och, där det är möjligt, be om ursäkt och gottgöra. Det är ansvar och integritet. Inte religion.
                </p>
                <p>
                    Ser du mönstret?
                </p>
                <p>
                    Kärnan i 12-stegsprogrammet är inte att tro på Gud. Kärnan är att sluta ljuga för sig själv, ta ansvar för sitt beteende, och bygga relationer som håller. Det är principer som fungerar oavsett om man tror på en högre makt eller inte.
                </p>

                <h2>&quot;En kraft större än oss själva&quot;</h2>
                <p>
                    Det här är frasen som brukar få skeptiker att rynka på pannan. Men den behöver inte betyda Gud.
                </p>
                <p>
                    Tänk på det så här: beroende är starkare än viljan. Det har du förmodligen märkt själv om du har försökt sluta dricka på egen hand. Du bestämmer dig, du menar det, och sen tar något annat över. Något som är starkare än ditt beslut.
                </p>
                <p>
                    Att erkänna att det finns krafter som är större än ens egen vilja är inte mystik. Det är realism. Beroende är en sådan kraft. Döden är en sådan kraft. Naturen, universum, tiden – alla är de större än dig och mig.
                </p>
                <p>
                    Men här är poängen: om beroende är en kraft större än dig, så kan återhämtning också vara det. Gemenskapen med andra människor kan vara det. De verktyg och insikter du får genom behandling kan vara det. Den samlade erfarenheten från alla som har gått den här vägen före dig kan vara det.
                </p>
                <p>
                    Du behöver inte tro på en gubbe i himlen för att acceptera att du inte kan göra allt själv. Du behöver bara vara ärlig om dina begränsningar – och öppen för att ta emot hjälp.
                </p>

                <h2>Andlighet utan religion</h2>
                <p>
                    I 12-stegskretsar pratar man ofta om andlighet. Och ja, det låter religiöst. Men det behöver inte vara det.
                </p>
                <p>
                    Andlighet kan betyda att man tar sig tid att reflektera över sitt liv. Att man sitter i tystnad och lyssnar inåt istället för att dränka sig i buller. Att man försöker leva efter värderingar som känns meningsfulla – ärlighet, medkänsla, ansvar – istället för att bara flyta med.
                </p>
                <p>
                    För den som gillar meditation kan det vara andlighet. För den som gillar att vara i naturen kan det vara andlighet. För den som får energi av att hjälpa andra kan det vara andlighet.
                </p>
                <p>
                    Det handlar inte om att gå i kyrkan eller be kvällsböner. Det handlar om att hitta något som är större än ens eget ego och dagliga bekymmer. Något som ger perspektiv. Något som påminner en om att livet inte bara handlar om att överleva till nästa dag.
                </p>

                <h2>Hur vi jobbar med 12-stegsprinciperna</h2>
                <p>
                    Jag ska vara ärlig: vi baserar mycket av vår behandling på 12-stegsmodellen. Den fungerar. Den har fungerat i snart hundra år, och den fortsätter att fungera för att den bygger på sunda principer.
                </p>
                <p>
                    Men vi tvingar inte på någon en gudstro. Vi tvingar inte ens på någon ordet &quot;Gud.&quot;
                </p>
                <p>
                    Istället hjälper vi människor att hitta sin egen version av programmet. En som känns äkta för just dem. Om någon är troende kan vi jobba med det. Om någon är ateist kan vi jobba med det. Om någon inte vet vad de tror, eller inte bryr sig, kan vi jobba med det också.
                </p>
                <p>
                    Det viktiga är inte vilka ord man använder. Det viktiga är att man gör arbetet. Att man är ärlig med sig själv. Att man tar ansvar. Att man bygger ett liv som man faktiskt vill leva, utan att behöva fly in i flaskan.
                </p>

                <h2>Det handlar om principer, inte dogmer</h2>
                <p>
                    Jag tror att 12-stegsprogrammet har överlevt i snart ett sekel för att det bygger på universella sanningar om människan. Inte religiösa sanningar – mänskliga.
                </p>
                <p>
                    Att vi mår bra av att vara ärliga. Att vi behöver relationer med andra. Att vi måste ta ansvar för våra handlingar. Att det finns saker som är viktigare än vårt eget välbefinnande i stunden.
                </p>
                <p>
                    De principerna fungerar oavsett om man tror på Gud, Allah, Buddha, naturen, kosmos eller ingenting alls. De fungerar för att de är sanna om hur människor fungerar.
                </p>
                <p>
                    Så om du har tvekat inför 12-stegsprogrammet för att det känns för religiöst, vill jag uppmuntra dig att titta en gång till. Inte på orden, utan på det som ligger bakom orden. Inte på formen, utan på substansen.
                </p>
                <p>
                    Det som har hjälpt så många människor att sluta dricka är inte böner eller gudstro. Det är ärlighet, ansvar och gemenskap. Och de sakerna är tillgängliga för alla – oavsett vad man tror eller inte tror.
                </p>

                <h2>En sista tanke</h2>
                <p>
                    Om du kämpar med alkohol och har avfärdat 12-stegsbaserad behandling för att den känns för religiös, vill jag att du ger den en chans till. Inte för att jag tror att du borde tro på Gud – det har jag ingen åsikt om – utan för att jag vet att principerna fungerar.
                </p>
                <p>
                    Det finns sätt att jobba med det här som inte kräver att du slutar vara skeptisk. Som inte kräver att du ber kvällsböner eller går med i en kyrka. Som låter dig behålla din integritet och din världsbild, samtidigt som du får verktyg som faktiskt fungerar.
                </p>
                <p>
                    Det enda det kräver är att du är öppen. Inte för Gud. Bara för möjligheten att det finns något som kan hjälpa.
                </p>
                <p>
                    Och det finns det. Det lovar jag.
                </p>
            </>
        ),
    },
};

// Generate static params for all articles
export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({
        slug,
    }));
}

// Generate metadata for each article
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = articles[slug];

    if (!article) {
        return {
            title: "Artikel hittades inte",
        };
    }

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            publishedTime: article.date,
            authors: ["Addicted Rehab"],
            images: [
                {
                    url: article.image,
                    width: 1600,
                    height: 900,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

// Generate Article JSON-LD schema
function generateArticleSchema(slug: string, article: typeof articles[string]) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        image: article.image,
        datePublished: article.date,
        dateModified: article.date,
        author: {
            "@type": "Organization",
            name: "Addicted Rehab",
            url: "https://addicted-rehab.se",
        },
        publisher: {
            "@type": "Organization",
            name: "Addicted Rehab",
            url: "https://addicted-rehab.se",
            logo: {
                "@type": "ImageObject",
                url: "https://addicted-rehab.se/images/logo-header-footer.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://addicted-rehab.se/blogg/${slug}`,
        },
        articleSection: article.category,
        inLanguage: "sv-SE",
    };
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const article = articles[slug];

    if (!article) {
        notFound();
    }

    // Get other articles for "Read more" section
    const otherArticles = Object.entries(articles)
        .filter(([key]) => key !== slug)
        .slice(0, 2)
        .map(([key, value]) => ({ slug: key, ...value }));

    // Generate article schema
    const articleSchema = generateArticleSchema(slug, article);

    return (
        <>
            {/* Article JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {/* Hero Section */}
            <header className="pt-32 pb-16 bg-brand-cream relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <Link
                            href="/blogg"
                            className="text-xs font-bold text-brand-orange uppercase tracking-widest hover:underline"
                        >
                            ← Tillbaka till bloggen
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5">
                            {article.category}
                        </span>
                        <span className="text-xs text-brand-gray">
                            {new Date(article.date).toLocaleDateString("sv-SE", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </span>
                    </div>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-navy mb-8 leading-tight">
                        {article.title}
                    </h1>
                </div>
            </header>

            {/* Featured Image */}
            <section className="relative">
                <div className="max-w-5xl mx-auto px-6 -mt-4">
                    <div className="relative aspect-[16/9] border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 bg-brand-white">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="prose prose-lg prose-navy max-w-none">
                        {article.content}
                    </div>
                </div>
            </article>

            {/* Author / CTA Section */}
            <section className="py-16 bg-brand-cream">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="border-2 border-brand-navy sketchy-box p-8 bg-brand-white text-center">
                        <h3 className="font-serif text-2xl text-brand-navy mb-4">
                            Behöver du prata med någon?
                        </h3>
                        <p className="text-brand-gray mb-6 font-light">
                            Vi finns här för dig. Ring oss för ett förtroligt samtal – det kostar ingenting.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:0732520358"
                                className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-orange px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors shadow-sketch inline-block"
                            >
                                Ring 073-252 03 58
                            </a>
                            <Link
                                href="#contact"
                                className="sketchy-btn bg-brand-white text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors inline-block"
                            >
                                Skicka Meddelande
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-20 bg-brand-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="font-serif text-3xl text-brand-navy mb-12 text-center">
                        Läs mer
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {otherArticles.map((post) => (
                            <article key={post.slug} className="group">
                                <Link href={`/blogg/${post.slug}`} className="block">
                                    <div className="relative aspect-[4/3] mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5">
                                                {post.category}
                                            </span>
                                        </div>
                                        <h3 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                                            {post.title}
                                        </h3>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
