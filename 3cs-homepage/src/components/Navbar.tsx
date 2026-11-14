import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { NAV } from '../data/content'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-white/[.08] bg-[#050b14]/90 shadow-[0_8px_40px_rgba(0,0,0,.2)] backdrop-blur-2xl' : 'border-b border-transparent bg-gradient-to-b from-[#050b14]/70 to-transparent'}`}>
    <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8"><Logo />
      <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">{NAV.map((link) => <a key={link.href} href={link.href} className="nav-link text-[11px] font-semibold uppercase tracking-[.16em] text-slate-400 transition hover:text-cyan-200">{link.label}</a>)}<a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/[.08] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/15">Let's talk <ArrowUpRight className="h-3.5 w-3.5" /></a></nav>
      <button type="button" className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.04] text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}><span className="relative block h-4 w-5"><motion.span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-current" animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }} /><motion.span className="absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current" animate={{ opacity: open ? 0 : 1 }} /><motion.span className="absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current" animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }} /></span></button>
    </div>
    <AnimatePresence>{open && <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'calc(100dvh - 76px)' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: .3 }} className="overflow-y-auto border-t border-white/10 bg-[#050b14]/98 backdrop-blur-2xl md:hidden"><ul className="flex flex-col px-6 pt-8">{[...NAV, { label: 'Get started', href: '#contact' }].map((link, index) => <motion.li key={`${link.label}-${link.href}`} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .05 }}><a href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/[.08] py-5 font-display text-2xl font-semibold text-white">{link.label}<ArrowUpRight className="h-5 w-5 text-cyan-200" /></a></motion.li>)}</ul><p className="px-6 py-8 text-[10px] uppercase tracking-[.2em] text-slate-600">3CS Solutions · Digital since 1997</p></motion.nav>}</AnimatePresence>
  </header>
}
