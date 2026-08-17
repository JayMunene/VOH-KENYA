import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-5 pt-20">
      <div className="text-center max-w-md">
        <div className="font-display font-extrabold text-amber-500 text-7xl md:text-8xl mb-4">404</div>
        <h1 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">Page not found</h1>
        <p className="text-white/55 text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on the path.
        </p>
        <Link
          to="/"
          className="inline-block font-display font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 px-8 py-3.5 rounded-full text-sm transition-colors"
        >
          Back to Home →
        </Link>
      </div>
    </section>
  )
}
