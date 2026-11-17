import { useEffect, useRef, type ReactNode, type AnchorHTMLAttributes } from 'react'

/** Fades children in when they scroll into view. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Section({
  id,
  eyebrow,
  title,
  accent,
  intro,
  children,
  alt = false,
}: {
  id: string
  eyebrow: string
  title: string
  accent: string
  intro?: string
  children: ReactNode
  alt?: boolean
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 ${alt ? 'bg-ink-2/60 border-y border-line/60' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-sky">
            <span className="text-primary">/</span> {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-head sm:text-4xl">
            {title} <span className="text-sky">{accent}</span>
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

type BtnProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: 'primary' | 'ghost'; children: ReactNode }

export function Button({ variant = 'primary', className = '', children, ...rest }: BtnProps) {
  const base =
    'btn-glow inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-[#1d4ed8]'
      : 'border border-line bg-card/60 text-head hover:border-sky/60 hover:text-sky'
  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </a>
  )
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-ink/60 px-2.5 py-1 font-mono text-[11px] font-medium text-body">
      {children}
    </span>
  )
}

export const ext = { target: '_blank', rel: 'noopener noreferrer' } as const
