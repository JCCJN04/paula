"use client";

export default function MesaRegalos() {
  return (
    <section id="gifts" className="bg-warm-50 py-20 px-6">
      <div className="reveal">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-tertiary mb-2">
          Mesa de Regalos
        </p>
        <h2 className="font-display text-3xl text-ink">
          Obsequios
        </h2>
        <div className="w-10 h-px bg-accent-muted mt-4 mb-10" />
      </div>

      <div className="reveal reveal-d1">
        <p className="text-sm text-ink-secondary mb-10 max-w-lg">
          El mejor regalo es tu presencia. Pero si deseas tener un detalle conmigo,
          puedes encontrar algunas sugerencias en mi mesa de regalos de Liverpool.
        </p>

        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto sm:max-w-xs md:max-w-sm">
          <a
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51971360"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/60 backdrop-blur-sm border border-warm-200 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between items-center overflow-hidden touch-manipulation active:scale-[0.98] hover:scale-[1.02] min-h-[300px]"
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {/* Contenedor del logo */}
            <div className="flex-1 flex items-center justify-center w-full py-6 relative z-10">
              <div className="transform transition-transform duration-500 group-hover:scale-105 group-active:scale-95">
                <img
                  src="/paulaxv/liverpool-logo.png"
                  alt="Liverpool"
                  className="max-w-full h-auto max-h-24 object-contain filter drop-shadow-sm"
                />
              </div>
            </div>

            {/* Información del evento */}
            <div className="w-full text-center pt-8 border-t border-warm-200 group-hover:border-accent/30 transition-colors duration-500 relative z-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-tertiary mb-3 font-body">
                Número de evento
              </p>
              <p className="font-body text-3xl tracking-wider text-ink transition-colors duration-300">
                51971360
              </p>
              <div className="mt-5 inline-flex items-center gap-2 px-6 py-2 rounded-full text-[0.65rem] font-medium tracking-[0.12em] uppercase border border-accent text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                Ver lista
              </div>
            </div>

            {/* Indicador de clic sutil */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-accent/20 rounded-full group-hover:scale-150 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
