import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router'

const MotionLink = motion.create(Link)

type Props = {
  children: ReactNode
  onClick?: () => void
  href?: string
  to?: string
  className?: string
  strength?: number
  ariaLabel?: string
}

/* A magnetic control that eases toward the cursor and settles back on leave. */
export default function MagneticButton({ children, onClick, href, to, className = '', strength = 0.4, ariaLabel }: Props) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 })

  const handleMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const shared = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: sx, y: sy },
    className,
    whileTap: { scale: 0.96 },
  }

  if (to) {
    return (
      <MotionLink to={to} aria-label={ariaLabel} {...shared}>
        {children}
      </MotionLink>
    )
  }
  if (href) {
    return (
      <motion.a href={href} aria-label={ariaLabel} {...shared}>
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button type="button" onClick={onClick} aria-label={ariaLabel} {...shared}>
      {children}
    </motion.button>
  )
}
