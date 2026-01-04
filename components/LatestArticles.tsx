"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogData";

export default function LatestArticles() {
    // Sort by date (newest first) and take the first 3
    const latestPosts = [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <section className="py-16 md:py-24 bg-brand-light-gray/30 border-t border-brand-navy/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-3 block">
                            Blogg & Artiklar
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-navy">
                            Senaste från <span className="italic">bloggen</span>
                        </h2>
                    </div>
                    <Link
                        href="/blogg"
                        className="text-brand-navy font-bold text-sm tracking-widest uppercase hover:text-brand-orange transition-colors flex items-center gap-2 group"
                    >
                        Visa alla artiklar
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link key={post.slug} href={`/blogg/${post.slug}`} className="group block h-full">
                            <article className="flex flex-col h-full">
                                <div className="relative aspect-[4/3] mb-5 overflow-hidden border-2 border-brand-navy/10 rounded-sm">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-2 py-1 rounded">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-brand-gray/60">
                                            {new Date(post.date).toLocaleDateString("sv-SE", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-xl text-brand-navy leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-brand-gray/80 line-clamp-2 leading-relaxed mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <span className="font-bold text-xs tracking-widest uppercase text-brand-navy border-b border-brand-navy/20 self-start pb-0.5 group-hover:border-brand-orange group-hover:text-brand-orange transition-all">
                                        Läs artikel
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
