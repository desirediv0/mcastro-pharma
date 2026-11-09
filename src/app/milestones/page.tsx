import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { Photo } from '@/components/ui/photo'
import { ImageReveal, Reveal } from '@/components/ui/motion'
import { milestones } from '@/data/content'
import { photos, type Photo as P } from '@/data/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Our Journey of Progress',
  description: 'The McASTRO PHARMA LLP journey since 1999: from a single product, Delphi-L, and three headquarters to a wide portfolio and a growing team across Madhya Pradesh, Chhattisgarh and Maharashtra.',
  path: '/milestones',
})

const pics: [P, string][] = [[photos.labInterior, '40% 50%'], [photos.pharmacy, '50% 40%'], [photos.warehouse, 'center'], [photos.tabletLine, '70% 50%']]

export default function Milestones() {
  return (
    <>
      <PageHero eyebrow="Milestones" title={<>Our Journey of <em>Progress</em></>} intro="Since 1999, McASTRO has grown from one product and three headquarters into a wider portfolio and a bigger family, with one mission: quality medicine at affordable prices." crumbs={[{ name: 'Milestones', path: '/milestones' }]} photo={photos.cleanroom} position="60% 50%" />
      <section className="on-dark bg-navy" aria-label="Journey at a glance"><div className="wrap grid grid-cols-2 gap-y-6 py-8 lg:grid-cols-4 lg:divide-x lg:divide-white/15 lg:py-10">{[['1999','Year the journey began'],['1 + 3','Product and headquarters at the start'],['3 → 30+','MSRs by 2010'],['30–35','Products by 2010']].map(([v,l]) => <div key={l} className="px-4 text-center"><p className="font-display text-4xl leading-none text-white lg:text-5xl">{v}</p><p className="mt-3 text-[14px] font-semibold uppercase tracking-[.1em] text-cyan">{l}</p></div>)}</div></section>
      <section className="py-14 lg:py-20">
        <div className="wrap">
          <ol className="relative">
            <span className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-royal via-cyan to-transparent lg:left-1/2" aria-hidden="true" />
            {milestones.map((m, i) => {
              const right = i % 2 === 1
              const [photo, pos] = pics[i % pics.length]
              return (
                <li key={m.title} className="relative grid items-center gap-8 pb-16 pl-14 last:pb-0 lg:grid-cols-2 lg:gap-24 lg:pl-0">
                  <span className="absolute left-5 top-6 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-royal bg-white ring-[6px] ring-sky lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2" aria-hidden="true" />
                  <Reveal y={30} className={right ? 'lg:order-2' : 'lg:text-right'}>
                    <p className={`font-display leading-[.9] text-sky [-webkit-text-stroke:1.5px_var(--color-royal)] ${m.year.length > 5 ? 'text-[clamp(3.4rem,6.4vw,5.6rem)]' : 'text-[clamp(5rem,9vw,8rem)]'}`}>{m.year}</p>
                    <p className="mt-5 text-[13px] font-bold uppercase tracking-[.2em] text-cyan">{m.group}</p>
                    <h2 className="mt-2 font-display text-[2.2rem] leading-tight text-navy">{m.title}</h2>
                    <p className={`mt-4 max-w-lg text-lg leading-relaxed text-slate ${right ? '' : 'lg:ml-auto'}`}>{m.body}</p>
                    {m.chips && <ul className={`mt-5 flex max-w-lg flex-wrap gap-2 ${right ? '' : 'lg:ml-auto lg:justify-end'}`}>{m.chips.map((c) => <li key={c} className="rounded-md bg-sky px-2.5 py-1 text-[14px] font-semibold text-royal">{c}</li>)}</ul>}
                  </Reveal>
                  <ImageReveal className={`relative aspect-[16/10] overflow-hidden rounded-xl shadow-[0_30px_60px_-34px_rgba(9,43,76,.55)] ${right ? 'lg:order-1' : ''}`}><Photo photo={photo} position={pos} sizes="(min-width: 1024px) 40vw, 90vw" /></ImageReveal>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}
