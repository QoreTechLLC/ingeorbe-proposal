const quickLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/80 pt-20 pb-10">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="font-display font-bold text-lg text-paper">INGEORBE</div>
            <p className="mt-4 text-sm leading-relaxed text-paper/60 max-w-xs">
              Ingeniería civil de excelencia. Consultoría, gerencia de proyectos e
              interventoría en Bogotá, Colombia.
            </p>
          </div>

          <div>
            <div className="label-mono text-paper/50 mb-4">Contacto</div>
            <ul className="space-y-2 text-sm text-paper/70">
              <li>contacto@ingeorbe.com (placeholder)</li>
              <li>+57 1 000 0000 (placeholder)</li>
              <li>Bogotá, Colombia</li>
            </ul>
          </div>

          <div>
            <div className="label-mono text-paper/50 mb-4">Enlaces</div>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-paper/70 hover:text-signal transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="label-mono text-paper/50 mb-4">Certificaciones</div>
            <p className="text-sm text-paper/60">
              Espacio reservado para logos de certificación (ISO, RUC, etc.)
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-wrap gap-6 justify-between text-xs text-paper/50">
          <span>© {new Date().getFullYear()} Ingeorbe S.A.S. Todos los derechos reservados.</span>
          <a href="/privacidad" className="hover:text-paper/80">
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
