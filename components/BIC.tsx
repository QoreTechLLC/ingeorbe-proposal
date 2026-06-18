export default function BIC() {
  // Replace these paths with the real filenames once you drop the PDFs into /public
  const INFORME_PDF = "/documents/Informe_Gestion_BIC_2025_V1.pdf";
  const INFOGRAFIA_PDF = "/documents/Infografia_BIC_Ingeorbe_2025_1.pdf";

  return (
    <section
      id="bic"
      className="py-24 lg:py-32 bg-paper-raised border-y border-line"
    >
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Label + title */}
          <div className="lg:col-span-4">
            <div className="label-mono text-signal mb-4">Empresa BIC</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
              Nuestro Compromiso como Empresa BIC
            </h2>
          </div>

          {/* Description + CTA */}
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
            <p className="text-steel text-lg leading-relaxed">
              Durante el año 2026, en Ingeorbe SAS BIC reafirmamos nuestro
              compromiso como Sociedad de Beneficio e Interés Colectivo,
              integrando criterios de sostenibilidad, innovación,
              responsabilidad social y eficiencia en nuestros proyectos y
              procesos. Promovemos una gestión ética, transparente y sostenible
              orientada a generar valor económico, social y ambiental para
              nuestros colaboradores, clientes, aliados y comunidades.
              Fortalecemos la implementación de tecnologías, procesos de mejora
              continua y acciones para reducir el impacto ambiental,
              contribuyendo al desarrollo sostenible del país mediante
              soluciones de ingeniería y construcción responsables.
            </p>

            <div className="mt-10 pt-8 border-t border-line">
              <p className="label-mono text-steel mb-6">¿Quieres saber más?</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={INFORME_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-ink text-paper text-sm font-medium hover:bg-signal transition-colors"
                >
                  <PdfIcon />
                  Ver informe de gestión
                </a>
                <a
                  href={INFOGRAFIA_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 border border-ink text-ink text-sm font-medium hover:border-signal hover:text-signal transition-colors"
                >
                  <PdfIcon />
                  Ver infografía
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PdfIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M3 2h7l3 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M9 2v4h4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9h6M5 11.5h4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}
