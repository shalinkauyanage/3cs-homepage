import { ArrowUpRight, Orbit } from 'lucide-react'
import { CONTACT } from '../data/content'
import Button from './Button'
import Reveal from './Reveal'

export default function CTA() {
  return <section aria-labelledby="cta-title" className="px-5 py-16 sm:px-8">
    <Reveal><div className="cta-future relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-200/20 px-6 py-20 text-center sm:px-16 sm:py-24">
      <div aria-hidden className="absolute inset-0 cta-grid" /><div aria-hidden className="cta-aura absolute left-1/2 top-0 h-[28rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="relative mx-auto max-w-4xl"><div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-200/30 bg-cyan-300/10 text-cyan-100 shadow-[0_0_45px_rgba(34,211,238,.14)]"><Orbit className="h-7 w-7" /></div><p className="eyebrow">The next move starts here</p><h2 id="cta-title" className="h2 mx-auto mt-5 max-w-4xl">Have an idea? <span className="text-gradient">Let's make it real.</span></h2><p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300/70">Tell us what you're imagining. We'll bring the experience, creativity and technology to help move it forward.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><Button href="#contact">Talk to our team</Button><a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-200/40 hover:bg-white/[.08]">WhatsApp us <ArrowUpRight className="h-4 w-4" /></a></div></div>
    </div></Reveal>
  </section>
}
