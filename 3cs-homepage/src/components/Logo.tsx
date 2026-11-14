export default function Logo() {
  return (
    <a href="#top" aria-label="3CS Solutions – home" className="flex items-center gap-2.5">
      <svg aria-hidden viewBox="0 0 64 64" className="h-8 w-8">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path d="M32 6 54 19v26L32 58 10 45V19z" fill="none" stroke="url(#lg)" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="6" fill="url(#lg)" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight text-white">
        3CS<span className="text-cyan-300">.</span>
        <span className="ml-1.5 hidden text-xs font-medium uppercase tracking-[0.2em] text-slate-400 sm:inline">Solutions</span>
      </span>
    </a>
  )
}
