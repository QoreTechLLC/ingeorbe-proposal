"use client";

import { useState } from "react";
import SafeImage from "@/components/SafeImage";
import { projects } from "@/app/content";

const INITIAL_VISIBLE = 4;

export default function FeaturedProjects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE);

  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-paper-raised border-y border-line">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <div className="label-mono text-signal mb-4">Proyectos</div>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight max-w-xl mb-14">
          Proyectos que demuestran nuestra capacidad técnica
        </h2>

        <div className="grid lg:grid-cols-2 gap-px bg-line border border-line">
          {visibleProjects.map((project) => (
            <article key={project.name} className="bg-paper flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-44 h-44 sm:h-auto shrink-0 bg-line">
                <SafeImage
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 176px"
                  fallbackLabel={project.name}
                />
              </div>
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <span className="label-mono text-steel">{project.sector}</span>
                  <span className="label-mono text-steel">{project.location}</span>
                </div>

                <h3 className="font-display font-semibold text-2xl text-ink leading-snug">
                  {project.name}
                </h3>

                <dl className="mt-6 space-y-3">
                  <div className="flex gap-3">
                    <dt className="label-mono text-steel shrink-0 w-24">Cliente</dt>
                    <dd className="text-ink-soft text-sm">{project.client}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="label-mono text-steel shrink-0 w-24">Alcance</dt>
                    <dd className="text-ink-soft text-sm">{project.scope}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="label-mono text-steel shrink-0 w-24">Resultado</dt>
                    <dd className="text-ink-soft text-sm">{project.outcome}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        {projects.length > INITIAL_VISIBLE && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-7 py-3.5 border border-ink text-ink font-medium hover:border-signal hover:text-signal transition-colors"
            >
              {showAll ? "Ver menos" : `Ver los ${projects.length} proyectos`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
