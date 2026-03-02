import Image from "next/image";

/**
 * Hero with optional background image.
 * — Replace public/hero.svg with a real photo at public/hero.jpg
 *   then change HERO_SRC to "/hero.jpg" and set SHOW_IMAGE = true.
 */
const SHOW_IMAGE = false;
const HERO_SRC = "/paulaxv/paula_main.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden bg-warm-50"
    >
      {/* ── Background image (opt-in) ── */}
      {SHOW_IMAGE && (
        <div className="absolute inset-0">
          <Image
            src={HERO_SRC}
            alt="Paula – XV Años"
            fill
            priority
            quality={100}
            className="object-cover object-top"
            sizes="100vw"
          />
          {/* Mobile Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-warm-50 via-warm-50/80 to-warm-50/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-50/80 via-transparent to-transparent" />
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 px-6 pt-20 pb-10">
        <div className="max-w-[600px]">
          <p className="animate-fade-in-up-d1 text-[0.7rem] tracking-[0.3em] uppercase text-ink-tertiary mb-4">
            Te invito a celebrar
          </p>

          <h1 className="animate-fade-in-up-d2 font-display text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.90] text-ink">
            Mis XV<br />Años
          </h1>

          <h2 className="animate-fade-in-up-d3 font-display italic text-[clamp(2.6rem,7vw,5rem)] text-accent mt-2">
            Paula
          </h2>

          <div className="animate-fade-in-up-d4 w-12 h-px bg-accent-muted mt-6 mb-3" />

          <p className="animate-fade-in-up-d4 text-[0.7rem] tracking-[0.18em] uppercase text-ink-secondary">
            Sábado 25 de julio de 2026
          </p>
        </div>
      </div>

    </section>
  );
}
