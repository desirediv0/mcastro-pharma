'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { company } from '@/data/company'

const R = 22
const C = 2 * Math.PI * R

/** Floating WhatsApp button + scroll-to-top button with a progress ring. Bottom-right on every screen size. */
export function FloatingActions() {
  const [progress, setProgress] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])

  const visible = progress > 0.04
  const digits = company.whatsapp?.replace(/\D/g, '')
  const href = digits ? `https://wa.me/${digits}?text=${encodeURIComponent('Hello McASTRO PHARMA, I would like to make a business enquiry.')}` : '/contact'
  const external = Boolean(digits)

  const toTop = () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })

  return (
    <div className="pointer-events-none fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-50 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={toTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            whileHover={{ y: -3 }}
            className="pointer-events-auto group relative grid h-12 w-12 place-items-center rounded-full bg-navy text-white shadow-[0_14px_30px_-10px_rgba(9,43,76,.7)] sm:h-14 sm:w-14"
          >
            <svg viewBox="0 0 52 52" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
              <circle cx="26" cy="26" r={R} fill="none" stroke="rgba(255,255,255,.2)" strokeWidth="3" />
              <circle cx="26" cy="26" r={R} fill="none" stroke="#258bd2" strokeWidth="3" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - progress)} />
            </svg>
            <ArrowUp className="relative h-5 w-5 transition-transform group-hover:-translate-y-0.5 sm:h-6 sm:w-6" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        aria-label={external ? 'Chat with us on WhatsApp' : 'Contact us'}
        className="pointer-events-auto group relative grid h-14 w-14 place-items-center rounded-full bg-white shadow-[0_16px_34px_-10px_rgba(0,0,0,.45)] ring-1 ring-black/5 transition-transform hover:scale-110 sm:h-16 sm:w-16"
      >
        <span className="wa-pulse absolute inset-0 rounded-full bg-[#25d366]/40" aria-hidden="true" />
        <Image src="/brand/whatsapp-icon.png" alt="" width={64} height={64} className="relative h-10 w-10 sm:h-12 sm:w-12" unoptimized />
      </Link>
    </div>
  )
}
