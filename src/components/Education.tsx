import { LuAward, LuGraduationCap } from 'react-icons/lu'
import { certifications, education } from '../data/portfolio'
import { Reveal, Section } from './ui'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education &" accent="certifications">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-card p-7 sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-sky/40 bg-primary/10 text-sky">
              <LuGraduationCap className="h-6 w-6" />
            </span>
            <p className="mt-6 font-mono text-xs text-muted">{education.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold leading-snug text-head">{education.degree}</h3>
            <p className="mt-2 font-medium text-sky">Specialization: {education.specialization}</p>
            <p className="mt-4 text-sm text-body">{education.school}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-line bg-card p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <LuAward className="h-5 w-5 text-sky" />
              <h3 className="font-display text-lg font-semibold text-head">Certifications</h3>
            </div>
            <ul className="mt-6 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-head">{c.title}</p>
                    <p className="text-xs text-muted">{c.issuer}</p>
                  </div>
                  {c.status && (
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky/40 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-sky">
                      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" /> {c.status}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
