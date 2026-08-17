import { useParams, Link } from 'react-router'
import PageHeader from '../components/PageHeader'
import NotFound from './NotFound'
import { getProgram, programDetails, programs } from '../lib/data'

export default function ProgramDetail() {
  const { id } = useParams()
  const program = id ? getProgram(id) : undefined
  const detail = id ? programDetails[id] : undefined

  if (!program || !detail) return <NotFound />

  const related = programs.filter((p) => p.id !== program.id).slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow={program.tag}
        title={program.title}
        intro={program.description}
        image={program.image}
        crumbs={[{ label: 'Programs', to: '/programs' }, { label: program.title }]}
      />

      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-px bg-amber-500" />
              About the program
            </div>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">{detail.long}</p>

            <div className="rounded-3xl bg-slate-900 p-7 md:p-8 mb-8">
              <p className="font-display font-bold text-white text-xl md:text-2xl leading-[1.4]">{detail.scripture}</p>
            </div>

            {detail.video && (() => {
              const videoId = detail.video.split('/').pop()?.split('?')[0] ?? ''
              const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              return (
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 tracking-[0.2em] uppercase mb-4">
                    <span className="w-6 h-px bg-amber-500" />
                    Watch / Listen
                  </div>
                  <a
                    href={detail.video}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block w-full rounded-3xl overflow-hidden bg-slate-900 shadow-xl shadow-slate-900/15"
                    style={{ paddingBottom: '56.25%' }}
                  >
                    <img
                      src={thumb}
                      alt={`${program.title} — featured episode`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/25 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 group-hover:bg-amber-500 flex items-center justify-center shadow-2xl transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-900 translate-x-0.5">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-500 shrink-0">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-white text-xs font-semibold drop-shadow">Watch on YouTube</span>
                    </div>
                  </a>
                </div>
              )
            })()}

            <h3 className="font-display font-bold text-slate-900 text-xl mb-4">What to expect</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-slate-700 bg-white rounded-2xl px-4 py-3.5 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-[11px] font-bold shrink-0">
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 rounded-[28px] bg-white p-7 shadow-lg shadow-slate-900/5 border border-slate-100">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">When it meets</div>
            <div className="font-display font-bold text-slate-900 text-base mb-6 leading-snug">{detail.meets}</div>

            {detail.venues && detail.venues.length > 0 && (
              <>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Venues</div>
                <ul className="flex flex-col gap-1.5 mb-6">
                  {detail.venues.map((v) => (
                    <li key={v} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {detail.joinUrl ? (
              detail.joinUrl.startsWith('http') ? (
                <a
                  href={detail.joinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 py-3.5 rounded-full text-sm transition-colors mb-3"
                >
                  Join This Program →
                </a>
              ) : (
                <a
                  href={detail.joinUrl}
                  className="block text-center font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 py-3.5 rounded-full text-sm transition-colors mb-3"
                >
                  Join This Program →
                </a>
              )
            ) : (
              <Link
                to="/fellowships"
                className="block text-center font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 py-3.5 rounded-full text-sm transition-colors mb-3"
              >
                Join This Program →
              </Link>
            )}
            <a
              href="mailto:info@vohkenya.org?subject=Question%20about%20a%20program"
              className="block text-center font-medium text-slate-700 border border-slate-200 hover:border-slate-400 py-3.5 rounded-full text-sm transition-colors"
            >
              Ask a Question
            </a>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="pb-20 md:pb-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display font-bold text-slate-900 text-2xl mb-8">Explore more programs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.id} to={`/programs/${p.id}`} className="group block rounded-3xl overflow-hidden bg-slate-900">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="font-display font-bold text-white text-base">{p.title}</div>
                  <div className="text-amber-400 text-xs font-semibold mt-1">{p.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
