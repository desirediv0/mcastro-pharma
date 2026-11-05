import { Compass, Eye } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { Photo } from '@/components/ui/photo'
import { ImageReveal, Reveal, Stagger, StaggerItem } from '@/components/ui/motion'
import { founderSections, values } from '@/data/content'
import { photos } from '@/data/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'The Vision Behind McASTRO PHARMA',
  description: 'The vision, philosophy and commitment behind McASTRO PHARMA LLP: pharmaceutical business development, portfolio growth and meaningful professional relationships.',
  path: '/founders-story',
})

const H2 = 'h-display mt-5 text-[clamp(2.4rem,3.6vw,3.3rem)]'

export default function FoundersStory() {
  const [beginning, vision, philosophy, commitment, ahead] = founderSections
  return (
    <>
      <PageHero eyebrow="Founder’s Story" title={<>The Vision Behind <em>McASTRO PHARMA</em></>} intro="Every successful journey begins with a vision and a commitment to creating lasting value. McASTRO PHARMA LLP represents a journey of pharmaceutical business development, product portfolio growth and meaningful professional relationships." crumbs={[{ name: 'Founder’s Story', path: '/founders-story' }]} photo={photos.labInterior} position="40% 50%" />

      {/* Introduction + beginning */}
      <section className="py-14 lg:py-20">
        <div className="wrap grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(9,43,76,.55)] lg:sticky lg:top-32 lg:self-start">
            <Photo photo={photos.pharmacy} position="25% 50%" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 to-transparent p-8 pt-14"><p className="font-display text-3xl text-white">McASTRO PHARMA LLP</p><p className="mt-1 text-sm font-semibold uppercase tracking-[.16em] text-white/75">Leadership</p></div>
          </ImageReveal>
          <div>
            <Reveal><p className="eyebrow">01 · {beginning.title}</p></Reveal>
            <Reveal delay={0.06}><h2 className={H2}>Where the journey <em>began.</em></h2></Reveal>
            <Reveal delay={0.12}><p className="mt-7 text-xl leading-relaxed text-navy/85">{beginning.body}</p></Reveal>
            <Reveal delay={0.16}><p className="mt-5 text-lg leading-relaxed text-slate">This page will carry the founder’s own words, background and photograph as soon as they are approved for publication. Until then it tells the story the company can stand behind: a commitment to build with care.</p></Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-10 rounded-xl border-l-4 border-cyan bg-ice p-8 font-display text-[1.7rem] italic leading-snug text-navy/90">Quality products, honest relationships and steady growth: the foundations on which McASTRO PHARMA is built.</blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision + philosophy */}
      <section className="on-dark relative isolate overflow-hidden bg-midnight py-14 lg:py-20">
        <div className="absolute inset-0 -z-10"><Photo photo={photos.cleanroom} position="center" sizes="100vw" className="opacity-20 mix-blend-luminosity" /></div>
        <div className="grid-lines absolute inset-0 -z-10 opacity-30" />
        <div className="wrap relative grid gap-5 lg:grid-cols-2">
          {[{ I: Eye, t: vision.title, b: vision.body }, { I: Compass, t: philosophy.title, b: philosophy.body }].map(({ I, t, b }, i) => (
            <Reveal key={t} delay={i * 0.08} className="rounded-xl border border-white/15 bg-white/[.06] p-9 backdrop-blur-sm lg:p-14">
              <I className="h-10 w-10 text-cyan" strokeWidth={1.2} aria-hidden="true" />
              <h2 className="h-display light mt-7 text-5xl">{t}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">{b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Commitment + values */}
      <section className="py-14 lg:py-20">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div><Reveal><p className="eyebrow">{commitment.title}</p></Reveal><Reveal delay={0.06}><h2 className={H2}>Responsible practice, <em>every day.</em></h2></Reveal></div>
            <Reveal delay={0.1}><p className="text-xl leading-relaxed text-slate">{commitment.body}</p></Reveal>
          </div>
          <Reveal><p className="eyebrow mt-24">Core values</p></Reveal>
          <Stagger className="mt-8 grid gap-4 md:grid-cols-2">
            {values.map((v, i) => (
              <StaggerItem key={v.title} className="flex gap-5 rounded-xl border border-mist bg-white p-6 shadow-[0_14px_36px_-24px_rgba(9,43,76,.3)] sm:p-8">
                <span className="font-display text-5xl italic leading-none text-cyan sm:text-6xl">{String(i + 1).padStart(2, '0')}</span>
                <div className="min-w-0"><h3 className="font-display text-[1.8rem] text-navy">{v.title}</h3><p className="mt-2 text-lg leading-relaxed text-slate">{v.body}</p></div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Future */}
      <section className="bg-gradient-to-b from-sky/70 to-ice py-14">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <ImageReveal className="relative aspect-[16/11] overflow-hidden rounded-[20px]"><Photo photo={photos.qcLab} position="65% 45%" sizes="(min-width: 1024px) 45vw, 100vw" /></ImageReveal>
          <div><Reveal><p className="eyebrow">{ahead.title}</p></Reveal><Reveal delay={0.06}><h2 className={H2}>The journey <em>continues.</em></h2></Reveal><Reveal delay={0.12}><p className="mt-6 text-xl leading-relaxed text-slate">{ahead.body}</p></Reveal></div>
        </div>
      </section>
      <PartnerCTA />
    </>
  )
}
