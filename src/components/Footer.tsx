import React, { useState } from 'react'
import { Link } from 'react-router'
import { LOGO, navLinks, socials } from '../lib/data'
import { addSubmission } from '../lib/store'

const socialIcons: Record<string, React.ReactElement> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <img src={LOGO} alt="VOH Kenya logo" className="h-9 w-9 rounded-lg object-contain bg-white/10 p-0.5" />
            <div>
              <div className="font-display font-bold text-white text-sm">VOH Kenya</div>
              <div className="text-[9px] text-amber-400 tracking-[0.2em] uppercase">Vessels of Honor</div>
            </div>
          </Link>
          <p className="text-white/50 text-xs leading-relaxed">
            Garden Estate, Nairobi
            <br />
            Kenya
          </p>
          <p className="text-white/50 text-xs mt-3 leading-relaxed">
            Equipping a generation for effective
            <br />
            Christian living and leadership.
          </p>
        </div>

        <div>
          <div className="font-display font-bold text-white text-sm mb-5">Explore</div>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/50 hover:text-amber-400 text-xs transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/altar" className="text-white/50 hover:text-amber-400 text-xs transition-colors">
                The Digital Altar
              </Link>
            </li>
            <li>
              <Link to="/give" className="text-white/50 hover:text-amber-400 text-xs transition-colors">
                Give
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display font-bold text-white text-sm mb-5">Contact</div>
          <div className="flex flex-col gap-3">
            <a href="mailto:info@vohkenya.org" className="text-white/50 hover:text-amber-400 text-xs transition-colors">
              info@vohkenya.org
            </a>
            <a href="tel:+254738900218" className="text-white/50 hover:text-amber-400 text-xs transition-colors">
              +254 738 900218
            </a>
            <p className="text-white/50 text-xs leading-relaxed">
              Garden Estate, Nairobi
            </p>
          </div>
        </div>

        <div>
          <div className="font-display font-bold text-white text-sm mb-5">Follow Us</div>
          <div className="flex flex-wrap gap-3 mb-6">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/15 hover:border-amber-500 hover:bg-amber-500/10 flex items-center justify-center text-white/55 hover:text-amber-400 transition-all duration-200"
              >
                {socialIcons[label]}
              </a>
            ))}
          </div>
          <div className="font-display font-semibold text-white text-xs mb-3">Stay updated</div>
          {subscribed ? (
            <p className="text-amber-400 text-xs">Thank you — you&apos;re on the list! 🎉</p>
          ) : (
            <form
              className="flex gap-2"
              onSubmit={async (e) => {
                e.preventDefault()
                setSubmitting(true)
                setSubmitError(null)
                const result = await addSubmission('newsletter', { email })
                setSubmitting(false)
                if (!result.ok) { setSubmitError(result.error ?? 'Something went wrong. Please try again.'); return }
                setSubscribed(true)
                setEmail('')
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 min-w-0 bg-white/10 border border-white/15 text-white placeholder-white/35 text-xs px-3 py-2.5 rounded-full focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="shrink-0 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-slate-900 text-xs font-bold px-4 py-2.5 rounded-full transition-colors"
                aria-label="Subscribe"
              >
                {submitting ? '…' : '→'}
              </button>
            </form>
          )}
          {submitError && !subscribed && <p className="text-rose-400 text-xs mt-2">{submitError}</p>}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">© {new Date().getFullYear()} VOH Kenya. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/admin" className="text-white/25 hover:text-amber-400 text-xs transition-colors">
              Admin
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/30 hover:text-amber-400 text-xs transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
