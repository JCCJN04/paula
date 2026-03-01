"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-07-25T18:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [diff, setDiff] = useState<number | null>(null);

  useEffect(() => {
    function tick() {
      setDiff(Math.max(0, EVENT_DATE.getTime() - Date.now()));
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const labels = ["Días", "Horas", "Min", "Seg"];

  if (diff === null) {
    return (
      <div className="flex justify-center gap-5 max-w-md mx-auto">
        {labels.map((l) => (
          <div key={l} className="text-center">
            <div className="font-display text-3xl text-ink leading-none">—</div>
            <div className="text-[0.55rem] tracking-[0.18em] uppercase text-ink-tertiary mt-2">{l}</div>
          </div>
        ))}
      </div>
    );
  }

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);

  const items = [
    { value: days, label: "Días" },
    { value: hours, label: "Horas" },
    { value: minutes, label: "Min" },
    { value: seconds, label: "Seg" },
  ];

  return (
    <div className="flex justify-center gap-5 max-w-md mx-auto">
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <div className="font-display text-3xl text-ink leading-none tabular-nums">
            {item.label === "Días" ? days : pad(item.value)}
          </div>
          <div className="text-[0.55rem] tracking-[0.18em] uppercase text-ink-tertiary mt-2">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
