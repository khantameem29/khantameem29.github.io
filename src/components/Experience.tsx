import { LuArrowUpRight, LuAward, LuBriefcase } from 'react-icons/lu'
import { experience } from '../data/portfolio'
import { Badge, Reveal, Section, ext } from './ui'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've" accent="worked" alt>
      <ol className="relative space-y-8 border-l border-line pl-8 sm:pl-10">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[49px] top-1 grid h-8 w-8 place-items-center rounded-full border border-sky/50 bg-ink text-sky shadow-[0_0_0_6px_rgb(11_17_32)] sm:-left-[57px]">
              <LuBriefcase className="h-4 w-4" />
            </span>
            <Reveal>
              <div className="rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-sky/40 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-head">{e.role}</h3>
                    <p className="mt-1 font-medium text-sky">{e.company}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-line bg-ink px-3 py-1 font-mono text-xs text-muted">
                    {e.period}
                  </span>
                </div>
                {e.certificate && (
                  <a
                    href={e.certificate}
                    {...ext}
                    className="mt-4 inline-flex items-center gap-2 rounded-lg border border-line bg-ink/60 px-3.5 py-2 text-xs font-semibold text-head transition-colors hover:border-sky/60 hover:text-sky"
                  >
                    <LuAward className="h-4 w-4 text-sky" /> Internship Completion Certificate
                    <LuArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <p className="mt-5 text-sm leading-relaxed text-body sm:text-base">{e.summary}</p>
                <ul className="mt-5 space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-body">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
