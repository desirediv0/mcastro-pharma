'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { productImages } from '@/data/product-images'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { featuredProducts } from '@/data/featured-products'
import { categories } from '@/data/categories'
import { getCategory } from '@/data/categories'
import { CategoryGlyph } from '../ui/art'
import { Photo } from '../ui/photo'
import { photos } from '@/data/images'
import type { Product } from '@/data/products'

const INITIAL = 8

function Card({ p }: { p: Product }) {
  const cat = getCategory(p.category)
  const img = productImages[p.id]
  const src = img ? `/products/${img}` : null
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#d5e3ef] bg-white shadow-[0_1px_2px_rgba(9,43,76,.04),0_10px_28px_-18px_rgba(9,43,76,.25)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/70 hover:shadow-[0_22px_44px_-22px_rgba(7,84,154,.4)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-ice">
        {src ? (
          <>
            <Image src={src} alt="" aria-hidden="true" fill sizes="(min-width:1024px) 30vw, 50vw" className="scale-125 object-cover opacity-60 blur-2xl" />
            <Image src={src} alt={`${p.name.replace(/^Softgel : /, '')} pack`} fill sizes="(min-width:1024px) 30vw, 50vw" className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]" />
          </>
        ) : <div className="grid h-full place-items-center text-royal/40">{cat && <CategoryGlyph name={cat.icon} className="h-14 w-14" />}</div>}
      </div>
      <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        {cat && <span className="inline-flex items-center gap-2 rounded-md bg-sky px-2.5 py-1 text-[13px] font-bold text-royal"><CategoryGlyph name={cat.icon} className="h-4 w-4" />{cat.name}</span>}
        {p.form && <span className="text-[13px] font-semibold text-slate">{p.form}</span>}
      </div>
      <h3 className="mt-5 font-display text-[1.75rem] leading-tight tracking-tight text-navy">{p.name}</h3>
      <p className="mt-3 flex-1 text-[15.5px] leading-relaxed text-slate">{p.composition ?? 'Composition pending verification'}</p>
      <div className="mt-5 flex items-center justify-between border-t border-mist pt-4">
        <span className="text-sm text-slate">Packing</span>
        <span className="text-[15.5px] font-semibold text-navy">{p.packing ?? 'To be confirmed'}</span>
      </div>
      </div>
    </article>
  )
}

/** Featured products: intro panel + filterable card grid. No horizontal scrolling, nothing leaves the screen. */
export function FeaturedShowcase() {
  const [cat, setCat] = useState('all')
  const [all, setAll] = useState(false)
  const chips = useMemo(() => {
    const slugs = Array.from(new Set(featuredProducts.map((p) => p.category)))
    return categories.filter((c) => slugs.includes(c.slug))
  }, [])
  const filtered = featuredProducts.filter((p) => cat === 'all' || p.category === cat)
  const shown = all || cat !== 'all' ? filtered : filtered.slice(0, INITIAL)
  const hidden = filtered.length - shown.length

  return (
    <section className="bg-gradient-to-b from-ice to-sky/70 py-14 lg:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-14 xl:grid-cols-[400px_1fr]">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="on-dark relative isolate overflow-hidden rounded-[20px] bg-navy p-8 text-white shadow-[0_40px_80px_-40px_rgba(9,43,76,.7)] lg:p-10">
            <div className="absolute inset-0 -z-10"><Photo photo={photos.tabletLine} position="70% 50%" sizes="400px" className="opacity-30 mix-blend-luminosity" /></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />
            <p className="eyebrow light">Featured products</p>
            <h2 className="h-display light mt-5 text-[clamp(2.3rem,3.2vw,3rem)]">Featured Across Our <em>Product Portfolio</em></h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">Explore selected products from the McASTRO PHARMA product range.</p>
            <p className="mt-8 font-display text-6xl leading-none text-cyan">{featuredProducts.length}</p>
            <p className="mt-2 text-[13px] font-bold uppercase tracking-[.14em] text-white/70">Selected products</p>
            <Link href="/products" className="btn btn-light mt-9 w-full">View All Products<ArrowRight aria-hidden="true" /></Link>
          </div>
        </aside>

        <div className="min-w-0">
          <div role="group" aria-label="Filter featured products by category" className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={cat === 'all'} onClick={() => setCat('all')} className={`rounded-lg border px-4 py-2.5 text-[15px] font-semibold transition-colors ${cat === 'all' ? 'border-navy bg-navy text-white' : 'border-[#c9d9e8] bg-white text-navy hover:border-royal'}`}>All</button>
            {chips.map((c) => (
              <button key={c.slug} type="button" aria-pressed={cat === c.slug} onClick={() => setCat(c.slug)} className={`rounded-lg border px-4 py-2.5 text-[15px] font-semibold transition-colors ${cat === c.slug ? 'border-navy bg-navy text-white' : 'border-[#c9d9e8] bg-white text-navy hover:border-royal'}`}>{c.name}</button>
            ))}
          </div>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            <AnimatePresence initial={false} mode="popLayout">
              {shown.map((p, i) => (
                <motion.li key={p.id} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3, delay: Math.min(i, 7) * 0.03 }}>
                  <Card p={p} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {hidden > 0 && (
            <div className="mt-8 flex justify-center">
              <button type="button" onClick={() => setAll(true)} className="btn btn-ghost">Show all {filtered.length} featured products<ChevronDown aria-hidden="true" /></button>
            </div>
          )}
          {all && cat === 'all' && filtered.length > INITIAL && (
            <div className="mt-8 flex justify-center"><button type="button" onClick={() => setAll(false)} className="link-arrow">Show fewer</button></div>
          )}
        </div>
      </div>
    </section>
  )
}
