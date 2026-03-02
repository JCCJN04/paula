import Image from "next/image";

/* ========= Types ========= */
interface EventCardProps {
  type: string;
  name: string;
  time: string;
  location: string;
  address?: string;
  mapUrl: string;
  mapEmbed: string;
  imageSrc?: string;
  imageAlt?: string;
}

function EventCard({
  type,
  name,
  time,
  location,
  address,
  mapUrl,
  mapEmbed,
  imageSrc,
  imageAlt,
}: EventCardProps) {
  return (
    <div className="py-8">
      {/* Top row: image + details */}
      <div className="grid grid-cols-1 gap-6 items-start mb-6">
        {/* Image */}
        {imageSrc && (
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-warm-200 shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt || name}
              fill
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Details */}
        <div>
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-accent mb-2">
            {type}
          </p>
          <h3 className="font-display text-xl text-ink mb-3">
            {name}
          </h3>

          <div className="space-y-1 text-sm text-ink-secondary mb-5">
            <p>{time}</p>
            <p>{location}</p>
            {address && <p className="text-ink-tertiary text-xs">{address}</p>}
          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[0.65rem]
              font-medium tracking-[0.12em] uppercase border border-accent text-accent
              hover:bg-accent hover:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Abrir en Google Maps
          </a>
        </div>
      </div>

      {/* Embedded map */}
      <div className="w-full rounded-lg overflow-hidden border border-warm-200" style={{ height: 220 }}>
        <iframe
          title={name}
          src={mapEmbed}
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

/* ========= Main component ========= */
export default function EventDetails() {
  return (
    <section id="events" className="bg-warm-100 py-20 px-6">
      <div className="reveal">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-tertiary mb-2">
          Detalles
        </p>
        <h2 className="font-display text-3xl text-ink">
          Celebración
        </h2>
        <div className="w-10 h-px bg-accent-muted mt-4 mb-6" />
      </div>

      <div className="reveal reveal-d1 max-w-3xl space-y-6">
        {/* Ceremony */}
        <div className="border-b border-rose-200 last:border-b-0">
          <EventCard
            type="Ceremonia Religiosa"
            name="Misa de Acción de Gracias"
            time="6:00 p.m."
            location="Templo de San Pablo Las Fuentes"
            mapUrl="https://share.google/aek5cNZYmCyn8oV3i"
            mapEmbed="https://maps.google.com/maps?q=Templo+San+Pablo+Las+Fuentes+Puebla+Mexico&output=embed&hl=es&z=16"
            imageSrc="/paulaxv/iglesia.png"
            imageAlt="Templo de San Pablo Las Fuentes"
          />
        </div>

        {/* Reception */}
        <EventCard
          type="Recepción"
          name="Fiesta & Celebración"
          time="8:00 p.m."
          location="Las Calandrias Eventos"
          address="Colonia Las Fuentes"
          mapUrl="https://share.google/le2qLjjaIACAO22vp"
          mapEmbed="https://maps.google.com/maps?q=Las+Calandrias+Eventos+Colonia+Las+Fuentes+Puebla+Mexico&output=embed&hl=es&z=16"
          imageSrc="/paulaxv/salondeeventos.png"
          imageAlt="Las Calandrias Eventos"
        />
      </div>
    </section>
  );
}
