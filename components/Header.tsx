"use client";

import { useState } from "react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Industrias", href: "#industrias" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-site px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-xl tracking-tight text-ink">
          INGEORBE
          <span className="block label-mono text-steel mt-0.5">Ingeniería Civil</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-mono text-ink-soft hover:text-signal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-5 py-2.5 bg-ink text-paper text-sm font-medium hover:bg-signal transition-colors"
          >
            Solicitar Consulta
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-paper px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="label-mono text-ink-soft"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="px-5 py-3 bg-ink text-paper text-sm font-medium text-center"
          >
            Solicitar Consulta
          </a>
        </nav>
      )}
    </header>
  );
}
