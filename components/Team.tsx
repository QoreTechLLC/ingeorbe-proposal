import SafeImage from "@/components/SafeImage";
import { team } from "@/app/content";

export default function Team() {
  return (
    <section id="equipo" className="py-24 lg:py-32">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="label-mono text-signal mb-4">Equipo</div>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight max-w-xl mb-14">
          Las personas detrás de cada proyecto
        </h2>

        <div className="grid sm:grid-cols-3 gap-10 lg:gap-12">
          {team.map((member) => (
            <div key={member.name} className="flex items-center gap-5">
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-line shrink-0">
                <SafeImage
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  fallbackLabel={member.name}
                />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-ink">{member.name}</h3>
                <p className="mt-1 label-mono text-steel">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
