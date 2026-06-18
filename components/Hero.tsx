import { stats } from "@/app/content";
import SafeImage from "@/components/SafeImage";

/* Placeholder hero background. This SVG is a designed stand-in (abstract
   road lines + survey tick marks, matching the site's signature motif) that
   is guaranteed to render since it's a local file, not an external URL.
   Swap HERO_IMAGE for a real photo path under /public, or replace the whole
   <SafeImage> block below with a <video> tag — see the commented example. */
const HERO_IMAGE = "/background.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden"
    >
      {/* Solid fallback layer — visible if the image fails or while it loads,
          so the hero never goes blank. */}
      <div className="absolute inset-0 bg-ink" aria-hidden />

      {/* Background image layer. To use video instead, remove this <Image>
          and use:
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
      */}
      <SafeImage
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        fallbackLabel=""
      />

      {/* Scrim for text legibility over the photo */}
      <div className="absolute inset-0 bg-ink/80" aria-hidden />

      {/* Faint coordinate-grid overlay — signature motif, kept quiet over the photo */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--color-paper)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-paper)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-site px-6 lg:px-10">
        <div className="label-mono text-signal mb-6">
          N04°43′ W074°04′ — Bogotá, Colombia
        </div>

        <h1 className="font-display font-bold text-paper text-[2.5rem] leading-[1.08] lg:text-[4rem] lg:leading-[1.05] max-w-4xl">
          Ingeniería para una infraestructura sostenible y un desarrollo urbano
          duradero
        </h1>

        <p className="mt-7 max-w-xl text-paper/75 text-lg leading-relaxed">
          Consultoría, gerencia de proyectos, interventoría e ingeniería para
          proyectos públicos y privados en todo el territorio colombiano.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="px-7 py-3.5 bg-signal text-ink font-medium hover:bg-paper transition-colors"
          >
            Solicitar una Consulta
          </a>
          <a
            href="#proyectos"
            className="px-7 py-3.5 border border-paper/60 text-paper font-medium hover:border-paper hover:bg-paper/10 transition-colors"
          >
            Ver Proyectos
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-paper/20 pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd className="font-display font-bold text-3xl lg:text-4xl text-paper">
                {stat.value}
              </dd>
              <dt className="label-mono text-paper/60 mt-2">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
