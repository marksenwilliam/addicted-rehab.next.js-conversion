import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Samirs berättelse | Addicted Rehab",
    description: "Läs Samirs resa från alkoholberoende till ett nytt liv.",
};

export default function SamirStoryPage() {
    return (
        <>
            {/* Hero */}
            <header className="pt-32 pb-12 bg-brand-cream relative">
                <div className="max-w-3xl mx-auto px-6">
                    <Link
                        href="/berattelser"
                        className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-8 inline-flex items-center gap-2 hover:underline"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Tillbaka till berättelser
                    </Link>
                    <h1 className="font-serif text-5xl md:text-6xl text-brand-navy mb-4">
                        &quot;Samir&quot; berättar
                    </h1>
                    <p className="text-brand-gray text-lg">
                        Från ensamhet till gemenskap
                    </p>
                </div>
            </header>

            {/* Coming Soon Content */}
            <article className="py-24 bg-brand-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-8 bg-brand-cream rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                    </div>
                    <h2 className="font-serif text-3xl text-brand-navy mb-4">
                        Samirs fullständiga berättelse kommer snart
                    </h2>
                    <p className="text-brand-gray text-lg mb-8 max-w-xl mx-auto">
                        Vi arbetar på att publicera Samirs inspirerande resa. Under tiden kan du
                        läsa andra berättelser eller kontakta oss för att höra mer.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/berattelser"
                            className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-navy hover:text-brand-white transition-colors"
                        >
                            Se fler berättelser
                        </Link>
                        <Link
                            href="#contact"
                            className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-white transition-colors shadow-sketch"
                        >
                            Kontakta oss
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}
