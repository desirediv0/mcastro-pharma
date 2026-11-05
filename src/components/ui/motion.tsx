'use client'
import { motion, type HTMLMotionProps } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

/** Scroll-triggered fade/slide-up. */
export function Reveal({ delay = 0, y = 24, className, children, ...rest }: { delay?: number; y?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease }} className={className} {...rest}>
      {children}
    </motion.div>
  )
}

/** Clip-path image/panel reveal. */
export function ImageReveal({ className, children, delay = 0 }: { className?: string; children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0.6 }} whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 1.1, delay, ease }} className={className}>
      {children}
    </motion.div>
  )
}

/** Gentle infinite float for decorative elements. */
export function Float({ className, children, amp = 10, dur = 6 }: { className?: string; children: React.ReactNode; amp?: number; dur?: number }) {
  return (
    <motion.div animate={{ y: [0, -amp, 0] }} transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }} className={className}>
      {children}
    </motion.div>
  )
}

export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
export const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }

export function Stagger({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className={className}>
      {children}
    </motion.div>
  )
}
export function StaggerItem({ className, children }: { className?: string; children: React.ReactNode }) {
  return <motion.div variants={item} className={className}>{children}</motion.div>
}
