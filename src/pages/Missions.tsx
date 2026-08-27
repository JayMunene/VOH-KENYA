import { Link } from 'react-router'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { wix, PHOTOS } from '../lib/data'

const focus = [
  { t: 'Campus outreach', d: 'Reaching students where they are — planting fellowships and discipling young leaders across universities and colleges.' },
  { t: 'Community missions', d: 'Serving neighbourhoods with practical love: mentorship, relief, and the hope of the gospel.' },
  { t: 'Church partnerships', d: 'Working hand in hand with local churches and institutions to equip youth for lasting impact.' },
  { t: 'Regional expansion', d: 'Extending the mission beyond Nairobi into towns and cities across Kenya and Africa.' },
]

export default function Missions() {
  return (
    <>
      <PageHeader
        eyebrow="Missions & Outreach"
        title="Taking the mission beyond our walls."
        intro="We partner with churches, institutions, and like-minded organisations to reach and equip youth across Kenya and Africa — carrying the character and power of Christ into every community."
        image={wix(PHOTOS.b, 1920, 900)}
        crumbs={[{ label: 'Missions & Outreach' }]}
      />

      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Our heart
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              The mission field is closer than you think.
            </h2>
            <div className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
              <p>
                Mission is not only for far-off nations — it begins on the campus next door, in the workplace, and in our own
                neighbourhoods. VOH sends teams to serve, share, and disciple wherever God opens a door.
              </p>
              <p>
                Every outreach is an invitation for young people to discover their part in God&apos;s story and to lead others
                into it.
              </p>
            </div>
            <blockquote className="mt-8 rounded-3xl bg-slate-900 p-6 md:p-7">
              <p className="font-display font-bold text-white text-lg md:text-xl leading-[1.4]">
                “Go therefore and make disciples of all nations.” — Matthew 28:19
              </p>
            </blockquote>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            src={wix(PHOTOS.d, 800, 900)}
            alt="VOH Kenya missions and outreach"
            className="rounded-[28px] object-cover w-full h-full max-h-[520px]"
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-extrabold text-slate-900 text-2xl md:text-3xl leading-tight tracking-tight mb-8">
            Where we focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focus.map((f) => (
              <div key={f.t} className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-900/5 border border-slate-100">
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{f.t}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/membership" className="text-center font-display font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full text-sm transition-colors">
              Join a Mission Team →
            </Link>
            <Link to="/give" className="text-center font-medium text-slate-700 border border-slate-300 hover:border-slate-500 px-7 py-3.5 rounded-full text-sm transition-colors">
              Support Missions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
