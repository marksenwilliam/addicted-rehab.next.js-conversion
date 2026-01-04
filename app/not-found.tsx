import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="inline-block border-2 border-brand-navy px-4 py-1 mb-6 sketchy-box transform -rotate-1">
          <span className="font-bold text-xs tracking-widest text-brand-navy uppercase">
            Fel 404
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl text-brand-navy mb-6">
          Sidan hittades inte
        </h1>

        <p className="text-brand-gray text-lg mb-8 leading-relaxed">
          Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats
          eller tagits bort.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest shadow-sketch hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px] inline-flex items-center justify-center gap-3"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Tillbaka till startsidan
          </Link>

          <Link
            href="/blogg"
            className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-white transition-colors inline-flex items-center justify-center"
          >
            Läs vår blogg
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-navy/10">
          <p className="text-sm text-brand-gray">
            Behöver du hjälp? Kontakta oss på{" "}
            <a
              href="tel:0732520358"
              className="text-brand-orange hover:underline font-semibold"
            >
              073-252 03 58
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
