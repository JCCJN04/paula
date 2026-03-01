import Countdown from "./Countdown";

export default function CountdownSection() {
  return (
    <section className="bg-warm-50 py-10 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-tertiary mb-2">
          Faltan
        </p>
        <div className="w-8 h-px bg-accent-muted mx-auto mb-8" />
      </div>
      <div>
        <Countdown />
      </div>
    </section>
  );
}
