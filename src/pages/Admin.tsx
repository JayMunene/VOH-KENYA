import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  useSubmissions,
  deleteSubmission,
  clearSubmissions,
  adminLogin,
  isAdminSession,
  typeLabels,
  type SubmissionType,
  type Submission,
} from '../lib/store'

const badge: Record<SubmissionType, string> = {
  newsletter: 'bg-cyan-500/15 text-cyan-600 border-cyan-500/30',
  prayer: 'bg-rose-500/15 text-rose-600 border-rose-500/30',
  membership: 'bg-amber-500/15 text-amber-600 border-amber-500/30',
}

const fmt = (ts: number) =>
  new Date(ts).toLocaleString('en-KE', { dateStyle: 'medium', timeStyle: 'short' })

function toCSV(rows: Submission[]) {
  const keys = Array.from(new Set(rows.flatMap((r) => Object.keys(r.data))))
  const header = ['type', 'date', ...keys]
  const esc = (v: string) => `"${(v ?? '').replace(/"/g, '""')}"`
  const lines = rows.map((r) =>
    [typeLabels[r.type], fmt(r.createdAt), ...keys.map((k) => r.data[k] ?? '')].map(esc).join(','),
  )
  return [header.map(esc).join(','), ...lines].join('\n')
}

function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [checking, setChecking] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-5 pt-20">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          setChecking(true)
          // Passcode is verified server-side; the client never holds it.
          const result = await adminLogin(value)
          setChecking(false)
          if (result.ok) {
            onUnlock()
          } else {
            setError(true)
          }
        }}
        className="w-full max-w-sm rounded-[28px] bg-white/[0.04] border border-white/10 p-8"
      >
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-[0.2em] uppercase mb-4">
          <span className="w-6 h-px bg-amber-500" />
          Admin
        </div>
        <h1 className="font-display font-extrabold text-white text-2xl mb-2">Dashboard access</h1>
        <p className="text-white/50 text-sm mb-6">Enter the admin passcode to view submissions.</p>
        <input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder="Passcode"
          className="w-full bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors"
        />
        {error && <p className="text-rose-400 text-xs mt-2">Incorrect passcode. Try again.</p>}
        <button
          type="submit"
          disabled={checking}
          className="w-full mt-4 font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 py-3.5 rounded-full text-sm transition-colors"
        >
          {checking ? 'Verifying…' : 'Unlock Dashboard'}
        </button>
      </form>
    </section>
  )
}

