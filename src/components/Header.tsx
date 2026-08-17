import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router'
import { LOGO, navLinks } from '../lib/data'
import MagneticButton from './MagneticButton'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Solid whenever scrolled, on interior pages, or when the mobile menu is open.
  const solid = scrolled || !isHome || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-slate-900/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-slate-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="VOH Kenya home">
          <img src={LOGO} alt="VOH Kenya logo" className="h-9 w-9 rounded-lg object-contain bg-white/10 p-0.5" />
          <div className="text-left">
            <div className="font-display font-bold text-white text-sm leading-tight tracking-tight">VOH Kenya</div>
            <div className="text-[9px] text-amber-400 tracking-[0.2em] uppercase leading-tight">Vessels of Honor</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-amber-400' : 'text-white/70 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <MagneticButton
            to="/give"
            className="text-sm font-semibold text-slate-900 bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-full transition-colors duration-200"
          >
            Give / Support
          </MagneticButton>
          <MagneticButton
            to="/fellowships"
            className="text-sm font-medium text-white border border-white/25 hover:border-white/60 px-4 py-2 rounded-full transition-colors duration-200"
          >
            Join a Group
          </MagneticButton>
        </div>

        <button className="md:hidden text-white p-2 -mr-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900 border-t border-white/10 px-5 pt-4 pb-8 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium py-2.5 transition-colors ${isActive ? 'text-amber-400' : 'text-white/80 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
              <Link to="/give" className="text-center font-semibold text-slate-900 bg-amber-500 py-3.5 rounded-full">
                Give / Support
              </Link>
              <Link to="/fellowships" className="text-center font-medium text-white border border-white/30 py-3.5 rounded-full">
                Join a Group
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
