import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fellowships, type Fellowship } from '../lib/data'

const regions = ['All', 'Nairobi', 'Beyond'] as const
type Region = (typeof regions)[number]

export default function CommunityMap() {
  const [region, setRegion] = useState<Region>('All')
  const [active, setActive] = useState<string>(fellowships[0].id)

  const visible: Fellowship[] = region === 'All' ? fellowships : fellowships.filter((f) => f.region === region)
  // Keep the highlighted card and map panel in sync with the current filter.
  const activeFellowship = visible.find((f) => f.id === active) ?? visible[0]

  return (
    <section id="fellowships" className="py-20 md:py-28 px-5 md:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              Fellowships
            </div>
            <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Find a fellowship near you.
            </h2>
            <p className="text-white/55 text-base mt-3 max-w-lg leading-relaxed">
              We gather across Nairobi and beyond. Pick a location to see when and where the community meets.
            </p>
          </div>
          <div className="flex gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => {
                  setRegion(r)
                  const next = r === 'All' ? fellowships : fellowships.filter((f) => f.region === r)
                  if (next[0]) setActive(next[0].id)
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                  region === r ? 'bg-amber-500 text-slate-900' : 'text-white/70 border border-white/20 hover:border-white/50'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* List */}
          <motion.div layout className="flex flex-col gap-3">
            <AnimatePresence mode="popLayout">
              {visible.map((f) => (
                <motion.button
                  key={f.id}
                  layout
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActive(f.id)}
                  className={`text-left rounded-3xl p-5 border transition-colors ${
                    active === f.id ? 'bg-white/10 border-amber-500/50' : 'bg-white/[0.03] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-display font-bold text-white text-base">{f.name}</div>
                      <div className="text-white/50 text-xs mt-0.5">{f.area}</div>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 border border-amber-500/30 rounded-full px-2.5 py-1 shrink-0">
                      {f.region}
                    </span>
                  </div>
                  <div className="text-amber-300/80 text-xs mt-3">{f.venue}</div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stylised map panel */}
          <div className="relative rounded-[28px] overflow-hidden bg-slate-800 min-h-[340px] border border-white/10">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFellowship?.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center"
                >
                  <span className="relative flex h-4 w-4 mb-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500" />
                  </span>
                  <div className="font-display font-bold text-white text-2xl">{activeFellowship?.name}</div>
                  <div className="text-white/60 text-sm mt-1">{activeFellowship?.area}</div>
                  <div className="text-amber-300 text-sm mt-4">{activeFellowship?.venue}</div>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(`${activeFellowship?.venue ?? ''}, ${activeFellowship?.area ?? 'Nairobi'}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 px-5 py-2.5 rounded-full transition-colors"
                  >
                    Open in Maps ↗
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}