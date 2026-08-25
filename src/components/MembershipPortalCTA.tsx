import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const activity = [
  { label: 'The Move! — Weekly Gathering', meta: 'Fri · 6:00 pm', tag: 'RSVP', tone: 'bg-amber-500/15 text-amber-300' },
  { label: 'Discipleship Master Class', meta: 'Module 3 of 8', tag: 'In progress', tone: 'bg-cyan-500/15 text-cyan-300' },
  { label: 'Missions Outreach — Nakuru', meta: 'Sat · Serving team', tag: 'Joined', tone: 'bg-emerald-500/15 text-emerald-300' },
]

export default function MembershipPortalCTA() {
  return (
    <section id="membership" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
            <span className="w-6 h-px bg-amber-500" />
            Membership
          </div>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            Your journey, all in one place.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
            Become a member to track your discipleship path, RSVP to gatherings, join a serving team, and connect with your
            fellowship — all from a private member dashboard.
          </p>
          <ul className="flex flex-col gap-3 mb-8">
            {['Personalised discipleship pathway', 'Event RSVPs & reminders', 'Fellowship & small-group directory', 'Giving history & statements'].map(
              (f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-[11px] font-bold shrink-0">
                    ✓
                  </span>
                  {f}
                </li>
              ),
            )}
          </ul>
          <MagneticButton
            to="/membership"
            strength={0.4}
            className="inline-block font-display font-bold text-white bg-slate-900 hover:bg-slate-800 px-7 py-3.5 rounded-full text-sm transition-colors"
          >
            Coming Soon
          </MagneticButton>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="rounded-[28px] bg-slate-900 p-6 md:p-7 shadow-2xl shadow-slate-900/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-display font-bold text-slate-900">
                  J
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Welcome back, Joy</div>
                  <div className="text-white/45 text-xs">Member since 2023 · Garden Estate</div>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-amber-500/40 rounded-full px-2.5 py-1">
                Member
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="text-white/45 text-[11px] mb-1">Discipleship</div>
                <div className="font-display font-extrabold text-white text-2xl">62%</div>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '62%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full bg-amber-500"
                  />
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="text-white/45 text-[11px] mb-1">This month</div>
                <div className="font-display font-extrabold text-white text-2xl">4</div>
                <div className="text-white/45 text-[11px] mt-2">gatherings attended</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 divide-y divide-white/5">
              {activity.map((a) => (
                <div key={a.label} className="flex items-center justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <div className="text-white text-sm font-medium truncate">{a.label}</div>
                    <div className="text-white/40 text-xs">{a.meta}</div>
                  </div>
                  <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${a.tone}`}>{a.tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
