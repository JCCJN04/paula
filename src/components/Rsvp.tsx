"use client";

import { useState, type FormEvent } from "react";

interface RsvpData {
  name: string;
  guests: string;
  phone: string;
  message: string;
}

const inputClasses =
  "w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-lg text-sm text-ink " +
  "placeholder:text-ink-tertiary outline-none transition-colors duration-300 " +
  "focus:border-accent focus:ring-1 focus:ring-accent/20 font-body";

export default function Rsvp() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<RsvpData>({
    name: "",
    guests: "1",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const list = JSON.parse(localStorage.getItem("xv_rsvp") || "[]");
    list.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem("xv_rsvp", JSON.stringify(list));

    setSubmitted(true);
  }

  return (
    <section
      id="rsvp"
      className="bg-warm-50 py-20 px-6"
    >
      <div className="reveal">
        <p className="text-[0.6rem] tracking-[0.3em] uppercase text-ink-tertiary mb-2">
          RSVP
        </p>
        <h2 className="font-display text-3xl text-ink">
          Confirmar Asistencia
        </h2>
        <div className="w-10 h-px bg-accent-muted mt-4 mb-6" />
      </div>

      <div className="reveal reveal-d1 max-w-md">
        {!submitted ? (
          <>
            <p className="text-sm text-ink-secondary mb-8 max-w-sm">
              Tu presencia es el mejor regalo. Por favor confirma tu asistencia.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Nombre completo" required>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className={inputClasses}
                />
              </Field>

              <Field label="Número de invitados">
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Teléfono / WhatsApp (opcional)">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="55 1234 5678"
                  className={inputClasses}
                />
              </Field>

              <Field label="Mensaje para Paula (opcional)">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Escribe un mensaje especial…"
                  className={`${inputClasses} resize-y`}
                />
              </Field>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full
                    text-[0.7rem] font-medium tracking-[0.15em] uppercase
                    border border-accent text-accent
                    hover:bg-accent hover:text-white
                    transition-all duration-300 cursor-pointer"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-6 animate-fade-in-up">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-accent mb-3">
              Confirmado
            </p>
            <h3 className="font-display text-2xl text-ink mb-2">¡Gracias!</h3>
            <p className="text-sm text-ink-secondary">
              Tu asistencia fue registrada. ¡Te esperamos!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[0.6rem] tracking-[0.15em] uppercase text-ink-tertiary font-medium mb-1.5">
        {label} {required && <span className="text-rose-300">*</span>}
      </span>
      {children}
    </label>
  );
}
