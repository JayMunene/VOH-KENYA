import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import MembershipPortalCTA from '../components/MembershipPortalCTA'
import { wix, PHOTOS } from '../lib/data'
import { addSubmission } from '../lib/store'

const benefits = [
  { t: 'Discipleship pathway', d: 'A personalised journey from first steps to leadership, tracked in your dashboard.' },
  { t: 'Event RSVPs', d: 'Reserve your place at gatherings and get reminders so you never miss a moment.' },
  { t: 'Fellowship directory', d: 'Find and connect with small groups and fellowships near you.' },
  { t: 'Serving teams', d: 'Discover where your gifts fit and join a team on mission.' },
  { t: 'Giving statements', d: 'Track your giving history and download statements anytime.' },
  { t: 'Member community', d: 'Belong to a private, encouraging community walking the journey with you.' },
]

export default function Membership() {
  const [joined, setJoined] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '' })
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="Belong to something bigger."
        intro="Become a member to track your discipleship journey, RSVP to gatherings, join a serving team, and connect with your fellowship — all in one place."
        image={wix(PHOTOS.a, 1920, 900)}
        crumbs={[{ label: 'Membership' }]}
      />

      <MembershipPortalCTA />

      {/* Benefits */}
      <section className="pb-8 md:pb-12 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5 border border-slate-100">
              <h3 className="font-display font-bold text-slate-900 text-base mb-2">{b.t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sign up */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-2xl mx-auto rounded-[28px] bg-slate-900 p-8 md:p-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-amber-500" />
            Join Free
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Become a member today.
          </h2>
          <p className="text-white/55 text-sm mb-8">Membership is free. Tell us a little about you and we&apos;ll help you take the next step.</p>

          <AnimatePresence mode="wait">
            {joined ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-amber-500/15 border border-amber-500/30 p-6 text-center"
              >
                <div className="text-3xl mb-2">🎉</div>
                <p className="text-amber-300 font-medium">Welcome to the family! We&apos;ll be in touch shortly.</p>
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
                  const result = await addSubmission('membership', form)
                  setSubmitting(false)
                  if (!result.ok) { setSubmitError(result.error ?? 'Something went wrong.'); return }
                  setJoined(true)
                  setForm({ name: '', phone: '', email: '', interest: '' })
                }}
                className="flex flex-col gap-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input required value={form.name} onChange={set('name')} placeholder="Full name" className="bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors" />
                  <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="Phone number" className="bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <input required type="email" value={form.email} onChange={set('email')} placeholder="Email address" className="bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors" />
                <select required value={form.interest} onChange={set('interest')} className="bg-white/10 border border-white/15 text-white text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors">
                  <option value="" disabled className="text-slate-900">
                    I&apos;m most interested in…
                  </option>
                  <option className="text-slate-900">Discipleship</option>
                  <option className="text-slate-900">Youth Ministry (The Move!)</option>
                  <option className="text-slate-900">Relationships &amp; Family</option>
                  <option className="text-slate-900">Missions &amp; Outreach</option>
                  <option className="text-slate-900">Music &amp; Worship</option>
                </select>
                {submitError && <p className="text-rose-400 text-xs mt-1">{submitError}</p>}
                <button type="submit" disabled={submitting} className="mt-2 font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 py-3.5 rounded-full text-sm transition-colors">
                  {submitting ? 'Submitting…' : 'Create My Membership'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
