import { motion } from 'framer-motion'
import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import { wix, PHOTOS, pillars } from '../lib/data'

export default function About() {
  const fullArtworkImage = 'https://static.wixstatic.com/media/d185ab_eb41059550724662a74a0126b44f31b7~mv2.jpg/v1/fill/w_1918,h_550,al_c,q_85,enc_avif,quality_auto/Untitled%20design_edited.jpg'

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Raising a generation of role-model Christians."
        intro="Vessels of Honor (VOH Kenya) exists to influence leadership in Africa and the world by equipping teens, young adults, and professionals to become Christ-centred leaders."
        image="https://static.wixstatic.com/media/d185ab_39fc117d8200443a856e766540a184a1~mv2.jpg/v1/fill/w_1600,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d185ab_39fc117d8200443a856e766540a184a1~mv2.jpg"
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
            <img
              src="https://static.wixstatic.com/media/d185ab_c77d66f6041e400ab161b5f040a85da1~mv2.jpg/v1/fill/w_416,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OLE_4200_edited.jpg"
              alt="Pastor Timothy Nyamgero"
              className="w-full max-w-[420px] h-auto max-h-[460px] rounded-3xl object-contain bg-[#f5f3ef] mx-auto"
            />
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
      <section className="py-20 md:py-28 px-5 md:px-8 bg-[#f5f3ef]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase">
              Our Discipleship Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Rooted',
                subtitle: 'Build up!',
                verse: 'Eph 3:14-19',
                className: 'text-[2.7rem] leading-[0.8]',
              },
              {
                title: 'Set',
                subtitle: 'Apart',
                verse: '2 Tim 2:20-23',
                className: 'text-[2.7rem] leading-[0.8]',
              },
              {
                title: 'Equipped',
                subtitle: '& Empowered',
                verse: 'Heb 13:20-21',
                className: 'text-[2.2rem] leading-[0.85]',
              },
              {
                title: 'Positioned',
                subtitle: '& Connected',
                verse: 'Matt 5:13-16',
                className: 'text-[2.1rem] leading-[0.85]',
              },
            ].map((item) => (
              <div key={item.verse} className="flex justify-center">
                <div className="relative flex h-[210px] w-[210px] items-center justify-center overflow-hidden rounded-full border-[3px] border-slate-900 bg-[#f5f3ef] shadow-[0_0_0_3px_rgba(15,23,42,0.02)]">
                  <div className="absolute inset-[18px] rounded-full border-[2px] border-slate-900/90" />
                  <div className="relative z-10 flex flex-col items-center justify-center text-center text-slate-900 px-6">
                    <div
                      className={`tracking-[-0.08em] ${item.className}`}
                      style={{
                        fontFamily: '"Segoe Print", "Bradley Hand", "Comic Sans MS", cursive',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        letterSpacing: '-0.06em',
                      }}
                    >
                      <div>{item.title}</div>
                      <div>{item.subtitle}</div>
                    </div>
                    <div className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-700">
                      {item.verse}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
