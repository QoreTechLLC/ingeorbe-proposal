"use client";

import { useState, FormEvent } from "react";

const projectTypes = [
  "Consultoría en Ingeniería Civil",
  "Estudios de Tránsito y Transporte",
  "Interventoría Técnica",
  "Planeación de Movilidad",
  "Seguridad Vial",
  "Gerencia de Proyectos",
  "Otro",
];

export default function ConsultationCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: wire this up to the real form handler / API route later.
    setSubmitted(true);
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-paper-raised border-t border-line">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="label-mono text-signal mb-4">Contacto</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
              Hablemos de su próximo proyecto
            </h2>
            <p className="mt-6 text-steel text-lg leading-relaxed max-w-md">
              Cuéntenos sobre su proyecto y un miembro de nuestro equipo técnico se pondrá en
              contacto en menos de 24 horas hábiles.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <div className="tick-corner p-8 bg-paper">
                <p className="font-display font-semibold text-xl text-ink">Mensaje recibido</p>
                <p className="mt-2 text-steel">
                  Gracias por contactarnos. Le responderemos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nombre" name="name" required />
                  <Field label="Empresa" name="company" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Correo electrónico" name="email" type="email" required />
                  <Field label="Teléfono" name="phone" type="tel" />
                </div>

                <div>
                  <label htmlFor="projectType" className="label-mono text-steel block mb-2">
                    Tipo de proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full bg-paper border border-line px-4 py-3 text-ink focus-visible:border-signal outline-none"
                  >
                    <option value="">Seleccione una opción</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="label-mono text-steel block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-paper border border-line px-4 py-3 text-ink focus-visible:border-signal outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-7 py-3.5 bg-ink text-paper font-medium hover:bg-signal transition-colors"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="label-mono text-steel block mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-paper border border-line px-4 py-3 text-ink focus-visible:border-signal outline-none"
      />
    </div>
  );
}
