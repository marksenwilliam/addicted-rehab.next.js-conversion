import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogg | Addicted Rehab",
    description: "Läs våra artiklar om alkoholism, beroende, återhämtning och behandling. Kunskap och insikter från våra experter.",
};

// Blog posts data - matches the articles in [slug]/page.tsx
const blogPosts = [
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


export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-brand-section-bg relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                        Kunskap & Insikter
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-brand-header-text mb-8 leading-tight">
                        Vår <span className="marker-highlight px-2">Blogg</span>
                    </h1>
                    <p className="font-sans text-lg text-brand-gray font-light leading-relaxed max-w-2xl mx-auto">
                        Artiklar och insikter om alkoholism, beroende och vägen till ett nyktert liv.
                        Skrivet av våra experter med decenniers erfarenhet.
                    </p>
                </div>
            </header>

            {/* Blog Posts Grid */}
            <section className="py-24 bg-brand-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="group">
                                <Link href={`/blogg/${post.slug}`} className="block">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all hover-card">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 hover-brighten"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-brand-gray">
                                                {new Date(post.date).toLocaleDateString("sv-SE", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <h2 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-sm text-brand-gray font-light leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {/* Coming Soon Note */}
                    <div className="mt-20 text-center">
                        <div className="inline-block border-2 border-brand-navy px-6 py-3 sketchy-box bg-brand-section-bg hover-pulse">
                            <p className="text-sm text-brand-gray">
                                Fler artiklar kommer snart. <span className="text-brand-orange font-bold">Håll utkik!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-brand-navy text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-white mb-6">
                        Har du frågor om behandling?
                    </h2>
                    <p className="text-brand-cream/70 mb-8 font-light">
                        Vi finns här för att hjälpa dig. Kontakta oss för ett förtroligt samtal.
                    </p>
                    <Link
                        href="#contact"
                        className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-orange px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors shadow-sketch inline-block"
                    >
                        Kontakta Oss
                    </Link>
                </div>
            </section>
        </>
    );
}
