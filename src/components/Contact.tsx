import { useState, type FormEvent } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuMail, LuPhone, LuSend, LuArrowUpRight, LuCheck } from 'react-icons/lu'
import { profile } from '../data/portfolio'
import { Reveal, Section, ext } from './ui'

const channels = [
  { Icon: LuMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { Icon: LuPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { Icon: FaLinkedin, label: 'LinkedIn', value: 'in/tameemkhan29', href: profile.linkedin, external: true },
  { Icon: FaGithub, label: 'GitHub', value: 'Ktameem29', href: profile.github, external: true },
]

const field =
  'w-full rounded-lg border border-line bg-ink/70 px-4 py-3 text-sm text-head placeholder:text-muted/70 outline-none transition-colors focus:border-sky/70 focus:ring-2 focus:ring-primary/30'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') ?? '').trim()
    const email = String(f.get('email') ?? '').trim()
    const subject = String(f.get('subject') ?? '').trim() || `Portfolio enquiry from ${name}`
    const message = String(f.get('message') ?? '').trim()
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ''}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      accent="together"
      intro="I'm currently open to software engineering and backend roles. Whether you have an opportunity, a project or a question, my inbox is open."
      alt
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-3">
            {channels.map(({ Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? ext : {})}
                className="group flex items-center gap-4 rounded-xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/50 hover:shadow-[0_10px_30px_-12px_rgb(37_99_235/0.5)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-sky transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-muted">{label}</span>
                  <span className="block truncate text-sm font-medium text-head">{value}</span>
                </span>
                <LuArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-card/80 p-6 backdrop-blur sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted">Name</span>
                <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted">Email</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Subject</span>
              <input name="subject" placeholder="Role, project or question" className={field} />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Message</span>
              <textarea name="message" required rows={5} placeholder="Tell me a bit about it…" className={`${field} resize-y`} />
            </label>
            <button
              type="submit"
              className="btn-glow mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8] sm:w-auto"
            >
              <LuSend className="h-4 w-4" /> Send Message
            </button>
            <p className="mt-4 text-xs text-muted" aria-live="polite">
              {sent ? (
                <span className="inline-flex items-center gap-1.5 text-sky">
                  <LuCheck className="h-3.5 w-3.5" /> Your email app should open with the message ready to send.
                </span>
              ) : (
                'Opens your email app with the message pre-filled.'
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
