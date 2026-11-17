import { FaGithub } from 'react-icons/fa6'
import { LuArrowUpRight, LuCheck } from 'react-icons/lu'
import { projects, type Project } from '../data/portfolio'
import ProjectVisual from './ProjectVisual'
import { Badge, Reveal, Section, ext } from './ui'

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-sky/50 hover:shadow-[0_24px_60px_-20px_rgb(37_99_235/0.5)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectVisual kind={p.visual} title={p.title} />
        )}
        <span className="absolute right-3 top-3 z-10 rounded-md border border-line bg-ink/80 px-2 py-1 font-mono text-[10px] text-muted backdrop-blur">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-sky">{p.tagline}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-head">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-body">{p.description}</p>

        <ul className="mt-4 space-y-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted">
              <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky" /> {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
          {p.github && (
            <a
              href={p.github}
              {...ext}
              className="btn-glow inline-flex items-center gap-2 rounded-lg border border-line bg-ink/60 px-4 py-2 text-sm font-semibold text-head hover:border-sky/60 hover:text-sky"
            >
              <FaGithub className="h-4 w-4" /> GitHub
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              {...ext}
              className="btn-glow inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
            >
              Live Demo <LuArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {p.api && (
            <a
              href={p.api}
              {...ext}
              className="btn-glow inline-flex items-center gap-2 rounded-lg border border-line bg-ink/60 px-4 py-2 text-sm font-semibold text-head hover:border-sky/60 hover:text-sky"
            >
              Live API <LuArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {p.note && (
            <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-line px-4 py-2 text-xs font-medium text-muted">
              {p.note}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured"
      accent="work"
      intro="A selection of platforms, APIs and AI applications I've built or contributed to."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <ProjectCard p={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
