export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "varfor-avskildhet-ar-nyckeln",
        title: "Varför avskildhet kan vara nyckeln till verklig återhämtning",
        excerpt: "Det finns en anledning till att vi pratar om att \"komma bort\" när livet blir för mycket. Att byta miljö, lämna det som trycker ner oss, andas ut någon annanstans.",
        category: "Återhämtning",
        date: "2026-01-03",
        image: "https://images.unsplash.com/photo-1602677416338-c4c916ad5590?w=1600&q=80",
    },
    {
        slug: "individuell-behandling-vs-gruppterapi",
        title: "Individuell behandling vs. gruppterapi: Vad passar dig?",
        excerpt: "Om du har börjat läsa på om behandling för alkoholism har du förmodligen stött på gruppterapi. Det är den vanligaste formen. Men det funkar inte för alla.",
        category: "Behandling",
        date: "2025-12-28",
        image: "https://images.unsplash.com/photo-1517669375942-946a1f02d705?w=1600&q=80",
    },
    {
        slug: "12-stegsmetoden-utan-religionen",
        title: "12-stegsmetoden utan religionen: Hur det funkar",
        excerpt: "Om du har läst något om beroendebehandling har du förmodligen stött på 12-stegsprogrammet. Men det finns ett problem för många svenskar: Gud.",
        category: "Metod",
        date: "2025-12-20",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&q=80",
    },
];
