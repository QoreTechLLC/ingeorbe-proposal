import { industries } from "@/app/content";

export default function Industries() {
  return (
    <section id="industrias" className="py-24 lg:py-32 bg-ink">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="label-mono text-signal mb-4">Industrias</div>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-paper leading-tight max-w-xl mb-14">
          Sectores a los que servimos
        </h2>

        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-3 border border-paper/20 text-paper/90 text-sm label-mono"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
