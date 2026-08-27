import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { partners, wix, PHOTOS } from '../lib/data'

export default function Partners() {
  return (
    <>
      <PageHeader
        eyebrow="Our Partners"
        title="Better together."
        intro="We partner with like-minded organisations who share our heart for a whole, thriving generation. Meet the teams we walk alongside in the mission."
        image="https://media.istockphoto.com/id/512421423/photo/group-of-people-holding-cross-and-praying-in-back-lit.jpg?s=612x612&w=0&k=20&c=L8L0zuhWP7_xGGGShvtvAbIVNorin1TJoeDVq3Rl1lU="
        crumbs={[{ label: 'Partners' }]}
      />

      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          {partners.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-2 rounded-[28px] overflow-hidden bg-white shadow-lg shadow-slate-900/5 border border-slate-100 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative min-h-[260px] lg:min-h-[380px] bg-slate-900">
                <img src={p.image} alt={`${p.name} work`} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                  <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center">
                    <img src={p.logo} alt={`${p.name} logo`} className="h-6 w-auto object-contain" />
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className={`self-start ${p.accent} px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-4`}>
                  Partner
                </span>
                <h2 className="font-display font-extrabold text-slate-900 text-2xl md:text-3xl leading-tight tracking-tight">
                  {p.name}
                </h2>
                <div className="text-amber-600 font-semibold text-sm mt-1 mb-5">{p.tagline}</div>
                <p className="text-slate-600 text-base leading-relaxed mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.services.map((s) => (
                    <span key={s} className="text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-3 py-1.5">
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="self-start font-display font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full text-sm transition-colors"
                >
                  Visit {p.name} ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Become a partner */}
        <div className="max-w-7xl mx-auto w-full mt-8">
          <div className="rounded-[28px] bg-slate-900 px-8 md:px-12 py-12 md:py-14 text-center">
            <h3 className="font-display font-extrabold text-white text-2xl md:text-3xl leading-tight tracking-tight max-w-xl mx-auto">
              Want to partner with VOH Kenya?
            </h3>
            <p className="text-white/60 text-sm md:text-base mt-3 max-w-lg mx-auto">
              If your organisation shares our heart for this generation, we&apos;d love to talk.
            </p>
            <a
              href="mailto:info@vohkenya.org?subject=Partnership%20with%20VOH%20Kenya"
              className="inline-block mt-8 font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
