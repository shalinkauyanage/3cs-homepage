import type { MouseEvent } from 'react'
import { ArrowUpRight, Cpu } from 'lucide-react'
import { SERVICES, type Service } from '../data/content'
import Reveal from './Reveal'

const SPAN = { 2: 'lg:col-span-2', 3: 'md:col-span-2 lg:col-span-3' } as const

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  const onMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
  }
  return <Reveal delay={(index % 3) * .07} className={service.span ? SPAN[service.span] : ''}>
    <article onMouseMove={onMove} className={`service-card group relative h-full min-h-[235px] overflow-hidden rounded-[1.65rem] border border-white/[.09] bg-[#091322]/85 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200/30 ${service.span === 3 ? 'flex flex-col justify-between md:flex-row md:items-end md:gap-8' : ''}`}>
      <div aria-hidden className="service-card-glow absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10 max-w-xl">
        <div className="flex items-center justify-between"><span className="service-icon"><Icon className="h-5 w-5" /></span><span className="font-display text-xs tracking-[.18em] text-slate-600">0{index + 1} / 10</span></div>
        <h3 className="mt-7 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">{service.title}</h3>
        <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">{service.text}</p>
      </div>
      <div aria-hidden className="relative z-10 mt-7 flex items-center justify-between border-t border-white/[.07] pt-4 md:mt-8"><span className="text-[9px] uppercase tracking-[.24em] text-slate-600">Explore capability</span><span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all group-hover:border-cyan-200/40 group-hover:bg-cyan-300 group-hover:text-[#06111e]"><ArrowUpRight className="h-4 w-4" /></span></div>
      <div aria-hidden className="service-watermark"><Icon /></div>
    </article>
  </Reveal>
}

export default function Services() {
  return <section id="services" className="section-space relative">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div className="max-w-3xl"><Reveal><p className="eyebrow">02 / What we do</p></Reveal><Reveal delay={.08}><h2 className="h2 mt-5">Technology with <span className="text-gradient">purpose.</span></h2></Reveal></div><Reveal delay={.16}><p className="max-w-md text-base leading-7 text-slate-400">One connected team for every stage of your digital journey — from the first idea to what comes next.</p></Reveal></div>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{SERVICES.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}</div>
      <Reveal delay={.12}><div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-cyan-300/10 bg-cyan-300/[.035] px-6 py-5"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Cpu className="h-4 w-4" /></span><p className="text-sm text-slate-300">Connected thinking. Integrated digital solutions.</p></div><span className="text-[9px] uppercase tracking-[.24em] text-cyan-200/70">DESIGN / BUILD / GROW / PROTECT</span></div></Reveal>
    </div>
  </section>
}
