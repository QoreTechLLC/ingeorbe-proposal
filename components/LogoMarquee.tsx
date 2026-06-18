import SafeImage from "@/components/SafeImage";
import { clientLogos } from "@/app/content";

export default function LogoMarquee() {
  // Duplicate the list so the CSS animation can loop seamlessly.
  const loopedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 lg:py-20 border-y border-line bg-paper-raised overflow-hidden">
      <div className="mx-auto max-w-site px-6 lg:px-10 mb-8">
        <p className="label-mono text-steel text-center">Empresas que han confiado en nosotros</p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Fade edges so the loop feels intentional, not cut off */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-paper-raised to-transparent z-10" aria-hidden />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-paper-raised to-transparent z-10" aria-hidden />

        <div className="marquee-track flex items-center gap-16 w-max">
          {loopedLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="relative shrink-0 w-[140px] h-[42px] opacity-60 hover:opacity-100 transition-opacity">
              <SafeImage src={logo.src} alt={logo.name} fill className="object-contain" fallbackLabel={logo.name} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
