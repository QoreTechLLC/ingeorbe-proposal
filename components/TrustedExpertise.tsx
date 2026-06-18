export default function TrustedExpertise() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-paper-raised border-y border-line">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="label-mono text-signal mb-4">Quiénes Somos</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
              Redefiniendo los estándares de la ingeniería civil en Colombia
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-steel text-lg leading-relaxed">
              En Ingeorbe nos interesa redefinir los estándares de la ingeniería civil en
              Colombia. Valoramos la confianza de nuestros clientes y nos comprometemos a
              brindar un trato cercano y comunicación abierta en cada etapa de un proyecto.
            </p>
            <p className="mt-5 text-steel text-lg leading-relaxed">
              Reconocidos por nuestra transparencia, aspiramos a ser la opción preferida para
              empresas de construcción y visionarios que buscan realizar proyectos de
              ingeniería que impacten positivamente nuestro entorno.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-line pt-10">
              <div>
                <div className="label-mono text-steel mb-2">Misión</div>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Entregar soluciones de ingeniería confiables que impulsen el desarrollo de
                  las ciudades colombianas.
                </p>
              </div>
              <div>
                <div className="label-mono text-steel mb-2">Experticia</div>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Ingeniería civil, tránsito, transporte, movilidad y seguridad vial bajo un
                  mismo equipo técnico.
                </p>
              </div>
              <div>
                <div className="label-mono text-steel mb-2">Diferencial</div>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Comunicación cercana y transparente en cada fase, del diagnóstico a la
                  entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
