"use client";

import Script from "next/script";
import Image from "next/image";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.Tally) {
      // @ts-ignore
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <footer className="bg-warm-100 py-16 px-6 relative w-full overflow-hidden">
      <div className="reveal max-w-md mx-auto flex flex-col items-center text-center">
        <div className="mb-16 flex flex-col items-center">
          <h3 className="font-display italic text-2xl text-ink mb-2">Vestimenta</h3>
          <p className="text-sm tracking-widest uppercase text-ink-secondary mb-6">Formal</p>
          <Image 
            src="/paulaxv/vestimenta.png" 
            alt="Código de vestimenta" 
            width={160} 
            height={160} 
            className="opacity-90 mt-2"
          />
        </div>

        <div className="mb-16 w-full">
          <h3 className="font-display italic text-2xl text-ink mb-2">RSVP</h3>
          <p className="text-sm font-medium text-ink-secondary mb-6">
            Por favor de confirmar para antes del 10 de Junio de 2026
          </p>
          <iframe
            data-tally-src="https://tally.so/embed/Gx06R2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Confirmación de Asistencia"
            className="w-full border-none"
          ></iframe>
        </div>

        <div className="w-10 h-px bg-accent-muted mb-8" />
        <p className="text-[0.6rem] tracking-[0.25em] uppercase text-ink-tertiary mb-2">
          Con cariño
        </p>
        <h3 className="font-display italic text-3xl text-ink">Paula</h3>
        <p className="text-sm text-ink-tertiary mt-3">
          25 de julio de 2026
        </p>
      </div>

      {/* Tally Embed Script */}
      <Script 
        id="tally-js" 
        src="https://tally.so/widgets/embed.js" 
        strategy="lazyOnload" 
      />
    </footer>
  );
}
