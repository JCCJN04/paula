"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface EntranceOverlayProps {
  onOpen?: () => void;
}

export default function EntranceOverlay({ onOpen }: EntranceOverlayProps) {
  const [mounted, setMounted] = useState(true);
  const [hidden, setHidden] = useState(false);

  // Prevent scroll when overlay is active
  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center text-center bg-warm-50
        transition-all duration-1000 ease-in-out
        ${hidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full overflow-hidden -z-10">
        <Image
          src="/paulaxv/paula_main.jpeg"
          alt="Paula – XV Años"
          fill
          priority
          quality={100}
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center mt-auto mb-20 p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-xl border border-white/40 w-[85%] max-w-sm">
        <p className="text-[0.7rem] tracking-[0.3em] uppercase text-ink-tertiary mb-4">
          Estás invitado(a)
        </p>

        <h1 className="font-display text-4xl text-ink mb-2">
          Mis XV Años
        </h1>

        <div className="w-10 h-px bg-accent-muted mb-8" />

        <button
          onClick={() => {
            setHidden(true);
            if (onOpen) onOpen();
            setTimeout(() => setMounted(false), 1000);
          }}
          className="px-8 py-3 rounded-full text-ink text-[0.7rem] font-medium
            tracking-[0.2em] uppercase border border-accent bg-transparent
            hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
        >
          Abrir invitación
        </button>
      </div>
    </div>
  );
}
