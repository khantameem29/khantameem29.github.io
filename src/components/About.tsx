import { LuBrainCircuit, LuLayers, LuServer, LuMapPin, LuGraduationCap, LuBriefcase } from 'react-icons/lu'
import { about, education, profile } from '../data/portfolio'
import { Reveal, Section } from './ui'

const focusIcons = [LuServer, LuLayers, LuBrainCircuit]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering systems," accent="not just code.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <Reveal className="space-y-5 text-base leading-relaxed text-body sm:text-[17px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-line bg-card/70 p-6 backdrop-blur">
            <p className="font-mono text-xs text-muted">quick_facts.json</p>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                { Icon: LuBriefcase, k: 'Role', v: 'Software Engineer, Backend' },
                { Icon: LuGraduationCap, k: 'Education', v: `B.Tech CSE (${'AI/ML'})` },
                { Icon: LuServer, k: 'Primary stack', v: 'Go · PostgreSQL · Docker' },
                { Icon: LuMapPin, k: 'Based in', v: profile.location },
              ].map(({ Icon, k, v }) => (
                <div key={k} className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-sky">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs text-muted">{k}</dt>
                    <dd className="font-medium text-head">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="sr-only">{education.school}</p>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {about.focus.map((f, i) => {
          const Icon = focusIcons[i]
          return (
            <Reveal key={f.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky/50 hover:shadow-[0_12px_40px_-12px_rgb(37_99_235/0.45)]">
                <Icon className="h-6 w-6 text-sky transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-lg font-semibold text-head">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
