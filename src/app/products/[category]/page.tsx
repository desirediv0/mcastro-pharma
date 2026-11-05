import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { CategoryPanel } from '@/components/products/category-panel'
import { ProductCard } from '@/components/products/product-card'
import { CategoryGlyph, tones } from '@/components/ui/art'
import { Photo } from '@/components/ui/photo'
import { Reveal, ImageReveal } from '@/components/ui/motion'
import { categories, getCategory, heroDesc, heroTitle } from '@/data/categories'
import { categoryCount, productsByCategory } from '@/data/products'
import { categoryPhoto } from '@/data/images'
import { pageMeta } from '@/lib/seo'

type Params = { category: string }

export const dynamicParams = false
export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params
  const c = getCategory(category)
  if (!c) return {}
  const n = categoryCount(c.slug)
  return pageMeta({
    title: heroTitle(c),
    description: `${c.name} range from McASTRO PHARMA LLP: ${n} product${n === 1 ? '' : 's'} listed with composition and packing. ${c.short}`,
    path: `/products/${c.slug}`,
  })
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params
  const c = getCategory(category)
  if (!c) notFound()
  const products = productsByCategory(c.slug)
  const pending = products.filter((p) => p.pending).length
  const idx = categories.findIndex((x) => x.slug === c.slug)
  const t = tones[c.tone]
  const hero = categoryPhoto(idx)
  const side = categoryPhoto(idx + 3)
  const flip = idx % 2 === 1
  const related = [...categories.filter((x) => x.slug !== c.slug && x.group === c.group), ...categories.filter((x) => x.slug !== c.slug && x.group !== c.group)].slice(0, 4)

  return (
    <>
      {/* Hero: category-specific photo crop with a tone-coloured overlay */}
      <section className="on-dark relative isolate overflow-hidden bg-midnight">
        <div className={`absolute inset-y-0 w-full lg:w-[60%] ${flip ? 'left-0' : 'right-0'}`}>
          <Photo photo={hero.photo} position={hero.position} priority sizes="(min-width: 1024px) 60vw, 100vw" />
          <div className="absolute inset-0 mix-blend-multiply" style={{ background: `linear-gradient(120deg, ${t.from}d9, ${t.to}8c)` }} />
          <div className={`absolute inset-0 from-midnight via-midnight/70 to-transparent ${flip ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}`} />
        </div>
        <div className="grid-lines absolute inset-0 opacity-25" />
        <div className={`wrap relative flex min-h-[440px] flex-col justify-center py-10 lg:min-h-[520px] ${flip ? 'lg:items-end lg:text-left' : ''}`}>
          <div className={flip ? 'w-full lg:max-w-2xl lg:self-end' : 'max-w-2xl'}>
            <Breadcrumbs light items={[{ name: 'Categories', path: '/products' }, { name: c.name, path: `/products/${c.slug}` }]} />
            <Reveal className="mt-10"><p className="eyebrow light">Category {String(idx + 1).padStart(2, '0')} / {categories.length}</p></Reveal>
            <Reveal delay={0.08}><h1 className="h-display light mt-5 text-[clamp(2.7rem,5vw,4.5rem)]">{heroTitle(c)}</h1></Reveal>
            <Reveal delay={0.16}><p className="mt-6 text-lg leading-relaxed text-white/85 lg:text-xl">{heroDesc(c)}</p></Reveal>
            <Reveal delay={0.24} className="mt-8 inline-flex items-center gap-4 rounded-xl border border-white/25 bg-white/10 px-6 py-4 backdrop-blur-md">
              <CategoryGlyph name={c.icon} className="h-9 w-9 text-white" />
              <div><p className="font-display text-4xl leading-none text-white">{products.length}</p><p className="mt-1 text-[13px] font-bold uppercase tracking-[.14em] text-white/80">Product{products.length === 1 ? '' : 's'} in this category</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 lg:py-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className={flip ? 'lg:order-2' : ''}>
            <Reveal><p className="eyebrow">Category overview</p></Reveal>
            <Reveal delay={0.08}><h2 className="h-display mt-5 text-[clamp(2.3rem,3.4vw,3.2rem)]">About our <em>{c.name.toLowerCase()}</em> range</h2></Reveal>
            <Reveal delay={0.14}><p className="mt-6 text-lg leading-relaxed text-slate lg:text-xl">{c.intro}</p></Reveal>
            <Reveal delay={0.2}><Link href="/partner-with-us" className="link-arrow mt-8">Enquire about this range<ArrowRight aria-hidden="true" /></Link></Reveal>
          </div>
          <ImageReveal className={`relative aspect-[16/11] overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(9,43,76,.5)] ${flip ? 'lg:order-1' : ''}`}>
            <Photo photo={side.photo} position={side.position} sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute inset-0 mix-blend-multiply" style={{ background: `linear-gradient(140deg, ${t.from}66, transparent)` }} />
          </ImageReveal>
        </div>
      </section>

      {/* Product list */}
      <section className="bg-gradient-to-b from-ice to-white pb-12 pt-10 lg:pb-20" aria-labelledby="listing-h">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <h2 id="listing-h" className="h-display text-[clamp(2rem,3vw,2.8rem)]">{c.name} <span className="text-brand">· {products.length}</span></h2>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-slate">Product catalogue</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => <ProductCard key={p.id} p={p} showCategory={false} />)}
          </div>
          {pending > 0 && <p className="mt-8 max-w-3xl text-base text-slate">{pending} listing{pending === 1 ? ' is' : 's are'} included as per the company catalogue; composition and packing {pending === 1 ? 'is' : 'are'} pending verification. Please <Link href="/contact" className="font-semibold text-royal underline">contact us</Link> for confirmed details.</p>}
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate/85">Product information is provided for trade reference and may change. This website is informational only. It is not medical advice and does not sell medicines.</p>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ice py-12 lg:py-16">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4"><h2 className="h-display text-[clamp(2rem,3vw,2.8rem)]">Related categories</h2><Link href="/products" className="link-arrow">All categories<ArrowRight aria-hidden="true" /></Link></div>
          <div className="mt-10 grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => <CategoryPanel key={r.slug} c={r} index={categories.findIndex((x) => x.slug === r.slug)} size="xs" />)}
          </div>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}
