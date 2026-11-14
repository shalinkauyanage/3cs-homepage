import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { WORK } from '../data/content'
import Reveal from './Reveal'

type ArtProps = { index: number }

const VISUALS = [
  { label: 'Built environments', code: '01 / MATERIALS', theme: 'from-cyan-500/25 via-sky-500/10 to-slate-950' },
  { label: 'Health & consumer', code: '02 / WELLBEING', theme: 'from-violet-500/25 via-fuchsia-500/10 to-slate-950' },
  { label: 'Aviation safety', code: '03 / ENGINEERING', theme: 'from-teal-400/25 via-cyan-500/10 to-slate-950' },
  { label: 'Art & culture', code: '04 / CULTURE', theme: 'from-rose-500/25 via-orange-400/10 to-slate-950' },
  { label: 'Industry & science', code: '05 / INNOVATION', theme: 'from-blue-500/30 via-indigo-500/10 to-slate-950' },
  { label: 'Textiles & apparel', code: '06 / TEXTILE', theme: 'from-amber-500/25 via-orange-500/10 to-slate-950' },
  { label: 'Financial technology', code: '07 / FINANCE', theme: 'from-cyan-400/25 via-blue-500/10 to-slate-950' },
  { label: 'Business services', code: '08 / CONNECT', theme: 'from-emerald-400/25 via-teal-500/10 to-slate-950' },
  { label: 'Corporate enterprise', code: '09 / ENTERPRISE', theme: 'from-indigo-400/25 via-violet-500/10 to-slate-950' },
  { label: 'Art & marketplaces', code: '10 / CREATIVE', theme: 'from-fuchsia-400/25 via-pink-500/10 to-slate-950' },
]

