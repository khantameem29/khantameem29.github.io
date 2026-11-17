import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { LuMail, LuArrowUp } from 'react-icons/lu'
import { profile } from '../data/portfolio'
import { ext } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} <span className="text-body">Tameem Khan</span>. Built with React, TypeScript & Tailwind.
        </p>
        <div className="flex items-center gap-2">
          {[
            { href: profile.github, label: 'GitHub', Icon: FaGithub, external: true },
            { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedin, external: true },
            { href: `mailto:${profile.email}`, label: 'Email', Icon: LuMail, external: false },
            { href: '#home', label: 'Back to top', Icon: LuArrowUp, external: false },
          ].map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? ext : {})}
              className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-sky/60 hover:text-sky"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
