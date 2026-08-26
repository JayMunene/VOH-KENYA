import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { stats } from '../lib/data'

const cards = [
  {
    to: '/about',
    eyebrow: 'Who we are',
    eyebrowClass: 'bg-amber-500 text-slate-900',
    title: 'About Us',
    blurb: 'Our story, vision, and the mandate that drives everything we do.',
    image: '/images/about-us.jpg',
    large: true,
  },
  {
    to: '/programs',
    eyebrow: 'Six platforms',
    eyebrowClass: 'bg-cyan-500 text-slate-900',
    title: 'Programs',
    blurb: 'Discipleship, youth, music, and more — find your space.',
    image: '/images/story-team.png',
    large: false,
  },
  {
    to: '/missions',
    eyebrow: 'Reach & equip',
    eyebrowClass: 'bg-purple-500 text-white',
    title: 'Missions & Outreach',
    blurb: 'Partnering with communities across Kenya and Africa.',
    image: '/images/story-fellowship.jpg',
    large: false,
  },
]

export default function Explore() {
  return (
    <>
      <section className="min-h-screen bg-[#f5f1eb] px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.32em] uppercase mb-6 md:mb-8">
              <span className="w-5 h-px bg-amber-500" />
              Explore VOH Kenya
            </div>

            <h1 className="font-display font-extrabold text-slate-800 text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em] max-w-5xl">
              Where would you like to begin?
            </h1>

            <p className="mt-6 text-slate-600 text-xl md:text-2xl leading-relaxed max-w-3xl">
              Pick a path below — each opens a dedicated space with everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={card.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[32px] bg-slate-800 shadow-[0_18px_40px_rgba(15,23,42,0.12)] ${card.large ? 'min-h-[560px]' : 'min-h-[420px]'}`}
              >
                <img src={card.image} alt={card.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/35 to-slate-900/10" />

                <span className={`absolute left-5 top-5 z-10 inline-flex items-center rounded-full px-4 py-2 text-base font-semibold shadow-sm ${card.eyebrowClass}`}>
                  {card.eyebrow}
                </span>

                <Link to={card.to} className="absolute inset-0 z-10" aria-label={card.title} />

                <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
                  <h2 className="font-display font-extrabold text-white text-3xl md:text-5xl leading-[0.95] tracking-tight">
                    {card.title}
                  </h2>

                  <p className="mt-4 max-w-lg text-base md:text-2xl leading-relaxed text-white/80">
                    {card.blurb}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-base md:text-2xl font-semibold text-amber-400">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-24">
        <div className="max-w-7xl mx-auto rounded-[32px] bg-[#071d35] px-6 md:px-10 py-10 md:py-12 shadow-[0_18px_40px_rgba(2,6,23,0.12)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="font-display font-extrabold text-white text-5xl md:text-7xl leading-none tracking-[-0.06em]">
                  {stat.value}
                  {stat.suffix}
                </div>

                <div className="mt-4 font-semibold text-amber-400 text-[clamp(1.5rem,2vw,2.5rem)] leading-tight">
                  {stat.label}
                </div>

                <div className="mt-2 text-slate-300 text-[clamp(1.05rem,1.3vw,1.7rem)] leading-snug whitespace-pre-line">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
