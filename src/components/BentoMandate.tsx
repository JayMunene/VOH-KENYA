import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { pillars } from '../lib/data'

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function BentoMandate() {
  return (
    <section id="mandate" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Our Mandate
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-2xl">
              Four pillars. One transformational mission.
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-xs leading-relaxed">
            Everything we do flows from a single calling — to disciple young people into Christ-centred leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[280px]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              custom={i}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`group relative overflow-hidden rounded-[28px] bg-slate-800 cursor-pointer shadow-lg shadow-slate-900/5 ${p.gridClass}`}
            >
              {/* image "loop": continuous slow ken-burns drift on hover simulates a video loop */}
              <motion.img
                src={p.image}
                alt={p.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 6, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-slate-900/10 group-hover:from-slate-900 transition-all duration-300" />

              <span className={`absolute top-5 left-5 ${p.accent} px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide z-10`}>
                {p.num}
              </span>

              <Link to="/programs" aria-label={`Learn more about ${p.title}`} className="absolute inset-0 z-10" />

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-tight mb-2">{p.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed line-clamp-3 mb-4 max-w-md">{p.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:gap-3 transition-all duration-200">
                  Learn more <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
