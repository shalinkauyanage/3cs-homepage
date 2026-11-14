import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface Props { href: string; children: ReactNode; variant?: 'primary' | 'ghost'; external?: boolean; className?: string }

export default function Button({ href, children, variant = 'primary', external, className = '' }: Props) {
  const base = 'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 font-display text-sm font-semibold transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-ink shadow-[0_0_30px_-8px_rgba(34,211,238,0.7)]'
      : 'glass text-white hover:border-cyan-300/50'
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {variant === 'primary' && (
        <span aria-hidden className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative">{children}</span>
      <ArrowRight aria-hidden className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  )
}
