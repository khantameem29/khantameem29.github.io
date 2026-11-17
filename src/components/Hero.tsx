import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuArrowDown, LuArrowUpRight, LuDownload, LuMail } from 'react-icons/lu'
import { profile } from '../data/portfolio'
import { Button, ext } from './ui'

function useTypewriter(words: string[], typeMs = 70, holdMs = 1800) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(word)
      const t = setTimeout(() => setI((n) => n + 1), holdMs + 800)
      return () => clearTimeout(t)
    }
    let t: ReturnType<typeof setTimeout>
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), holdMs)
    else if (deleting && text === '') {
      setDeleting(false)
      setI((n) => n + 1)
    } else
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? typeMs / 2 : typeMs,
      )
    return () => clearTimeout(t)
  }, [text, deleting, i, words, typeMs, holdMs])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 350)
    return () => clearTimeout(t)
  }, [])

  const delays: Record<number, string> = { 0: 'delay-0', 100: 'delay-100', 150: 'delay-150', 200: 'delay-200', 300: 'delay-300', 400: 'delay-[400ms]', 500: 'delay-500' }
  const enter = (delay: number) =>
    `transition-all duration-700 ease-out ${delays[delay]} ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        <div className="order-2 lg:order-1">
          <div className={enter(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3.5 py-1.5 text-xs font-medium text-body backdrop-blur">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              Open to software engineering roles
            </span>
          </div>

          <h1 className={`mt-6 font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-head sm:text-6xl lg:text-[4.25rem] ${enter(100)}`}>
            Hi, I&apos;m <span className="text-sky">Tameem Khan</span>
          </h1>

          <p className={`mt-5 h-8 font-mono text-lg text-body sm:text-xl ${enter(200)}`} aria-label={profile.roles.join(', ')}>
            <span className="text-primary">&gt;</span> <span aria-hidden>{typed}</span>
            <span className="caret" aria-hidden />
          </p>

          <p className={`mt-3 text-sm font-medium tracking-wide text-muted ${enter(300)}`}>
            Software Engineer <span className="text-line">|</span> Backend Developer <span className="text-line">|</span>{' '}
            AI/ML Enthusiast
          </p>

          <p className={`mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg ${enter(300)}`}>{profile.intro}</p>

          <div className={`mt-9 flex flex-wrap gap-3 ${enter(400)}`}>
            <Button href="#projects">
              View Projects <LuArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href={profile.resume} download="Tameem_Khan_Resume.pdf" variant="ghost">
              <LuDownload className="h-4 w-4" /> Download Resume
            </Button>
            <Button href="#contact" variant="ghost">
              <LuMail className="h-4 w-4" /> Contact Me
            </Button>
          </div>

          <div className={`mt-9 flex items-center gap-4 ${enter(500)}`}>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">Find me on</span>
            <span className="h-px w-8 bg-line" />
            {[
              { href: profile.github, label: 'GitHub', Icon: FaGithub },
              { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                {...ext}
                aria-label={label}
                className="btn-glow grid h-10 w-10 place-items-center rounded-lg border border-line bg-card/60 text-body hover:border-sky/60 hover:text-sky"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className={`order-1 mx-auto w-full max-w-[230px] sm:max-w-[300px] lg:order-2 lg:max-w-[400px] ${enter(150)}`}>
          <div className="floaty relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-line/70" aria-hidden />
            <div className="absolute -inset-px rounded-[1.6rem] bg-gradient-to-b from-sky/60 via-primary/30 to-transparent" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.55rem] bg-card shadow-[0_30px_80px_-20px_rgb(37_99_235/0.45)]">
              <picture>
                <source srcSet={profile.photo} type="image/webp" />
                <img
                  src={profile.photoFallback}
                  alt="Portrait of Tameem Khan"
                  width={560}
                  height={700}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </picture>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-xl border border-line bg-card/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-8">
              <p className="font-mono text-[11px] text-muted">// focus</p>
              <p className="text-sm font-semibold text-head">Go · Microservices · AI</p>
            </div>
            <div className="absolute -right-3 top-6 rounded-xl border border-line bg-card/85 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:-right-6">
              <p className="flex items-center gap-2 text-xs font-semibold text-head">
                <span className="h-2 w-2 rounded-full bg-sky" /> Backend Engineer
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted transition-colors hover:text-sky md:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <LuArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
