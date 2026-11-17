import type { Project } from '../data/portfolio'

/** Lightweight, code-drawn preview art for each project (used when no screenshot is provided). */
export default function ProjectVisual({ kind, title }: { kind: Project['visual']; title: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-2">
      <div className="bg-grid absolute inset-0 opacity-70" aria-hidden />
      {/* window chrome */}
      <div className="absolute inset-x-5 top-5 bottom-0 overflow-hidden rounded-t-xl border border-b-0 border-line bg-ink/90 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1.5 sm:inset-x-8 sm:top-7">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
          <span className="ml-3 truncate font-mono text-[10px] text-muted">{title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
        <div className="p-3 sm:p-4" aria-hidden>
          {kind === 'kanban' && <Kanban />}
          {kind === 'finance' && <Finance />}
          {kind === 'services' && <Services />}
          {kind === 'ai' && <AI />}
        </div>
      </div>
    </div>
  )
}

const Bar = ({ w, c = 'bg-line' }: { w: string; c?: string }) => <div className={`h-1.5 rounded-full ${c}`} style={{ width: w }} />

function Kanban() {
  const cols = [
    { name: 'To do', cards: [['80%', '55%'], ['70%', '40%'], ['60%', '45%']] },
    { name: 'In progress', cards: [['75%', '50%'], ['85%', '35%']] },
    { name: 'Done', cards: [['65%', '45%'], ['80%', '60%']] },
  ]
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {cols.map((c, ci) => (
        <div key={c.name} className="rounded-lg border border-line/70 bg-ink-2 p-2">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted">{c.name}</span>
            <span className="rounded bg-card px-1 text-[9px] text-muted">{c.cards.length}</span>
          </div>
          <div className="space-y-1.5">
            {c.cards.map((card, i) => (
              <div key={i} className={`space-y-1.5 rounded-md border p-2 ${ci === 1 && i === 0 ? 'border-sky/50 bg-primary/10' : 'border-line/70 bg-card'}`}>
                <Bar w={card[0]} c="bg-body/40" />
                <Bar w={card[1]} />
                <div className="flex -space-x-1 pt-0.5">
                  <span className="h-3 w-3 rounded-full border border-ink bg-primary" />
                  <span className="h-3 w-3 rounded-full border border-ink bg-sky" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Finance() {
  const bars = [38, 52, 45, 66, 58, 74, 63, 82, 70, 90]
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {['bg-sky', 'bg-primary', 'bg-emerald-400'].map((c) => (
          <div key={c} className="space-y-1.5 rounded-lg border border-line/70 bg-card p-2">
            <Bar w="45%" />
            <Bar w="70%" c={`${c}/80`} />
          </div>
        ))}
      </div>
      <div className="flex h-24 items-end gap-1.5 rounded-lg border border-line/70 bg-card p-2.5 sm:h-28">
        {bars.map((h, i) => (
          <div key={i} className={`flex-1 rounded-sm ${i === bars.length - 1 ? 'bg-sky' : 'bg-primary/60'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="rounded-md border border-line/70 bg-card px-2.5 py-1.5 font-mono text-[10px] text-muted">
        <span className="text-emerald-400">GET</span> /api … <span className="text-sky">200 OK</span>
      </div>
    </div>
  )
}

function Services() {
  const svcs = ['Catalogue', 'Rating', 'Analytics']
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="rounded-md border border-sky/50 bg-primary/15 px-3 py-1.5 font-mono text-[10px] font-medium text-sky">API Gateway</div>
      <div className="h-3 w-px bg-line" />
      <div className="grid w-full grid-cols-3 gap-2">
        {svcs.map((s) => (
          <div key={s} className="rounded-lg border border-line/70 bg-card p-2 text-center">
            <div className="mx-auto mb-1.5 h-4 w-4 rounded bg-[#00ADD8]/25 ring-1 ring-[#00ADD8]/50" />
            <span className="font-mono text-[9px] text-body sm:text-[10px]">{s}</span>
          </div>
        ))}
      </div>
      <div className="h-3 w-px bg-line" />
      <div className="flex w-full items-center gap-2">
        <div className="flex-1 rounded-md border border-[#FF6600]/40 bg-[#FF6600]/10 py-1.5 text-center font-mono text-[9px] text-[#ffb27a]">RabbitMQ</div>
        <div className="flex-1 rounded-md border border-[#6A9BD8]/40 bg-[#6A9BD8]/10 py-1.5 text-center font-mono text-[9px] text-[#a9c6ec]">PostgreSQL</div>
      </div>
    </div>
  )
}

function AI() {
  const steps = ['Profile', 'Embeddings', 'FAISS', 'LangGraph']
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-1">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-1">
            <div className={`flex-1 rounded-md border px-1 py-1.5 text-center font-mono text-[9px] ${i === 3 ? 'border-sky/50 bg-primary/15 text-sky' : 'border-line/70 bg-card text-body'}`}>
              {s}
            </div>
            {i < steps.length - 1 && <span className="text-[10px] text-muted">→</span>}
          </div>
        ))}
      </div>
      <div className="space-y-2 rounded-lg border border-line/70 bg-card p-2.5">
        <div className="text-[9px] font-semibold uppercase tracking-wider text-muted">Skill gaps</div>
        {[['72%', 'bg-sky'], ['48%', 'bg-primary'], ['30%', 'bg-primary/60']].map(([w, c]) => (
          <div key={w} className="flex items-center gap-2">
            <Bar w="28%" c="bg-body/30" />
            <div className="h-1.5 flex-1 rounded-full bg-ink"><div className={`h-full rounded-full ${c}`} style={{ width: w }} /></div>
          </div>
        ))}
      </div>
      <div className="flex items-start gap-2 rounded-lg border border-sky/30 bg-primary/10 p-2">
        <span className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-sky/80" />
        <div className="flex-1 space-y-1.5"><Bar w="90%" c="bg-body/40" /><Bar w="65%" /></div>
      </div>
    </div>
  )
}
