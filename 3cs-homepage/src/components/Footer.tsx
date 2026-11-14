import { ArrowUpRight, ArrowUp } from 'lucide-react'
import { CONTACT, NAV, SITE_LINKS } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return <footer className="relative border-t border-white/[.08] bg-[#040912] pb-8 pt-14">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div><Logo /><p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">Web design, security, AI and digital marketing from Sri Lanka since 1997.</p><a href={`mailto:${CONTACT.email}`} className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-cyan-200 hover:text-white">Start a conversation <ArrowUpRight className="h-3.5 w-3.5" /></a></div>
      <nav aria-label="Footer sections"><h2 className="font-display text-xs font-semibold uppercase tracking-[.18em] text-white">Explore</h2><ul className="mt-5 space-y-3 text-sm">{NAV.map((link) => <li key={link.href}><a className="text-slate-500 transition hover:text-cyan-200" href={link.href}>{link.label}</a></li>)}</ul></nav>
      <nav aria-label="3CS website"><h2 className="font-display text-xs font-semibold uppercase tracking-[.18em] text-white">3CS website</h2><ul className="mt-5 space-y-3 text-sm">{SITE_LINKS.map((link) => <li key={link.href}><a className="text-slate-500 transition hover:text-cyan-200" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul></nav>
      <div><h2 className="font-display text-xs font-semibold uppercase tracking-[.18em] text-white">Contact</h2><ul className="mt-5 space-y-3 text-sm text-slate-500"><li><a className="transition hover:text-cyan-200" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li><li><a className="transition hover:text-cyan-200" href={CONTACT.phoneHref}>{CONTACT.phone}</a></li><li className="leading-6">{CONTACT.address[0]}, {CONTACT.address[1]}</li></ul></div>
    </div>
    <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/[.07] px-5 pt-6 text-[10px] text-slate-600 sm:flex-row sm:px-8"><p>© {new Date().getFullYear()} 3CS Solutions. Homepage redesign concept for a UI/UX assessment.</p><a href="#top" className="inline-flex items-center gap-2 uppercase tracking-[.18em] transition hover:text-cyan-200">Back to top <ArrowUp className="h-3 w-3" /></a></div>
  </footer>
}
