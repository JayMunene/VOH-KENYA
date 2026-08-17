import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const imgOpacity = useTransform(scrollY, [0, 320], [1, 0])

  return (
    <section ref={sectionRef} id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      <motion.div
        style={{ opacity: imgOpacity }}
        className="absolute inset-0"
      >
        <img
          src="/images/360_F_878961793_KulAKtdjeKAfP1Tm8zcIEE5Zy7RVi66Y.jpg"
          alt="Young people of VOH Kenya gathered in worship"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity saturate-50"
        />
        {/* Navy wash so the photo blends into the dark theme */}
        <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,23,0.85)_100%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/20 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center"
      >
        <motion.div
          variants={rise}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-medium text-white/85 tracking-wide uppercase">Garden Estate, Nairobi · Kenya</span>
        </motion.div>

        <motion.h1
          variants={rise}
          className="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
        >
          Raising a Generation of
          <br />
          <span className="text-amber-400">Vessels of Honor.</span>
        </motion.h1>

        <motion.p variants={rise} className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Influencing leadership in Africa and the world by equipping teens, young adults, and professionals to become
          role-model Christians and Christ-centred leaders.
        </motion.p>

        <motion.div variants={rise} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            to="/programs"
            strength={0.5}
            className="font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 px-8 py-3.5 rounded-full text-sm transition-colors duration-200 shadow-lg shadow-amber-500/30"
          >
            Explore Our Programs →
          </MagneticButton>
          <MagneticButton
            to="/about"
            strength={0.5}
            className="flex items-center gap-2.5 text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            See Our Story
          </MagneticButton>
        </motion.div>
      </motion.div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-white/90 transition-colors"
        aria-label="Scroll to content"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}
