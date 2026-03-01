const steps = [
  { time: "6:00 p.m.", label: "Misa de Acción de Gracias" },
  { time: "7:30 p.m.", label: "Recepción de invitados" },
  { time: "8:00 p.m.", label: "¡Que empiece la fiesta!" },
];

export default function Timeline() {
  return (
    <section className="bg-warm-50 py-20 px-6">
      <div className="reveal">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-tertiary mb-2">
          Programa
        </p>
        <h2 className="font-display text-3xl text-ink">
          Itinerario
        </h2>
        <div className="w-10 h-px bg-accent-muted mt-4 mb-12" />
      </div>

      <div className="relative max-w-sm">
        {/* vertical line */}
        <div className="absolute left-[3px] top-2 bottom-2 w-px bg-rose-200" />

        {steps.map((s, i) => (
          <div
            key={i}
            className={`reveal reveal-d${i + 1} flex items-start gap-6 mb-10 last:mb-0`}
          >
            {/* dot */}
            <div className="relative z-10 mt-2 w-[7px] h-[7px] rounded-full bg-accent shrink-0" />

            <div>
              <p className="text-[0.65rem] tracking-[0.18em] uppercase text-accent font-medium">
                {s.time}
              </p>
              <p className="text-base text-ink mt-0.5">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
