import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, animate, useInView } from 'framer-motion'
import Hero from '../components/Hero'
import GatewayBento from '../components/GatewayBento'
import { stats } from '../lib/data'

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    })

    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Gateway directory — routes out to dedicated pages */}
      <GatewayBento />

      {/* Impact stats banner */}
      <section className="px-5 md:px-8 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto rounded-[32px] bg-[#071d35] px-6 md:px-10 py-8 md:py-10 shadow-[0_18px_40px_rgba(2,6,23,0.12)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="font-display font-extrabold text-white text-5xl md:text-7xl leading-none tracking-[-0.06em]">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 font-semibold text-amber-400 text-xl md:text-2xl">{s.label}</div>
                <div className="mt-1 text-slate-300 text-base md:text-lg leading-relaxed">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="px-5 md:px-8 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-400 rounded-[28px] px-8 md:px-14 py-14 md:py-20 text-center">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full translate-x-24 -translate-y-24" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-slate-900/10 rounded-full -translate-x-16 translate-y-20" />
          <div className="relative">
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-5xl leading-tight tracking-tight max-w-2xl mx-auto">
              Ready to step into your calling?
            </h2>
            <p className="text-slate-900/70 text-base md:text-lg mt-4 max-w-xl mx-auto">
              Join a fellowship in Nairobi and become part of a community on mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link
                to="/fellowships"
                className="font-display font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full text-sm transition-colors"
              >
                Find a Fellowship →
              </Link>
              <Link
                to="/give"
                className="font-display font-bold text-slate-900 bg-white/70 hover:bg-white px-7 py-3.5 rounded-full text-sm transition-colors"
              >
                Give / Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
