"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/paulaxv/paula1.jpeg", alt: "Paula – Foto 1" },
  { src: "/paulaxv/paula2.jpeg", alt: "Paula – Foto 2" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const touchRef = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (idx: number) => setCurrent((idx + slides.length) % slides.length),
    []
  );

  /* auto-slide */
  useEffect(() => {
    autoRef.current = setInterval(() => go(current + 1), 5000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [current, go]);

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => go(current + 1), 5000);
  };

  return (
    <section
      id="gallery"
      className="bg-warm-100 py-20 px-6"
    >
      <div className="reveal">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-tertiary mb-2">
          Galería
        </p>
        <h2 className="font-display text-3xl text-ink">
          Momentos
        </h2>
        <div className="w-10 h-px bg-accent-muted mt-4 mb-12" />
      </div>

      {/* Carousel */}
      <div
        className="reveal reveal-d1 relative max-w-sm mx-auto rounded-xl overflow-hidden
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        onTouchStart={(e) => (touchRef.current = e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          const d = touchRef.current - e.changedTouches[0].screenX;
          if (Math.abs(d) > 50) {
            go(current + (d > 0 ? 1 : -1));
            resetAuto();
          }
        }}
      >
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.src} className="min-w-full aspect-[3/4] relative bg-warm-200">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                quality={100}
                className="object-cover object-[center_top]"
                sizes="100vw"
                priority={s.src === slides[0].src}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          aria-label="Anterior"
          onClick={() => {
            go(current - 1);
            resetAuto();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
            bg-white/70 backdrop-blur flex items-center justify-center
            text-ink text-sm hover:bg-white transition cursor-pointer"
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => {
            go(current + 1);
            resetAuto();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
            bg-white/70 backdrop-blur flex items-center justify-center
            text-ink text-sm hover:bg-white transition cursor-pointer"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Foto ${i + 1}`}
            onClick={() => {
              go(i);
              resetAuto();
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === current
              ? "bg-accent scale-150"
              : "bg-warm-300 opacity-60"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
