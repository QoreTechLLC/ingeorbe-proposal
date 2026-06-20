"use client";

import { useState, useEffect } from "react";
import { services } from "@/app/content";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? services[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section id="servicios" className="py-24 lg:py-32">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="label-mono text-signal mb-4">Servicios</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight max-w-xl">
              Capacidad técnica integral, de la consultoría a la interventoría
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {services.map((service, i) => (
            <button
              key={service.slug}
              onClick={() => setActiveIndex(i)}
              className="group bg-paper-raised p-8 flex flex-col text-left hover:bg-paper transition-colors"
            >
              <span className="label-mono text-steel">{service.code}</span>
              <h3 className="mt-6 font-display font-semibold text-xl text-ink leading-snug">
                {service.title}
              </h3>
              <p className="mt-4 text-steel text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <ul className="mt-6 space-y-1.5">
                {service.benefits.map((b) => (
                  <li
                    key={b}
                    className="text-xs text-ink-soft flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-signal" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-7 label-mono text-ink group-hover:text-signal transition-colors">
                Conocer más →
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="absolute inset-0 bg-ink/70"
            onClick={() => setActiveIndex(null)}
            aria-hidden
          />
          <div className="relative bg-paper max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 lg:p-12">
            <button
              onClick={() => setActiveIndex(null)}
              aria-label="Cerrar"
              className="absolute top-6 right-6 text-steel hover:text-signal text-2xl leading-none"
            >
              ×
            </button>

            <span className="label-mono text-steel">{active.code}</span>
            <h3
              id="service-modal-title"
              className="mt-4 font-display font-bold text-2xl lg:text-3xl text-ink leading-snug"
            >
              {active.title}
            </h3>
            <p className="mt-5 text-steel leading-relaxed">
              {active.longDescription}
            </p>

            <div className="mt-8">
              <div className="label-mono text-steel mb-4">Cómo trabajamos</div>
              <ol className="space-y-3">
                {active.process.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm text-ink-soft"
                  >
                    <span className="label-mono text-signal shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* <a
                href={`/servicios/${active.slug}`}
                className="px-6 py-3 bg-ink text-paper text-sm font-medium hover:bg-signal transition-colors"
              >
                Ver página completa
              </a>
              <a
                href="#contacto"
                onClick={() => setActiveIndex(null)}
                className="px-6 py-3 border border-ink text-ink text-sm font-medium hover:border-signal hover:text-signal transition-colors"
              >
                Solicitar Consulta
              </a> */}
              <a
                href="#contacto"
                onClick={() => setActiveIndex(null)}
                className="px-6 py-3 border border-ink text-ink text-sm font-medium hover:border-signal hover:text-signal transition-colors"
              >
                Solicitar Consulta
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
