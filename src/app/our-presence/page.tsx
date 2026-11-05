import Link from 'next/link'
import { ArrowRight, Handshake, Network, Route, TrendingUp } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { ConnectionMap } from '@/components/home/sections'
import { Photo } from '@/components/ui/photo'
import { ImageReveal, Reveal } from '@/components/ui/motion'
import { presenceSections } from '@/data/content'
import { photos } from '@/data/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Connecting Through Stronger Partnerships',
  description: 'McASTRO PHARMA LLP’s distribution approach: a connected network, meaningful business relationships and a vision for expansion across India.',
  path: '/our-presence',
})

const icons = { network: Network, route: Route, handshake: Handshake, trending: TrendingUp }

export default function Presence() {
  return (
    <>
      <PageHero eyebrow="Our Presence" title={<>Connecting Through <em>Stronger Partnerships</em></>} intro="Building a strong pharmaceutical presence requires meaningful business relationships, reliable distribution connections and a commitment to long-term collaboration." crumbs={[{ name: 'Our Presence', path: '/our-presence' }]} photo={photos.warehouse} position="center 55%">
        <Link href="/partner-with-us" className="btn btn-light">Become a Partner<ArrowRight aria-hidden="true" /></Link>
      </PageHero>

      <section className="py-14 lg:py-20">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <Reveal className="relative isolate overflow-hidden rounded-[20px] bg-navy p-8 shadow-[0_40px_80px_-40px_rgba(9,43,76,.6)] lg:p-12">
            <div className="absolute inset-0 -z-10"><Photo photo={photos.warehouse} position="center" sizes="60vw" className="opacity-25 mix-blend-luminosity" /></div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy/90 to-royal/70" />
            <ConnectionMap />
          </Reveal>
          <div>
            <Reveal><p className="eyebrow">Geographical presence</p></Reveal>
            <Reveal delay={0.08}><h2 className="h-display mt-5 text-[clamp(2.4rem,3.6vw,3.3rem)]">An India-focused <em>approach.</em></h2></Reveal>
            <Reveal delay={0.14}><p className="mt-6 text-xl leading-relaxed text-slate">We build our presence through partners: distributors, stockists and wholesalers who understand their local markets. If you would like McASTRO PHARMA in your region, we would like to hear from you.</p></Reveal>
            <Reveal delay={0.2}><Link href="/partner-with-us" className="btn btn-primary mt-9">Enquire About Your Region<ArrowRight aria-hidden="true" /></Link></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-ice to-sky/60 py-14">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {presenceSections.map((s, i) => {
            const I = icons[s.icon]
            return (
              <Reveal key={s.title} delay={i * 0.06} className={`rounded-xl border border-mist bg-white p-9 shadow-[0_14px_36px_-24px_rgba(9,43,76,.3)] lg:p-12 ${i % 2 ? 'md:translate-y-8' : ''}`}>
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-royal to-cyan text-white"><I className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" /></span>
                <h3 className="mt-7 font-display text-[2rem] text-navy">{s.title}</h3><p className="mt-3 max-w-md text-lg leading-relaxed text-slate">{s.body}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <ImageReveal className="relative aspect-[16/11] overflow-hidden rounded-[20px]"><Photo photo={photos.pharmacy} position="60% 50%" sizes="(min-width: 1024px) 45vw, 100vw" /></ImageReveal>
          <div><p className="eyebrow">Business expansion</p><h2 className="h-display mt-5 text-[clamp(2.2rem,3.3vw,3rem)]">Opening doors to <em>new partnerships.</em></h2><p className="mt-6 text-xl leading-relaxed text-slate">Expansion happens one relationship at a time. We welcome enquiries from distributors and stockists who share our focus on quality and long-term collaboration.</p></div>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}
