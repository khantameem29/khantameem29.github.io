import type { IconType } from 'react-icons'
import {
  SiGo, SiPython, SiOpenjdk, SiJavascript, SiNodedotjs, SiRabbitmq, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiGit, SiGithub, SiPrometheus, SiLangchain, SiHuggingface,
} from 'react-icons/si'
import { LuNetwork, LuBoxes, LuContainer, LuWorkflow, LuDatabaseZap, LuBrainCircuit, LuCode, LuServer, LuDatabase, LuCpu } from 'react-icons/lu'
import { skillGroups, type SkillKey } from '../data/portfolio'
import { Reveal, Section } from './ui'

const icons: Record<SkillKey, { Icon: IconType; color: string }> = {
  go: { Icon: SiGo, color: '#00ADD8' },
  python: { Icon: SiPython, color: '#4B8BBE' },
  java: { Icon: SiOpenjdk, color: '#E76F00' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  rest: { Icon: LuNetwork, color: '#38BDF8' },
  microservices: { Icon: LuBoxes, color: '#38BDF8' },
  node: { Icon: SiNodedotjs, color: '#5FA04E' },
  rabbitmq: { Icon: SiRabbitmq, color: '#FF6600' },
  postgres: { Icon: SiPostgresql, color: '#6A9BD8' },
  mongodb: { Icon: SiMongodb, color: '#47A248' },
  redis: { Icon: SiRedis, color: '#FF4438' },
  docker: { Icon: SiDocker, color: '#2496ED' },
  compose: { Icon: LuContainer, color: '#2496ED' },
  git: { Icon: SiGit, color: '#F05032' },
  github: { Icon: SiGithub, color: '#F8FAFC' },
  prometheus: { Icon: SiPrometheus, color: '#E6522C' },
  langchain: { Icon: SiLangchain, color: '#7FC8B0' },
  langgraph: { Icon: LuWorkflow, color: '#38BDF8' },
  faiss: { Icon: LuDatabaseZap, color: '#38BDF8' },
  huggingface: { Icon: SiHuggingface, color: '#FFD21E' },
  rag: { Icon: LuBrainCircuit, color: '#38BDF8' },
}

const groupIcons = [LuCode, LuServer, LuDatabase, LuContainer, LuCpu]

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My technical"
      accent="toolkit"
      intro="Technologies I use to design, build, ship and observe backend systems and AI applications."
      alt
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {skillGroups.map((g, gi) => {
          const GIcon = groupIcons[gi]
          // 3 cards on top row, 2 wider cards below on large screens
          const span = gi < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
          return (
            <Reveal key={g.title} delay={gi * 80} className={`${span} ${gi === 4 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
              <div className="group h-full rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-sky/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-ink text-sky transition-colors group-hover:border-sky/50">
                    <GIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-head">{g.title}</h3>
                    <p className="text-xs text-muted">{g.blurb}</p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {g.items.map((s) => {
                    const { Icon, color } = icons[s.icon]
                    return (
                      <li
                        key={s.name}
                        className="flex items-center gap-2 rounded-lg border border-line bg-ink/70 px-3 py-2 text-sm font-medium text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-sky/60 hover:text-head hover:shadow-[0_6px_20px_-8px_rgb(56_189_248/0.6)]"
                      >
                        <Icon className="h-4 w-4 shrink-0" style={{ color }} aria-hidden />
                        {s.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
