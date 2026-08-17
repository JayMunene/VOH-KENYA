import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { wix, PHOTOS } from '../lib/data'

type Gate = {
  to: string
  eyebrow: string
  title: string
  blurb: string
  image: string
  span: string
  accent: string
}

const gates: Gate[] = [
  {
    to: '/about',
    eyebrow: 'Who we are',
    title: 'About Us',
    blurb: 'Our story, vision, and the mandate that drives everything we do.',
    image: 'https://heartworkbyleslie.com/wp-content/uploads/2025/04/a-photograph-of-a-flat-lay-composition-s_tIVD38QwTJ-dq7FeXIfuig_YEExzFaFRny0N1hSuB-FQw-574x1024.png',
    span: 'sm:row-span-2',
    accent: 'bg-amber-500 text-slate-900',
  },
  {
    to: '/programs',
    eyebrow: 'Six platforms',
    title: 'Programs',
    blurb: 'Discipleship, youth, music, and more — find your space.',
    image: wix(PHOTOS.f, 900, 520),
    span: '',
    accent: 'bg-cyan-500 text-slate-900',
  },
  {
    to: '/missions',
    eyebrow: 'Reach & equip',
    title: 'Missions & Outreach',
    blurb: 'Partnering with communities across Kenya and Africa.',
    image: 'https://static.wixstatic.com/media/d185ab_f48534e163ef4ee3a9ec8de860741b9b~mv2.jpg/v1/fill/w_640,h_448,al_c,lg_1,q_80,enc_avif,quality_auto/d185ab_f48534e163ef4ee3a9ec8de860741b9b~mv2.jpg',
    span: '',
    accent: 'bg-purple-500 text-white',
  },
  {
    to: '/fellowships',
    eyebrow: 'Gather weekly',
    title: 'Fellowships',
    blurb: 'Find a community near you across Nairobi and beyond.',
    image: wix(PHOTOS.c, 900, 520),
    span: '',
    accent: 'bg-rose-500 text-white',
  },
  {
    to: '/membership',
    eyebrow: 'Belong',
    title: 'Membership',
    blurb: 'Track your journey and join the community.',
    image: wix(PHOTOS.h, 900, 520),
    span: '',
    accent: 'bg-teal-500 text-white',
  },
  {
    to: '/partners',
    eyebrow: 'Better together',
    title: 'Partners',
    blurb: 'The organisations we walk alongside in the mission.',
    image: wix(PHOTOS.i, 900, 520),
    span: '',
    accent: 'bg-purple-500 text-white',
  },
  {
    to: '/altar',
    eyebrow: 'Testimony & prayer',
    title: 'The Digital Altar',
    blurb: 'See what God is doing — and share a prayer request.',
    image: wix(PHOTOS.g, 900, 520),
    span: '',
    accent: 'bg-amber-500 text-slate-900',
  },
  {
    to: '/give',
    eyebrow: 'Partner',
    title: 'Give & Support',
    blurb: 'Fuel discipleship, missions, and youth empowerment.',
    image: wix(PHOTOS.j, 1600, 520),
    span: 'sm:col-span-2',
    accent: 'bg-cyan-500 text-slate-900',
  },
]

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function GatewayBento() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Explore VOH Kenya
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight max-w-xl">
              Where would you like to begin?
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-xs leading-relaxed">
            Pick a path below — each opens a dedicated space with everything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
          {gates.map((g, i) => (
            <motion.div
              key={g.to}
              custom={i}
              variants={rise}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className={`group relative overflow-hidden rounded-[28px] bg-slate-800 shadow-lg shadow-slate-900/5 ${g.span}`}
            >
              <motion.img
                src={g.image}
                alt={g.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 4, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-slate-900/10 group-hover:from-slate-900 transition-all duration-300" />

              <span className={`absolute top-5 left-5 ${g.accent} px-3 py-1 rounded-full text-[11px] font-bold tracking-wide z-10`}>
                {g.eyebrow}
              </span>

              <Link to={g.to} aria-label={g.title} className="absolute inset-0 z-10" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display font-bold text-white text-xl md:text-2xl leading-tight mb-2">{g.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4 max-w-md">{g.blurb}</p>
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
