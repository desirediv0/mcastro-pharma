import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { CategoryPanel } from '@/components/products/category-panel'
import { ProductCard } from '@/components/products/product-card'
import { CategoryGlyph } from '@/components/ui/art'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/motion'
import { categories } from '@/data/categories'
import { allProducts, categoryCount, portfolioStats } from '@/data/products'
import { featuredProducts } from '@/data/featured-products'
import { photos } from '@/data/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Pharmaceutical Product Portfolio',
  description: `Browse the McASTRO PHARMA product portfolio across ${portfolioStats.categories} therapeutic categories, including antibiotics, cough syrup, anti-hypertensive, gastro care, anti-diabetic, neuropathy and nutraceuticals.`,
  path: '/products',
})

export default function ProductsPage() {
  const forms = new Set(allProducts.map((p) => p.form).filter(Boolean))
  const stats = [
    { v: portfolioStats.categories, l: 'Product categories' },
    { v: portfolioStats.products, l: 'Products listed' },
    { v: forms.size, l: 'Dosage forms' },
    { v: Math.max(...categories.map((c) => categoryCount(c.slug))), l: 'Products in our largest category' },
  ]
  return (
    <>
      <PageHero eyebrow="Product Portfolio" title={<>Product <em>Categories</em></>} intro={`A diverse range of pharmaceutical products organised across ${portfolioStats.categories} categories and multiple formulations. Open a category to see every product with its photo, composition and packing.`} crumbs={[{ name: 'Categories', path: '/products' }]} photo={photos.pharmacy} position="40% 50%">
        <Link href="#categories" className="btn btn-light">Browse Categories<ArrowRight aria-hidden="true" /></Link>
        <Link href="/partner-with-us" className="btn btn-outline-light">Partner With Us</Link>
      </PageHero>

      <section id="categories" className="py-12 lg:py-20">
        <div className="wrap">
          <Reveal><p className="eyebrow !text-[14px]">All categories</p></Reveal>
          <Reveal delay={0.06}><h2 className="h-display mt-5 max-w-3xl text-[clamp(2.6rem,4.2vw,3.8rem)]">Choose a <em>product category</em></h2></Reveal>
          <Stagger className="mt-10 grid auto-rows-[320px] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[340px]">
            {categories.map((c, i) => <StaggerItem key={c.slug}><CategoryPanel c={c} index={i} size="md" /></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-midnight py-12 lg:py-16">
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="wrap relative">
          <p className="eyebrow light">Portfolio at a glance</p>
          <dl className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-xl border border-white/12 bg-white/[.05] p-7 lg:p-9"><dd className="font-display text-6xl text-white lg:text-7xl">{s.v}</dd><dt className="mt-3 text-[15px] font-semibold uppercase tracking-[.12em] text-white/80">{s.l}</dt></div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-white/50">Counts are calculated from the product catalogue.</p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="wrap">
          <Reveal><p className="eyebrow">Featured products</p></Reveal>
          <Reveal delay={0.06}><h2 className="h-display mt-5 text-[clamp(2.6rem,4.2vw,3.8rem)]">Featured Across Our <em>Product Portfolio</em></h2></Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.slice(0, 9).map((p) => <StaggerItem key={p.id}><ProductCard p={p} /></StaggerItem>)}
          </Stagger>
          <p className="mt-10 text-lg text-slate">Every product is listed inside its category page. <Link href="/products/antibiotics" className="link-arrow ml-2">Start with antibiotics<ArrowRight aria-hidden="true" /></Link></p>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}
