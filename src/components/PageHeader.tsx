import { motion } from 'framer-motion'
import { Link } from 'react-router'
import type { ReactNode } from 'react'

type Crumb = { label: string; to?: string }

type Props = {
  eyebrow: string
  title: string
  intro?: string
  image: string
  crumbs?: Crumb[]
  children?: ReactNode
  compact?: boolean
  showBannerAccent?: boolean
}

export default function PageHeader({ eyebrow, title, intro, image, crumbs, children, compact = false, showBannerAccent = true }: Props) {
  return (
    <section className={`relative overflow-hidden bg-slate-900 ${compact ? 'pt-24 pb-12 md:pt-28 md:pb-16' : 'pt-32 pb-16 md:pt-40 md:pb-24'}`}>
      {showBannerAccent && <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-300 to-transparent" />}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/75 to-slate-900/95" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[240px] bg-amber-500/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {crumbs && (
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link to="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-white/25">/</span>
                {c.to ? (
                  <Link to={c.to} className="hover:text-amber-400 transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-amber-400">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-amber-500" />
            {eyebrow}
          </div>
          <h1 className="font-display font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight max-w-3xl">
            {title}
          </h1>
          {intro && <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mt-5">{intro}</p>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
