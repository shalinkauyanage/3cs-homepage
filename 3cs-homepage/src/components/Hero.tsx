import { Component, lazy, Suspense, useRef, useState, type ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import Button from './Button'

const HeroScene = lazy(() => import('./HeroScene'))

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? null : this.props.children }
}

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion() ?? false
  const [mobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 72])
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -55])

  return (
    <section ref={ref} id="top" className="hero-stage relative isolate flex min-h-screen items-center overflow-hidden pb-12 pt-28">
      <div aria-hidden className="hero-grid absolute inset-0" />
      <div aria-hidden className="hero-vignette absolute inset-0" />
      <div aria-hidden className="hero-glow hero-glow-cyan" />
      <div aria-hidden className="hero-glow hero-glow-violet" />
      <div aria-hidden className="hero-scan absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-2 px-5 sm:px-8 lg:grid-cols-[1.04fr_.96fr]">
        <motion.div style={{ y: textY }} initial={reduce ? false : 'hidden'} animate="show" className="relative z-10 py-12">
          <motion.div variants={rise} className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.2em] text-cyan-100">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> Digital experiences, engineered since 1997
          </motion.div>
          <motion.p variants={rise} className="mb-4 font-display text-xs font-semibold uppercase tracking-[.32em] text-slate-500">Strategy / Design / Technology</motion.p>
          <motion.h1 variants={rise} className="max-w-[760px] font-display text-[clamp(3.25rem,7.2vw,6.7rem)] font-bold leading-[.91] tracking-[-.065em] text-white">
            The future is <span className="hero-outline">digital.</span><br />
            <span className="text-gradient">We build it.</span>
          </motion.h1>
          <motion.p variants={rise} className="mt-8 max-w-xl text-base leading-8 text-slate-300/75 sm:text-lg">
            From award-winning websites to secure platforms and intelligent AI solutions, 3CS turns ambitious ideas into digital experiences built to move businesses forward.
          </motion.p>
          <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact">Start a project</Button>
            <a href="#work" className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-white/80 transition hover:text-cyan-200">
              Explore our work <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </motion.div>
          <motion.div variants={rise} className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6">
            {[['1997', 'Established'], ['10 YEARS', 'Bestweb recognition'], ['80+', 'Travel websites']].map(([value, label], i) => (
              <div key={label} className={`pr-3 ${i ? 'border-l border-white/10 pl-4 sm:pl-6' : ''}`}>
                <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">{value}</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div aria-hidden style={{ y: sceneY }} initial={reduce ? false : { opacity: 0, scale: .88, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.25, delay: .2, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto h-[390px] w-full max-w-[620px] sm:h-[540px] lg:h-[700px]">
          <div className="absolute inset-[12%] rounded-full bg-cyan-400/10 blur-[90px]" />
          <div className="absolute inset-[20%] rounded-full border border-cyan-200/10 shadow-[0_0_100px_rgba(34,211,238,.09)]" />
          <SceneBoundary><Suspense fallback={<div className="absolute inset-0 animate-pulse rounded-full bg-cyan-300/5 blur-3xl" />}><HeroScene reduced={reduce} mobile={mobile} /></Suspense></SceneBoundary>
          <div className="hero-float-label hero-label-top"><span className="hero-label-dot" /> DIGITAL SYSTEMS <span className="text-cyan-200">/ 01</span></div>
          <div className="hero-float-label hero-label-bottom">SECURE BY DESIGN <span className="text-violet-200">/ 02</span></div>
          <div className="absolute bottom-4 right-2 hidden items-center gap-2 text-[10px] uppercase tracking-[.22em] text-slate-500 sm:flex"><span className="h-px w-8 bg-cyan-300/50" /> Interactive digital core</div>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to about section" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[.25em] text-slate-500 transition hover:text-cyan-200 lg:flex"><ArrowDown className="h-3.5 w-3.5 animate-bounce" /> Scroll to explore</a>
    </section>
  )
}
