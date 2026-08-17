import { useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

/* Framer Motion page-transition wrapper — makes route changes feel native. */
function AnimatedOutlet() {
  const location = useLocation()
  const element = useOutlet()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  )
}

export default function RootLayout() {
  return (
    <div className="bg-[#F7F5F0] font-sans text-slate-900 antialiased overflow-x-hidden min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <AnimatedOutlet />
      </main>
      <Footer />
    </div>
  )
}
