import { motion } from 'framer-motion'
import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import { wix, PHOTOS, pillars } from '../lib/data'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Raising a generation of role-model Christians."
        intro="Vessels of Honor (VOH Kenya) exists to influence leadership in Africa and the world by equipping teens, young adults, and professionals to become Christ-centred leaders."
        image={wix(PHOTOS.hero, 1920, 900)}
        crumbs={[{ label: 'About Us' }]}
      />

      {/* Our Story */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Our Story
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              A movement built on discipleship.
            </h2>
            <div className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
              <p>
                What began as a small gathering of young people hungry for God has grown into a thriving community across
                Nairobi and beyond. From day one, our conviction has been simple: God is looking for vessels He can pour His
                life through — ordinary young people made extraordinary by His grace.
              </p>
              <p>
                Today, VOH Kenya disciples youth at every stage of life, sends teams on mission, and equips a generation to
                carry the character and power of Christ into every sphere of society — from campuses and careers to homes and
                families.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={wix(PHOTOS.a, 500, 640)} alt="VOH Kenya youth" className="rounded-3xl object-cover w-full h-full row-span-2" />
            <img src={wix(PHOTOS.c, 500, 400)} alt="A VOH gathering" className="rounded-3xl object-cover w-full h-full" />
            <img src={wix(PHOTOS.f, 500, 400)} alt="Worship at VOH" className="rounded-3xl object-cover w-full h-full" />
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 md:py-20 px-5 md:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              t: 'Our Vision',
              d: 'To influence leadership in Africa and the world by raising a generation of role-model Christians and Christ-centred leaders.',
            },
            {
              t: 'Our Mission',
              d: 'To equip and disciple young people for effective Christian living and transformational leadership in every sphere of society.',
            },
          ].map((b) => (
            <div key={b.t} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="font-display font-bold text-amber-400 text-sm tracking-[0.2em] uppercase mb-4">{b.t}</div>
              <p className="font-display font-bold text-white text-xl md:text-2xl leading-snug">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Our Mandate
              <span className="w-6 h-px bg-amber-500" />
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl leading-tight tracking-tight">
              Four pillars, one mission.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.id} className="flex gap-5 rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5 border border-slate-100">
                <span className={`shrink-0 w-11 h-11 rounded-full ${p.accent} flex items-center justify-center text-sm font-bold`}>
                  {p.num}
                </span>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-1.5">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28 px-5 md:px-8 bg-[#F2EFE8]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-amber-500" />
            Leadership
          </div>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl leading-tight tracking-tight mb-12">
            Meet our founder.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center bg-white rounded-[28px] p-6 md:p-10 shadow-lg shadow-slate-900/5">
            <img src={wix(PHOTOS.g, 700, 800)} alt="Pastor Timothy Nyamgero" className="rounded-3xl object-cover w-full h-full max-h-[460px]" />
            <div>
              <h3 className="font-display font-extrabold text-slate-900 text-2xl md:text-3xl">Pastor Timothy Nyamgero</h3>
              <div className="text-amber-600 font-semibold text-sm mt-1 mb-6">Founder &amp; Senior Pastor, VOH Kenya</div>
              <blockquote className="font-display font-bold text-slate-800 text-xl md:text-2xl leading-[1.35] mb-6">
                “We are not simply building a church programme — we are raising a generation that will transform every sphere of
                African society with the character and power of Christ.”
              </blockquote>
              <p className="text-slate-600 text-base leading-relaxed">
                Pastor Timothy carries a deep burden to see young people discipled into maturity and released into purpose. His
                teaching blends solid biblical foundations with the practical realities of life, love, work, and leadership for
                this generation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/leadership"
                  className="text-center font-display font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full text-sm transition-colors"
                >
                  Read Full Profile →
                </Link>
                <Link
                  to="/fellowships"
                  className="text-center font-medium text-slate-700 border border-slate-300 hover:border-slate-500 px-7 py-3.5 rounded-full text-sm transition-colors"
                >
                  Come and Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
