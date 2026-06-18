import { differentiators } from "@/app/content";

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="label-mono text-signal mb-4">Por Qué Ingeorbe</div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
              Lo que respalda cada entrega
            </h2>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {differentiators.map((item, i) => (
              <div key={item.title} className="tick-corner pl-5 pt-5">
                <span className="label-mono text-steel">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display font-semibold text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-steel text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
