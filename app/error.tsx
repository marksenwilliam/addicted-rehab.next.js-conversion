"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="inline-block border-2 border-brand-navy px-4 py-1 mb-6 sketchy-box transform rotate-1">
          <span className="font-bold text-xs tracking-widest text-brand-navy uppercase">
            Tekniskt fel
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl text-brand-navy mb-6">
          Något gick fel
        </h1>

        <p className="text-brand-gray text-lg mb-8 leading-relaxed">
          Vi ber om ursäkt, men något oväntat hände. Försök igen eller kontakta
          oss om problemet kvarstår.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest shadow-sketch hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px] inline-flex items-center justify-center gap-3"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Försök igen
          </button>

          <a
            href="/"
            className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-white transition-colors inline-flex items-center justify-center"
          >
            Tillbaka till startsidan
          </a>
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
