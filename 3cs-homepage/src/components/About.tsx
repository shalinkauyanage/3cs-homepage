import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Orbit, ShieldCheck, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const CHAPTERS = [
  { n: '01', tag: 'THE FOUNDATION', title: 'Built on experience.', text: "Founded in 1997, 3CS is one of Sri Lanka's experienced digital solutions providers, shaping the web for businesses across Sri Lanka and beyond.", icon: Orbit },
  { n: '02', tag: 'THE SPECIALISM', title: 'Made for the complex.', text: 'With deep expertise in web design, SEO, travel and leisure, 3CS has delivered more than 80 hotel and travel websites for clients across several countries.', icon: ShieldCheck },
  { n: '03', tag: 'THE NEXT CHAPTER', title: 'Always moving forward.', text: 'Bespoke websites, e-commerce, security and digital marketing are now joined by AI solutions and autonomous agents.', icon: Sparkles },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 70, reduce ? 0 : -70])
  return <section id="about" ref={ref} className="section-space relative isolate overflow-hidden">
    <motion.div aria-hidden style={{ y: drift }} className="pointer-events-none absolute -left-44 top-20 h-[32rem] w-[32rem] rounded-full bg-blue-600/10 blur-[120px]" />
    <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.88fr_1.12fr]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <Reveal><p className="eyebrow">01 / About 3CS</p></Reveal>
        <Reveal delay={.08}><h2 className="h2 mt-5 max-w-xl">Experience that <span className="text-gradient">keeps evolving.</span></h2></Reveal>
        <Reveal delay={.16}><p className="mt-7 max-w-md text-lg leading-8 text-slate-400">A multidisciplinary team of consultants, designers, developers, writers and engineers, bringing ideas and technology together to create digital experiences that last.</p></Reveal>
        <Reveal delay={.24}><a href="#services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:gap-3">Discover what we do <ArrowUpRight className="h-4 w-4" /></a></Reveal>
        <div className="mt-14 hidden border-t border-white/10 pt-6 sm:block"><p className="font-display text-7xl font-bold tracking-[-.07em] text-white/10">1997<span className="text-cyan-300/40">—</span></p><p className="mt-1 text-[10px] uppercase tracking-[.28em] text-slate-500">A legacy in digital</p></div>
      </div>
      <div className="relative space-y-5">
        <div aria-hidden className="absolute bottom-8 left-[25px] top-8 w-px bg-gradient-to-b from-cyan-300/60 via-violet-400/30 to-transparent" />
        {CHAPTERS.map((chapter, i) => {
          const Icon = chapter.icon
          return <Reveal key={chapter.n} delay={i * .1}>
            <article className="group relative ml-0 grid gap-5 rounded-[1.7rem] border border-white/[.09] bg-[#091322]/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-[#0c1a2c] sm:grid-cols-[52px_1fr] sm:gap-7 sm:p-8">
              <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/[.07] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,.08)]"><Icon className="h-5 w-5" /></div>
              <div><div className="flex flex-wrap items-center gap-3"><span className="font-display text-xs font-bold tracking-[.2em] text-cyan-300">{chapter.n}</span><span className="text-[9px] font-semibold tracking-[.24em] text-slate-600">{chapter.tag}</span></div><h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{chapter.title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">{chapter.text}</p></div>
              <span aria-hidden className="absolute right-7 top-7 font-display text-7xl font-bold text-white/[.025] transition-colors group-hover:text-cyan-200/[.06]">{chapter.n}</span>
            </article>
          </Reveal>
        })}
      </div>
    </div>
  </section>
}
