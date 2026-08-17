import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'
import { stats, wix, PHOTOS } from '../lib/data'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString('en-US')),
    })
    return () => controls.stop()
  }, [inView, value, mv])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function ImpactStats() {
  return (
    <section id="impact" className="relative overflow-hidden">
      <img src={wix(PHOTOS.g, 1920, 900)} alt="A VOH Kenya gathering" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-slate-900/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.2em] uppercase mb-8">
              <span className="w-6 h-px bg-amber-500" />
              From Our Founder
            </div>
            <blockquote>
              <p className="font-display font-bold text-white text-2xl md:text-3xl leading-[1.3] tracking-tight mb-8">
                “We are not simply building a church programme — we are raising a generation that will transform every sphere
                of African society with the character and power of Christ.”
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center">
                  <span className="font-display font-bold text-amber-400 text-sm">TN</span>
                </div>
                <div>
                  <div className="font-display font-bold text-white text-sm">Pastor Timothy Nyamgero</div>
                  <div className="text-white/55 text-xs mt-0.5">Founder &amp; Senior Pastor, VOH Kenya</div>
                </div>
              </footer>
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 gap-px bg-white/10 rounded-[28px] overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-slate-900/60 backdrop-blur-sm px-8 py-7 hover:bg-slate-900/80 transition-colors duration-200">
                <div className="font-display font-extrabold text-white text-4xl md:text-5xl tracking-tight mb-1">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="font-semibold text-amber-400 text-sm mb-0.5">{s.label}</div>
                <div className="text-white/45 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
