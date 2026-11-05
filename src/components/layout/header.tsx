'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, Milestone, UserRound, X } from 'lucide-react'
import { Logo } from './logo'
import { navMain } from '@/data/navigation'
import { categories, categoryGroups } from '@/data/categories'
import { categoryCount } from '@/data/products'
import { CategoryGlyph } from '../ui/art'
import { Photo } from '../ui/photo'
import { photos } from '@/data/images'

type Open = null | 'about' | 'products'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState<Open>(null)
  const [mobile, setMobile] = useState(false)
  const [mobileSub, setMobileSub] = useState<Open>(null)
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const openedByHover = useRef<Open>(null)

  useEffect(() => { setOpen(null); setMobile(false) }, [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(null); setMobile(false) } }
    window.addEventListener('keydown', esc); return () => window.removeEventListener('keydown', esc)
  }, [])
  useEffect(() => { document.body.style.overflow = mobile ? 'hidden' : '' }, [mobile])

  const hover = (v: Open) => { if (closeTimer.current) clearTimeout(closeTimer.current); openedByHover.current = v; setOpen(v) }
  const toggle = (v: Open) => { if (openedByHover.current === v) { openedByHover.current = null; setOpen(v) } else setOpen(open === v ? null : v) }
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(null), 140) }
  const isActive = (href: string, label: string) => {
    if (href === '/') return pathname === '/'
    if (label === 'About Us') return pathname.startsWith('/founders-story') || pathname.startsWith('/milestones')
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-[0_1px_0_rgba(10,36,71,.08),0_12px_32px_-18px_rgba(10,36,71,.25)] backdrop-blur-xl' : 'bg-white'}`} onMouseLeave={leave}>
      <div className="wrap flex h-[76px] items-center justify-between gap-4 lg:h-[92px]">
        <Logo className="w-[190px] shrink-0 sm:w-[220px] lg:w-[220px] 2xl:w-[250px]" />

        <nav aria-label="Primary" className="hidden items-center gap-0 xl:flex">
          {navMain.filter((n) => !['Partner With Us', 'Contact'].includes(n.label)).map((n) => {
            const hasMenu = Boolean(n.children || n.mega)
            const key: Open = n.label === 'About Us' ? 'about' : n.label === 'Categories' ? 'products' : null
            const active = isActive(n.href, n.label)
            if (!hasMenu) return <Link key={n.label} href={n.href} aria-current={active ? 'page' : undefined} onMouseEnter={() => hover(null)} className={`nav-link relative whitespace-nowrap px-2.5 py-2 text-[15px] font-semibold transition-colors 2xl:px-3.5 2xl:text-[16px] ${active ? 'text-royal' : 'text-navy/80 hover:text-royal'}`}>{n.label}{active && <motion.span layoutId="nav-ul" className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-cyan" />}</Link>
            return (
              <div key={n.label} onMouseEnter={() => hover(key)} className="relative">
                <button type="button" aria-expanded={open === key} aria-haspopup="true" onClick={() => toggle(key)} onFocus={() => hover(key)} className={`nav-link relative flex items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[15px] font-semibold transition-colors 2xl:px-3.5 2xl:text-[16px] ${active || open === key ? 'text-royal' : 'text-navy/80 hover:text-royal'}`}>
                  {n.label}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                  {active && <motion.span layoutId="nav-ul" className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-cyan" />}
                </button>
                {key === 'about' && (
                  <AnimatePresence>
                    {open === 'about' && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }} className="absolute left-0 top-full w-[330px] rounded-xl border border-mist bg-white p-2.5 shadow-[0_30px_60px_-20px_rgba(10,36,71,.35)]">
                        {n.children?.map((c) => (
                          <Link key={c.href} href={c.href} className="group flex items-start gap-3 rounded-lg px-4 py-3.5 transition-colors hover:bg-ice">
                            <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky text-royal transition-colors group-hover:bg-royal group-hover:text-white">{c.label.startsWith('Founder') ? <UserRound className="h-5 w-5" aria-hidden="true" /> : <Milestone className="h-5 w-5" aria-hidden="true" />}</span>
                            <span><span className="block text-[16px] font-semibold text-navy">{c.label}</span><span className="mt-0.5 block text-[14px] leading-snug text-slate">{c.label.startsWith('Founder') ? 'Vision, philosophy and values' : 'Our journey of progress'}</span></span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link href="/contact" onMouseEnter={() => hover(null)} className={`nav-link relative whitespace-nowrap px-2.5 py-2 text-[15px] font-semibold 2xl:px-3.5 2xl:text-[16px] ${pathname === '/contact' ? 'text-royal' : 'text-navy/80 hover:text-royal'}`}>Contact</Link>
          <span className="mx-1 h-7 w-px bg-mist" aria-hidden="true" /><Link href="/partner-with-us" className="btn btn-primary !px-6 !py-3.5 whitespace-nowrap 2xl:!px-7">Partner With Us<ArrowRight aria-hidden="true" /></Link>
        </div>

        <button type="button" className="grid h-11 w-11 place-items-center text-navy xl:hidden" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} onClick={() => setMobile((v) => !v)}>
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {open === 'products' && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} onMouseEnter={() => hover('products')} className="absolute inset-x-0 top-full hidden border-t border-mist bg-white shadow-[0_40px_70px_-30px_rgba(10,36,71,.45)] xl:block">
            <div className="wrap grid grid-cols-[320px_1fr] gap-12 py-10">
              <div className="on-dark relative isolate flex flex-col overflow-hidden rounded-xl bg-navy p-8 text-white">
                <div className="absolute inset-0 -z-10"><Photo photo={photos.pharmacy} position="40% 50%" sizes="320px" className="opacity-30 mix-blend-luminosity" /></div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/60 to-navy" />
                <p className="eyebrow light">Portfolio</p>
                <p className="h-display light mt-4 text-[2.1rem] leading-[1.08]">{categories.length} product categories</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/75">Browse the McASTRO PHARMA portfolio by therapeutic category.</p>
                <Link href="/products" className="btn btn-light mt-7 w-full whitespace-nowrap !px-5">All Categories<ArrowRight aria-hidden="true" /></Link>
              </div>
              <div className="grid grid-cols-4 gap-x-7">
                {categoryGroups.map((g) => (
                  <div key={g}>
                    <p className="mb-3 flex items-center gap-2 border-b border-mist pb-3 text-[13px] font-bold uppercase tracking-[.14em] text-brand"><span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />{g}</p>
                    <ul>
                      {categories.filter((c) => c.group === g).map((c) => (
                        <li key={c.slug}>
                          <Link href={`/products/${c.slug}`} className="group flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-[15.5px] font-medium text-navy/90 transition-colors hover:bg-ice hover:text-royal">
                            <CategoryGlyph name={c.icon} className="h-[18px] w-[18px] shrink-0 text-cyan transition-transform group-hover:scale-110" />
                            <span className="flex-1 leading-snug">{c.name}</span>
                            <span className="min-w-6 rounded-md bg-ice px-1.5 py-0.5 text-center text-[13px] font-semibold text-slate transition-colors group-hover:bg-royal group-hover:text-white">{categoryCount(c.slug)}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobile && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 top-[76px] z-40 bg-midnight/50 xl:hidden" onClick={() => setMobile(false)} />
            <motion.nav aria-label="Mobile" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }} className="fixed bottom-0 right-0 top-[76px] z-50 w-[min(92vw,400px)] overflow-y-auto bg-white p-6 shadow-2xl xl:hidden">
              <ul className="divide-y divide-mist">
                {navMain.map((n) => {
                  const key: Open = n.label === 'About Us' ? 'about' : n.label === 'Categories' ? 'products' : null
                  if (!key) return <li key={n.label}><Link href={n.href} className={`block py-4 text-lg font-semibold ${isActive(n.href, n.label) ? 'text-royal' : 'text-navy'}`}>{n.label}</Link></li>
                  return (
                    <li key={n.label}>
                      <button type="button" aria-expanded={mobileSub === key} onClick={() => setMobileSub(mobileSub === key ? null : key)} className="flex w-full items-center justify-between py-4 text-lg font-semibold text-navy">
                        {n.label}<ChevronDown className={`h-5 w-5 transition-transform ${mobileSub === key ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileSub === key && (
                          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-3">
                            {key === 'about' && n.children?.map((c) => <li key={c.href}><Link href={c.href} className="block py-2.5 pl-3 text-[15px] text-slate">{c.label}</Link></li>)}
                            {key === 'products' && (<>
                              <li><Link href="/products" className="block py-2.5 pl-3 text-[15px] font-semibold text-royal">All Categories</Link></li>
                              {categories.map((c) => <li key={c.slug}><Link href={`/products/${c.slug}`} className="flex justify-between py-2 pl-3 text-[15px] text-slate">{c.name}<span className="text-xs">{categoryCount(c.slug)}</span></Link></li>)}
                            </>)}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-6 grid gap-3">
                <Link href="/partner-with-us" className="btn btn-primary">Partner With Us<ArrowRight aria-hidden="true" /></Link>
                <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
