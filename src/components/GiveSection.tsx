import { GIVING } from '../lib/data'

export default function GiveSection() {
  return (
    <section id="give" className="px-5 md:px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-slate-900 rounded-[28px] grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.2em] uppercase mb-5">
              <span className="w-6 h-px bg-amber-500" />
              Give &amp; Support
            </div>
            <h3 className="font-display font-extrabold text-white text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              Partner with the mission.
            </h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Your generosity fuels discipleship, missions, and youth empowerment across Kenya. Every gift helps raise the next
              generation of Vessels of Honor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+254738900218"
                className="font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 px-7 py-3.5 rounded-full text-sm text-center transition-colors"
              >
                Give via M-PESA
              </a>
              <a
                href="mailto:info@vohkenya.org?subject=Partnering%20with%20VOH%20Kenya"
                className="font-medium text-white border border-white/25 hover:border-white/60 px-7 py-3.5 rounded-full text-sm text-center transition-colors"
              >
                Talk to Us
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] bg-slate-800">
            <img src={GIVING} alt="VOH Kenya giving and support details" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/60 lg:from-slate-900 via-slate-900/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
