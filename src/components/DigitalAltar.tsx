import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonies, type Testimony } from '../lib/data'
import { addSubmission } from '../lib/store'

const filters = ['All', 'Discipleship', 'Missions', 'Family'] as const
type Filter = (typeof filters)[number]

const badge: Record<Testimony['category'], string> = {
  Discipleship: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  Missions: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  Family: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
}

export default function DigitalAltar() {
  const [filter, setFilter] = useState<Filter>('All')
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [request, setRequest] = useState('')

  const visible = filter === 'All' ? testimonies : testimonies.filter((t) => t.category === filter)

  return (
    <section id="altar" className="py-20 md:py-28 px-5 md:px-8 bg-[#F2EFE8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-amber-500" />
            The Digital Altar
            <span className="w-6 h-px bg-amber-500" />
          </div>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
            Testimonies &amp; prayer.
          </h2>
          <p className="text-slate-500 text-base mt-3 leading-relaxed">
            Read what God is doing in our community — then share a testimony or lift up a prayer request of your own.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Testimony wall */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2 mb-6">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                    filter === f ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {visible.map((t) => (
                  <motion.blockquote
                    key={t.id}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white rounded-3xl p-6 shadow-lg shadow-slate-900/5 border border-slate-100"
                  >
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${badge[t.category]} mb-4`}>
                      {t.category}
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">“{t.quote}”</p>
                    <footer>
                      <div className="font-display font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}</div>
                    </footer>
                  </motion.blockquote>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Prayer request */}
          <div className="bg-slate-900 rounded-[28px] p-7 md:p-8 sticky top-24">
            <h3 className="font-display font-bold text-white text-xl mb-2">Share a prayer request</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Our team prays over every request submitted. You are not alone.
            </p>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-amber-500/15 border border-amber-500/30 p-5 text-center"
                >
                  <div className="text-2xl mb-2">🙏</div>
                  <p className="text-amber-300 text-sm font-medium">Received. We are praying with you.</p>
                  <button onClick={() => setSent(false)} className="text-white/50 hover:text-white text-xs mt-3 underline">
                    Submit another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={async (e) => {
                    e.preventDefault()
                    setSubmitting(true)
                    setSubmitError(null)
                    const result = await addSubmission('prayer', { name, request })
                    setSubmitting(false)
                    if (!result.ok) { setSubmitError(result.error ?? 'Something went wrong.'); return }
                    setSent(true)
                    setName('')
                    setRequest('')
                  }}
                  className="flex flex-col gap-3"
                >
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors"
                  />
                  <textarea
                    required
                    rows={4}
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder="How can we pray for you?"
                    className="bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                  {submitError && <p className="text-rose-400 text-xs">{submitError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 py-3.5 rounded-full text-sm transition-colors"
                  >
                    {submitting ? 'Sending…' : 'Send Prayer Request'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