export default function Admin() {
  const [unlocked, setUnlocked] = useState(() => isAdminSession())
  const { submissions, loading, refresh } = useSubmissions(unlocked)
  const [filter, setFilter] = useState<'all' | SubmissionType>('all')
  const [query, setQuery] = useState('')
  const [deleting, setDeleting] = useState<string | null>(null)
  const [clearing, setClearing] = useState(false)

  const counts = useMemo(() => {
    const c: Record<string, number> = { newsletter: 0, prayer: 0, membership: 0 }
    submissions.forEach((s) => (c[s.type] += 1))
    return c
  }, [submissions])

  const visible = useMemo(() => {
    return submissions
      .filter((s) => filter === 'all' || s.type === filter)
      .filter((s) => {
        if (!query.trim()) return true
        const hay = Object.values(s.data).join(' ').toLowerCase()
        return hay.includes(query.toLowerCase())
      })
  }, [submissions, filter, query])

  if (!unlocked) return <Gate onUnlock={() => setUnlocked(true)} />

  const download = () => {
    const blob = new Blob([toCSV(visible)], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `voh-submissions-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDelete = async (id: string) => {
    setDeleting(id)
    const result = await deleteSubmission(id)
    if (!result.ok && result.error === 'unauthorized') {
      setUnlocked(false)
      setDeleting(null)
      return
    }
    await refresh()
    setDeleting(null)
  }

  const handleClear = async () => {
    if (!confirm('Clear ALL submissions? This cannot be undone.')) return
    setClearing(true)
    const result = await clearSubmissions()
    if (!result.ok && result.error === 'unauthorized') {
      setUnlocked(false)
      setClearing(false)
      return
    }
    await refresh()
    setClearing(false)
  }

  const stats = [
    { key: 'all' as const, label: 'Total', value: submissions.length },
    { key: 'membership' as const, label: 'Membership', value: counts.membership },
    { key: 'prayer' as const, label: 'Prayer Requests', value: counts.prayer },
    { key: 'newsletter' as const, label: 'Newsletter', value: counts.newsletter },
  ]

  return (
    <section className="min-h-screen pt-28 md:pt-32 pb-20 px-5 md:px-8 bg-[#F2EFE8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-2">
              <span className="w-6 h-px bg-amber-500" />
              Admin Dashboard
            </div>
            <h1 className="font-display font-extrabold text-slate-900 text-3xl md:text-4xl tracking-tight">Submissions</h1>
            <p className="text-slate-500 text-sm mt-1">Everything visitors submit through the site, in one place.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={download}
              disabled={!visible.length || loading}
              className="text-sm font-semibold text-slate-900 bg-white border border-slate-200 hover:border-slate-400 disabled:opacity-40 px-4 py-2.5 rounded-full transition-colors"
            >
              Export CSV
            </button>
            <button
              onClick={handleClear}
              disabled={!submissions.length || loading || clearing}
              className="text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 px-4 py-2.5 rounded-full transition-colors"
            >
              {clearing ? 'Clearing…' : 'Clear all'}
            </button>
          </div>
        </div>

        {/* Stat tiles / filters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {stats.map((s) => {
            const active = filter === s.key
            return (
              <button
                key={s.key}
                onClick={() => setFilter(s.key)}
                className={`text-left rounded-3xl p-5 border transition-all ${
                  active ? 'bg-slate-900 border-slate-900' : 'bg-white border-slate-100 hover:border-slate-300'
                }`}
              >
                <div className={`font-display font-extrabold text-3xl md:text-4xl tracking-tight ${active ? 'text-white' : 'text-slate-900'}`}>
                  {loading ? '—' : s.value}
                </div>
                <div className={`text-sm font-semibold mt-1 ${active ? 'text-amber-400' : 'text-slate-500'}`}>{s.label}</div>
              </button>
            )
          })}
        </div>

        {/* Search */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search submissions…"
          className="w-full sm:max-w-sm bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-amber-500 transition-colors mb-6"
        />

        {loading ? (
          <div className="rounded-[28px] bg-white border border-slate-100 p-16 text-center">
            <div className="w-8 h-8 rounded-full border-2 border-amber-500 border-t-transparent animate-spin mx-auto mb-4" />
            <p className="text-slate-500 text-sm">Loading submissions…</p>
          </div>
        ) : visible.length === 0 ? (
          <div className="rounded-[28px] bg-white border border-slate-100 p-16 text-center">
            <div className="text-4xl mb-3">📭</div>
            <p className="font-display font-bold text-slate-900 text-lg">No submissions yet</p>
            <p className="text-slate-500 text-sm mt-1">
              As visitors sign up, request prayer, or subscribe, their entries will appear here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {visible.map((s) => (
                <motion.div
                  key={s.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-white border border-slate-100 p-6 shadow-lg shadow-slate-900/5"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${badge[s.type]}`}>
                      {typeLabels[s.type]}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400 text-xs">{fmt(s.createdAt)}</span>
                      <button
                        onClick={() => handleDelete(s.id)}
                        disabled={deleting === s.id}
                        aria-label="Delete submission"
                        className="text-slate-400 hover:text-rose-500 disabled:opacity-40 transition-colors text-sm"
                      >
                        {deleting === s.id ? '…' : '✕'}
                      </button>
                    </div>
                  </div>
                  <dl className="flex flex-col gap-2.5">
                    {Object.entries(s.data).map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[100px_1fr] gap-3">
                        <dt className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider pt-0.5">{k}</dt>
                        <dd className="text-sm text-slate-800 break-words">{v || <span className="text-slate-300">—</span>}</dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}