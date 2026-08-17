import { Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import { wix, PHOTOS } from '../lib/data'

export default function Leadership() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Meet the heart behind the mission."
        intro="VOH Kenya is led by people devoted to seeing a generation discipled, equipped, and released into purpose."
        image={wix(PHOTOS.g, 1920, 900)}
        crumbs={[{ label: 'About Us', to: '/about' }, { label: 'Leadership' }]}
      />

      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-center">
          <img
            src={wix(PHOTOS.g, 800, 950)}
            alt="Pastor Timothy Nyamgero"
            className="rounded-[28px] object-cover w-full h-full max-h-[560px] shadow-lg shadow-slate-900/10"
          />
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Founder &amp; Senior Pastor
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl leading-tight tracking-tight mb-2">
              Pastor Timothy Nyamgero
            </h2>
            <blockquote className="font-display font-bold text-slate-800 text-xl md:text-2xl leading-[1.35] my-6">
              “We are not simply building a church programme — we are raising a generation that will transform every sphere of
              African society with the character and power of Christ.”
            </blockquote>
            <div className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
              <p>
                Pastor Timothy carries a deep burden to see young people discipled into maturity and released into purpose. His
                teaching blends solid biblical foundations with the practical realities of life, love, work, and leadership for
                this generation.
              </p>
              <p>
                Under his leadership, VOH Kenya has grown into a thriving community equipping teens, young adults, and
                professionals to live for Christ and lead with honour across Kenya and beyond.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/fellowships" className="text-center font-display font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full text-sm transition-colors">
                Come and Visit →
              </Link>
              <a href="mailto:info@vohkenya.org" className="text-center font-medium text-slate-700 border border-slate-300 hover:border-slate-500 px-7 py-3.5 rounded-full text-sm transition-colors">
                Contact the Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
