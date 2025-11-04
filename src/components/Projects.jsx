import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Code Assistant',
    description:
      'Context-aware developer assistant that accelerates code review and refactoring. Built with FastAPI, React, and vector search.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    links: {
      demo: '#',
      github: '#',
    },
    tags: ['AI', 'FastAPI', 'React']
  },
  {
    title: 'Minimal Analytics',
    description:
      'Privacy-friendly, lightweight analytics dashboard with server-side aggregation and a11y-first charts.',
    image:
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop',
    links: {
      demo: '#',
      github: '#',
    },
    tags: ['Next.js', 'Edge', 'ClickHouse']
  },
  {
    title: 'Design System Starter',
    description:
      'Token-driven component library with dark mode and Radix primitives for excellent accessibility.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    links: {
      demo: '#',
      github: '#',
    },
    tags: ['Design Systems', 'Tailwind', 'Radix']
  },
];

const Projects = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Selected Projects
          </h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">
            A curated set of work emphasizing clarity, performance, and impact.
          </p>
        </div>

        <ul className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="group rounded-lg border border-neutral-200 overflow-hidden bg-white">
              <div className="aspect-[16/9] overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width="1200"
                  height="675"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-neutral-100 px-2.5 py-1">{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.links.demo}
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-900 hover:underline"
                    aria-label={`Open live demo of ${p.title}`}
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={p.links.github}
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-700 hover:underline"
                    aria-label={`Open GitHub repository of ${p.title}`}
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
