import { motion } from 'framer-motion'
import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import { programs, wix, PHOTOS } from '../lib/data'

export default function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Our Programs"
        title="Six platforms, one community."
        intro="Each program is designed to meet you exactly where you are — in your faith, relationships, calling, and wellbeing. Explore them all and find your space."
        image="https://media.istockphoto.com/id/512421423/photo/group-of-people-holding-cross-and-praying-in-back-lit.jpg?s=612x612&w=0&k=20&c=L8L0zuhWP7_xGGGShvtvAbIVNorin1TJoeDVq3Rl1lU="
        crumbs={[{ label: 'Programs' }]}
      />

      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/programs/${prog.id}`}
                className="group block rounded-[28px] overflow-hidden bg-slate-900 h-full"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className={`w-full h-full ${prog.id === 'move' ? 'object-contain bg-white' : 'object-cover transition-transform duration-700 group-hover:scale-105'}`}
                  />
                  {prog.id !== 'move' && <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />}
                  <span className={`absolute top-4 left-4 ${prog.tagBg} px-3 py-1 rounded-full text-xs font-semibold`}>{prog.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">{prog.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{prog.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 group-hover:gap-3 transition-all">
                    Learn more <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
