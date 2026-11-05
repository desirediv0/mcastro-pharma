'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, BadgeCheck, ChevronDown } from 'lucide-react'
import { photos } from '@/data/images'
import { homeCopy } from '@/data/content'
import { categories } from '@/data/categories'

const slides = [
  { photo: photos.labTeam, position: '62% 50%', label: 'Research & development' },
  { photo: photos.tabletLine, position: '72% 50%', label: 'Production' },
  { photo: photos.cleanroom, position: '58% 50%', label: 'Quality' },
  { photo: photos.labInterior, position: '55% 50%', label: 'Laboratory' },
  { photo: photos.warehouse, position: 'center 55%', label: 'Distribution' },
]
const INTERVAL = 2500
const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const t = setTimeout(() => setI((n) => (n + 1) % slides.length), INTERVAL)
    return () => clearTimeout(t)
  }, [i, reduce])

  const names = categories.map((c) => c.name)

  return (
    <section className="on-dark relative isolate flex min-h-[min(calc(100svh-76px),720px)] flex-col overflow-hidden bg-midnight lg:min-h-[min(calc(100svh-92px),700px)]" aria-label="Introduction">
      {/* Background photography: crossfading, slow zoom */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div key={i} className="absolute inset-0" initial={{ opacity: 0, scale: reduce ? 1 : 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 0.8 }, scale: { duration: INTERVAL / 1000 + 0.8, ease: 'linear' } }}>
            <Image src={slides[i].photo.src} alt={slides[i].photo.alt} fill priority={i === 0} sizes="100vw" className="object-cover" style={{ objectPosition: slides[i].position }} />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/15 md:via-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40" />
        <div className="grid-lines absolute inset-0 opacity-[.18]" />
      </div>

      {/* Content */}
      <div className="wrap relative flex flex-1 items-center py-5 lg:py-6">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.35fr_.65fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="eyebrow light !text-[12px] !tracking-[.12em] sm:!text-[13px] sm:!tracking-[.16em]">{homeCopy.eyebrow}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }} className="h-display light mt-[clamp(.75rem,2.4vh,1.25rem)] max-w-4xl text-[clamp(2rem,min(4.4vw,6.8vh),4rem)] leading-[1.02]">
              Advancing Healthcare Through <em>Quality</em> &amp; Innovation
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease }} className="mt-[clamp(.75rem,2.6vh,1.5rem)] max-w-3xl text-[clamp(.95rem,min(1.2vw,2.2vh),1.12rem)] leading-relaxed text-white/85">{homeCopy.heroBody}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease }} className="mt-[clamp(1rem,3.4vh,2rem)] flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-light !px-5 !py-[clamp(.7rem,1.9vh,1rem)] sm:!px-8">Explore Our Products<ArrowRight aria-hidden="true" /></Link>
              <Link href="/partner-with-us" className="btn btn-outline-light !px-5 !py-[clamp(.7rem,1.9vh,1rem)] sm:!px-8">Partner With Us</Link>
            </motion.div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.55 }} className="hero-support hidden md:block mt-[clamp(.75rem,2.8vh,1.75rem)] border-l-2 border-cyan pl-4 text-base font-medium text-white/80">{homeCopy.support}</motion.p>
          </div>

          {/* Floating glass panel (desktop) */}
          <motion.aside initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.5, ease }} className="hidden justify-self-end lg:block lg:w-full lg:max-w-[330px]" aria-label="Highlights">
            <div className="rounded-xl border border-white/25 bg-white/12 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)] backdrop-blur-xl">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-royal to-cyan text-white"><BadgeCheck className="h-6 w-6" aria-hidden="true" /></span>
              <p className="mt-4 font-display text-[1.45rem] leading-tight text-white">Quality-focused. Partner-first.</p>
              <p className="mt-3 text-base leading-relaxed text-white/80">A diverse portfolio across multiple therapeutic categories.</p>
              <Link href="/products" className="mt-5 flex items-center justify-between rounded-lg bg-white/15 px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/25">Browse {categories.length} categories<ArrowUpRight className="h-5 w-5" aria-hidden="true" /></Link>
            </div>
            {/* Slide selector */}
            <div className="mt-5 flex gap-2" role="group" aria-label="Hero image selector">
              {slides.map((s, n) => (
                <button key={s.label} type="button" onClick={() => setI(n)} aria-label={`Show image: ${s.label}`} aria-current={n === i} className="group flex-1 text-left">
                  <span className="block h-[3px] w-full overflow-hidden rounded-full bg-white/25">
                    {n === i ? <motion.span key={`p${i}`} className="block h-full bg-cyan" initial={{ width: reduce ? '100%' : '0%' }} animate={{ width: '100%' }} transition={{ duration: reduce ? 0 : INTERVAL / 1000, ease: 'linear' }} /> : <span className={`block h-full bg-white/50 transition-all ${n < i ? 'w-full' : 'w-0'}`} />}
                  </span>
                  <span className={`mt-2 block text-[13px] font-semibold uppercase tracking-[.1em] transition-colors ${n === i ? 'text-white' : 'text-white/55 group-hover:text-white/85'}`}>{s.label}</span>
                </button>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Category ticker */}
      <div className="relative border-t border-white/15 bg-midnight/55 backdrop-blur-md" aria-label="Product categories">
        <div className="flex items-center">
          <Link href="/products" className="hidden shrink-0 items-center gap-2 border-r border-white/15 px-7 py-4 text-[13px] font-bold uppercase tracking-[.16em] text-cyan sm:flex">Portfolio<ChevronDown className="h-4 w-4" aria-hidden="true" /></Link>
          <div className="marquee-mask relative min-w-0 flex-1 overflow-hidden">
            <ul className="marquee-track flex w-max items-center gap-10 py-3 pr-10">
              {[...names, ...names].map((n, k) => (
                <li key={k} aria-hidden={k >= names.length || undefined} className="flex items-center gap-10 whitespace-nowrap text-[15px] font-semibold text-white/85"><Link href={`/products/${categories[k % categories.length].slug}`} tabIndex={k >= names.length ? -1 : 0} className="transition-colors hover:text-cyan">{n}</Link><span className="h-1.5 w-1.5 rounded-full bg-cyan/70" aria-hidden="true" /></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
