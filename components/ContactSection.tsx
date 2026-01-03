export default function ContactSection() {
    return (
        <section
            id="contact"
            className="py-24 bg-brand-navy relative overflow-hidden text-brand-cream"
        >
            {/* Texture on dark bg */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e8a838' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-brand-orange text-brand-navy mx-auto mb-6 flex items-center justify-center rounded-full border-2 border-brand-cream transform rotate-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                        Hör gärna av dig
                    </h2>
                    <p className="text-brand-cream/70 font-light leading-relaxed text-lg max-w-xl mx-auto">
                        Vi finns här för att svara på dina frågor. All kontakt är
                        konfidentiell.
                    </p>
                </div>

                <form className="space-y-6 bg-brand-navy/50 p-8 rounded-3xl border border-brand-cream/10 backdrop-blur-sm">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-orange"
                        >
                            Namn
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="DITT NAMN"
                            className="w-full px-6 py-4 bg-brand-navy border-2 border-brand-cream/30 focus:outline-none focus:border-brand-orange text-brand-cream placeholder-brand-cream/20 text-sm font-bold tracking-wide uppercase sketchy-box transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-orange"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="DIN EMAIL"
                            className="w-full px-6 py-4 bg-brand-navy border-2 border-brand-cream/30 focus:outline-none focus:border-brand-orange text-brand-cream placeholder-brand-cream/20 text-sm font-bold tracking-wide uppercase sketchy-box transition-colors"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-xs font-bold tracking-widest uppercase mb-2 text-brand-orange"
                        >
                            Meddelande
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="DITT MEDDELANDE..."
                            className="w-full px-6 py-4 bg-brand-navy border-2 border-brand-cream/30 focus:outline-none focus:border-brand-orange text-brand-cream placeholder-brand-cream/20 text-sm font-bold tracking-wide uppercase sketchy-box transition-colors"
                        ></textarea>
                    </div>

                    <button
                        type="button"
                        className="w-full bg-brand-orange text-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-widest border-2 border-transparent hover:bg-brand-cream transition-colors sketchy-btn shadow-lg mt-4"
                    >
                        Skicka Meddelande
                    </button>
                </form>

                <div className="mt-16 text-center">
                    <p className="text-[10px] font-sans font-bold text-brand-cream/50 uppercase tracking-widest mb-4">
                        ELLER RING OSS DIREKT
                    </p>
                    <a
                        href="tel:0732520358"
                        className="text-2xl md:text-3xl font-serif font-bold text-brand-white hover:text-brand-orange transition-colors border-b-2 border-brand-orange border-dashed pb-1"
                    >
                        073 - 252 03 58
                    </a>
                    <p className="text-xs text-brand-cream/50 mt-2 italic">
                        Vi svarar alla dagar.
                    </p>
                </div>
            </div>
        </section>
    );
}
