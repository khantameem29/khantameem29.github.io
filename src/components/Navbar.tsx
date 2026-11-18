import { useEffect, useState } from 'react'
import { LuDownload, LuMenu, LuX } from 'react-icons/lu'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[]

    // Highlight the last section whose top has passed the middle of the screen.
    // Nothing is highlighted while the hero (#home) is in view.
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const mid = window.innerHeight / 2
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let current = ''
      for (const s of sections) if (s.getBoundingClientRect().top <= mid) current = `#${s.id}`
      if (atBottom && sections.length) current = `#${sections[sections.length - 1].id}`
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line/70 bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-card font-display text-sm font-bold text-sky transition-colors group-hover:border-sky/60">
            TK
          </span>
          <span className="font-display text-[15px] font-semibold text-head">Tameem Khan</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-head ${
                  active === l.href ? 'text-head' : 'text-muted'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-sky transition-transform duration-300 ${
                    active === l.href ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download="Tameem_Khan_Resume.pdf"
            className="btn-glow hidden items-center gap-2 rounded-lg border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-semibold text-sky hover:bg-primary hover:text-white sm:inline-flex"
          >
            <LuDownload className="h-4 w-4" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-body transition-colors hover:border-sky/60 hover:text-sky lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto max-w-6xl space-y-1 px-5 pb-6 pt-2 sm:px-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-card hover:text-head ${
                  active === l.href ? 'bg-card text-head' : 'text-body'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.resume}
              download="Tameem_Khan_Resume.pdf"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-white"
            >
              <LuDownload className="h-4 w-4" /> Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
