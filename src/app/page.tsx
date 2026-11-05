import { Hero } from '@/components/home/hero'
import { CategoryShowcase, FeaturedProducts, FounderPreview, Intro, MilestonesStrip, PresenceBand, QualityBand, WhyChoose } from '@/components/home/sections'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'McASTRO PHARMA LLP | Advancing Healthcare Through Quality & Innovation',
  description: 'McASTRO PHARMA LLP delivers trusted pharmaceutical solutions through quality-focused products and a diverse portfolio across 21 therapeutic categories. Explore our products or partner with us.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FounderPreview />
      <MilestonesStrip />
      <CategoryShowcase />
      <FeaturedProducts />
      <QualityBand />
      <PresenceBand />
      <WhyChoose />
      <PartnerCTA />
    </>
  )
}