function Artwork({ index }: ArtProps) {
  const id = `portfolio-${index}`
  return (
    <svg aria-hidden="true" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.045]">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={['#0e7490','#6d28d9','#0f766e','#9f1239','#1d4ed8','#92400e','#0369a1','#047857','#4338ca','#a21caf'][index]} stopOpacity=".72" />
          <stop offset="100%" stopColor="#050b16" />
        </linearGradient>
        <linearGradient id={`${id}-line`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a5f3fc" stopOpacity=".9" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity=".35" />
        </linearGradient>
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor="#67e8f9" stopOpacity=".24" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-grid`} width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M36 0H0V36" fill="none" stroke="#dbeafe" strokeOpacity=".12" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="360" fill={`url(#${id}-bg)`} />
      <rect width="600" height="360" fill={`url(#${id}-grid)`} />
      <ellipse cx="390" cy="145" rx="235" ry="190" fill={`url(#${id}-glow)`} />
      <g fill="none" stroke={`url(#${id}-line)`} strokeLinecap="round" strokeLinejoin="round">
        {index === 0 && <g>
          <path d="M55 278V170l88-48 88 48v108M143 122V72l68-36 67 36v242M278 314V148l92-52 92 52v166" strokeWidth="3" />
          <path d="M88 190h110M88 224h110M88 258h110M310 178h120M310 216h120M310 254h120" strokeOpacity=".55" strokeWidth="2" />
          <path d="M143 72V36m68 36V36m67 112V96m92 52V96" strokeWidth="2" strokeDasharray="5 8" />
          <path d="M48 314H510" strokeOpacity=".7" strokeWidth="2" />
        </g>}
        {index === 1 && <g>
          <circle cx="340" cy="174" r="112" strokeWidth="2" strokeDasharray="4 9" />
          <circle cx="340" cy="174" r="76" strokeWidth="2" />
          <path d="M340 78v192M244 174h192M272 106l136 136m0-136L272 242" strokeOpacity=".5" />
          <path d="M90 262c35-82 75-123 119-123 42 0 58 36 91 36" strokeWidth="7" />
          <path d="M90 280c45-45 79-66 112-66 27 0 47 16 69 16" strokeWidth="2" strokeDasharray="6 8" />
          <circle cx="340" cy="174" r="19" fill="#a5f3fc" fillOpacity=".8" stroke="none" />
        </g>}
        {index === 2 && <g>
          <path d="M78 210l196-50 115-92 35 8-68 111 151 60-7 25-171-34-83 92-27-6 39-96-169 12z" strokeWidth="3" />
          <path d="M276 160l52 26m-91 18 55 21m105-149 29-34m-12 66 51-10" strokeWidth="2" />
          <circle cx="275" cy="160" r="112" strokeOpacity=".28" strokeDasharray="5 8" />
          <path d="M55 300H530" strokeOpacity=".55" />
        </g>}
        {index === 3 && <g>
          <rect x="92" y="66" width="128" height="172" rx="4" strokeWidth="3" />
          <rect x="245" y="94" width="116" height="144" rx="4" strokeWidth="3" />
          <rect x="386" y="48" width="122" height="190" rx="4" strokeWidth="3" />
          <path d="M111 205c28-75 65-83 91-28m64 29c22-55 44-71 69-41m72 36c23-85 58-91 83-38" strokeWidth="5" />
          <path d="M74 264H526M74 282H526" strokeOpacity=".45" />
          <circle cx="156" cy="116" r="12" fill="#fda4af" stroke="none" />
          <circle cx="304" cy="133" r="10" fill="#fcd34d" stroke="none" />
          <circle cx="447" cy="103" r="13" fill="#a5f3fc" stroke="none" />
        </g>}
        {index === 4 && <g>
          <path d="M80 278V172h72v106m25 0V96h86v182m29 0V139h74v139m27 0V66h82v212" strokeWidth="3" />
          <path d="M95 194h42m-42 28h42m-42 28h42m57-122h55m-55 30h55m-55 30h55m-55 30h55m-55 30h55m53-94h42m-42 30h42m-42 30h42m-42 30h42m-42 30h42m-23-164h52m-52 30h52m-52 30h52m-52 30h52" strokeOpacity=".55" strokeWidth="2" />
          <path d="M62 302H535" strokeWidth="2" />
        </g>}
        {index === 5 && <g>
          {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${95 + i * 42} 42 C${40 + i * 42} 120 ${170 + i * 30} 205 ${100 + i * 42} 318`} strokeWidth="3" strokeOpacity={i % 2 ? '.45' : '.8'} />)}
          {Array.from({ length: 7 }, (_, i) => <path key={`h${i}`} d={`M65 ${80 + i * 34} C190 ${30 + i * 34} 350 ${130 + i * 24} 535 ${65 + i * 34}`} strokeWidth="1.5" strokeOpacity=".35" />)}
          <path d="M300 40l48 55-48 55-48-55zM300 210l48 55-48 55-48-55z" strokeWidth="2" />
        </g>}
        {index === 6 && <g>
          <rect x="94" y="82" width="410" height="202" rx="18" strokeWidth="3" />
          <path d="M94 134h410M94 182h410M94 230h410M176 82v202m82-202v202m82-202v202m82-202v202" strokeOpacity=".35" />
          <path d="M128 246l75-58 58 24 75-91 58 37 72-67" strokeWidth="5" />
          <circle cx="336" cy="121" r="9" fill="#a5f3fc" stroke="none" />
          <circle cx="466" cy="91" r="9" fill="#c4b5fd" stroke="none" />
        </g>}
        {index === 7 && <g>
          <circle cx="300" cy="178" r="44" strokeWidth="3" />
          <circle cx="300" cy="178" r="12" fill="#a5f3fc" stroke="none" />
          <path d="M300 134L170 74m130 60 130-60M256 194l-130 85m174-85 130 85M300 222v83" strokeWidth="3" />
          <circle cx="170" cy="74" r="24" strokeWidth="3" /><circle cx="430" cy="74" r="24" strokeWidth="3" />
          <circle cx="126" cy="279" r="24" strokeWidth="3" /><circle cx="474" cy="279" r="24" strokeWidth="3" /><circle cx="300" cy="305" r="24" strokeWidth="3" />
          <path d="M170 74l260 0M126 279l348 0" strokeOpacity=".2" strokeDasharray="5 8" />
        </g>}
        {index === 8 && <g>
          <path d="M100 282V132l100-62 100 62v150M300 282V104l100-58 100 58v178" strokeWidth="3" />
          <path d="M132 160h136m-136 34h136m-136 34h136m-136 34h136m64-132h136m-136 34h136m-136 34h136m-136 34h136" strokeOpacity=".5" strokeWidth="2" />
          <path d="M75 302H530" strokeWidth="2" />
          <path d="M200 70V40m200 6V22" strokeDasharray="4 7" />
        </g>}
        {index === 9 && <g>
          <path d="M110 258c52-115 108-160 169-136 44 17 65 90 113 76 39-12 51-61 91-91" strokeWidth="8" />
          <path d="M105 284c70-50 122-70 164-60 48 11 67 52 113 43 42-8 66-45 105-85" strokeWidth="2" strokeDasharray="5 8" />
          <circle cx="279" cy="122" r="58" strokeWidth="2" />
          <circle cx="279" cy="122" r="30" strokeOpacity=".45" />
          <path d="M279 64v116m-58-58h116" strokeOpacity=".45" />
          <path d="M74 306H526" strokeOpacity=".6" />
        </g>}
      </g>
      <g fill="#e0f2fe" opacity=".8">
        <circle cx="72" cy="54" r="2" /><circle cx="520" cy="72" r="2" /><circle cx="480" cy="310" r="2" />
      </g>
      <path d="M0 0H600V360H0Z" fill="none" stroke="#e0f2fe" strokeOpacity=".12" />
    </svg>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative isolate overflow-hidden py-28 sm:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[34rem] w-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.045] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><p className="eyebrow">Selected clients</p></Reveal>
            <Reveal delay={0.08}><h2 className="h2 mt-4 max-w-2xl">Trusted by blue chips, brands and institutions.</h2></Reveal>
            <Reveal delay={0.14}><p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">A selection of organisations featured in the 3CS client portfolio. Each visual is original concept artwork, created for this presentation.</p></Reveal>
          </div>
          <Reveal delay={0.16}>
            <a href="https://www.3cs.lk/web-design-portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.06] px-5 py-3 font-display text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              Explore full portfolio <ArrowUpRight aria-hidden className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((w, i) => {
            const visual = VISUALS[i] ?? VISUALS[0]
            return (
              <li key={w.name}>
                <Reveal delay={(i % 3) * 0.07}>
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${w.name} website (opens in a new tab)`}
                    className="group relative block aspect-[5/3] overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950 shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_24px_65px_rgba(8,145,178,0.14)]"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${visual.theme}`} />
                    <Artwork index={i} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030813] via-[#030813]/15 to-transparent opacity-90" />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                      <span className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-1.5 font-mono text-[9px] font-semibold tracking-[0.2em] text-cyan-100/80 backdrop-blur-md">{visual.code}</span>
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/45">{String(i + 1).padStart(2, '0')} / 10</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                      <div className="min-w-0">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">{visual.label}</p>
                        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">{w.name}</h3>
                      </div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.08] text-white backdrop-blur-md transition-all duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-300 group-hover:text-slate-950 group-hover:shadow-[0_0_24px_rgba(103,232,249,0.35)]">
                        <ExternalLink aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/[0.04] transition-all duration-300 group-hover:ring-cyan-200/20" />
                  </a>
                </Reveal>
              </li>
            )
          })}
        </ul>
        <p className="mt-6 text-xs leading-6 text-slate-500">Company names and links are included as portfolio references. The artwork is illustrative and does not represent screenshots, commissioned work samples or endorsements.</p>
      </div>
    </section>
  )
}
