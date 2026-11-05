import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { Photo } from '@/components/ui/photo'
import { ImageReveal, Reveal } from '@/components/ui/motion'
import { productionSteps, qualitySections } from '@/data/content'
import { photos, type Photo as P } from '@/data/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Committed to Quality-Focused Pharmaceutical Processes',
  description: 'How McASTRO PHARMA LLP approaches quality commitment, production processes, quality control, manufacturing standards and continuous improvement.',
  path: '/quality-production',
})

const pics: [P, string][] = [[photos.qcLab, '65% 45%'], [photos.tabletLine, '60% 50%'], [photos.labTeam, '55% 50%'], [photos.cleanroom, '60% 50%'], [photos.labInterior, '45% 50%']]

export default function Quality() {
  return (
    <>
      <PageHero eyebrow="Our Quality Production" title={<>Committed to <em>Quality-Focused</em> Pharmaceutical Processes</>} intro="Quality is an important part of pharmaceutical business responsibility. We value structured processes, attention to standards and a consistent focus on product quality." crumbs={[{ name: 'Quality Production', path: '/quality-production' }]} photo={photos.tabletLine} position="75% 50%" />

      {qualitySections.map((q, i) => {
        const [photo, pos] = pics[i]
        const flip = i % 2 === 1
        return (
          <section key={q.title} className={i % 2 ? 'bg-gradient-to-b from-ice to-sky/50' : 'bg-white'}>
            <div className={`wrap grid items-center gap-12 py-12 lg:grid-cols-2 lg:gap-24 lg:py-20 ${flip ? '' : ''}`}>
              <div className={flip ? 'lg:order-2' : ''}>
                <Reveal><p className="eyebrow">0{i + 1}</p></Reveal>
                <Reveal delay={0.06}><h2 className="h-display mt-5 text-[clamp(2.4rem,3.6vw,3.3rem)]">{q.title}</h2></Reveal>
                <Reveal delay={0.12}><p className="mt-6 max-w-lg text-xl leading-relaxed text-slate">{q.body}</p></Reveal>
              </div>
              <ImageReveal className={`relative aspect-[16/11] overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(9,43,76,.55)] ${flip ? 'lg:order-1' : ''}`}><Photo photo={photo} position={pos} sizes="(min-width: 1024px) 45vw, 100vw" /></ImageReveal>
            </div>
          </section>
        )
      })}

      <section className="on-dark relative isolate overflow-hidden bg-midnight py-14 lg:py-20">
        <div className="absolute inset-0 -z-10"><Photo photo={photos.cleanroom} position="center" sizes="100vw" className="opacity-15 mix-blend-luminosity" /></div>
        <div className="grid-lines absolute inset-0 -z-10 opacity-30" />
        <div className="wrap relative">
          <Reveal><p className="eyebrow light">Production process</p></Reveal>
          <Reveal delay={0.06}><h2 className="h-display light mt-5 max-w-2xl text-[clamp(2.4rem,3.8vw,3.4rem)]">From material to <em>medicine.</em></h2></Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {productionSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} className="rounded-xl border border-white/15 bg-white/[.06] p-7 backdrop-blur-sm"><p className="font-display text-6xl italic text-cyan">{s.n}</p><h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3><p className="mt-2 leading-relaxed text-white/75">{s.body}</p></Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14">
        <div className="wrap max-w-4xl">
          <Reveal><p className="eyebrow">Standards &amp; compliance</p></Reveal>
          <Reveal delay={0.06}><h2 className="h-display mt-5 text-[clamp(2.4rem,3.6vw,3.3rem)]">Our approach to standards</h2></Reveal>
          <Reveal delay={0.12}><p className="mt-6 text-xl leading-relaxed text-slate">We believe pharmaceutical credibility must be earned and evidenced. Licences, certifications and regulatory approvals are published only when they are verified, and partners are welcome to ask us for documentation directly.</p></Reveal>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}
