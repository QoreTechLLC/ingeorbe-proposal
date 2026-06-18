import { testimonials } from "@/app/content";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="label-mono text-signal mb-4">Testimonios</div>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight max-w-xl mb-14">
          Lo que dicen quienes han trabajado con nosotros
        </h2>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-l-2 border-signal pl-7">
              <blockquote className="text-ink-soft text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 label-mono text-steel">
                {t.name} — {t.role}, {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
