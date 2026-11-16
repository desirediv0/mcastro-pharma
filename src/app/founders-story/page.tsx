import { Award, Compass, Eye, GraduationCap, TrendingUp, UserRound } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { PartnerCTA } from '@/components/layout/partner-cta'
import { Photo } from '@/components/ui/photo'
import { ImageReveal, Reveal, Stagger, StaggerItem } from '@/components/ui/motion'
import { founder, founderSections, peopleStory, values } from '@/data/content'
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

      {/* The founder */}
      <section className="py-14 lg:py-20" aria-labelledby="founder-h">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <ImageReveal className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-ice to-sky shadow-[0_40px_80px_-40px_rgba(9,43,76,.55)] ring-1 ring-mist">
                {founder.photo ? (
                  <img src={founder.photo} alt={founder.name ?? 'Founder of McASTRO PHARMA LLP'} className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full place-items-center p-8 text-center">
                    <div>
                      <span className="mx-auto grid h-24 w-24 place-items-center rounded-full border-2 border-dashed border-royal/40 text-royal/60"><UserRound className="h-12 w-12" strokeWidth={1.2} aria-hidden="true" /></span>
                      <p className="mt-5 text-[15px] font-semibold uppercase tracking-[.14em] text-royal/70">Founder photograph</p>
                    </div>
                  </div>
                )}
              </ImageReveal>
              <div className="mt-5 rounded-2xl bg-navy p-6 text-white">
                <p className="font-display text-2xl leading-tight">{founder.name ?? 'Our Founder'}</p>
                <p className="mt-1 text-[15px] font-semibold uppercase tracking-[.12em] text-cyan">{founder.role}</p>
              </div>
            </div>

            <div>
              <Reveal><p className="eyebrow">Founder’s Story</p></Reveal>
              <Reveal delay={0.06}><h2 id="founder-h" className="h-display mt-5 text-[clamp(2.6rem,4.2vw,3.8rem)]">From the field to <em>founding McASTRO.</em></h2></Reveal>
              <Reveal delay={0.12}><p className="mt-6 text-xl leading-relaxed text-navy/85">{founder.lead}</p></Reveal>

              <ul className="mt-8 grid grid-cols-2 gap-3">
                {founder.highlights.map((h, i) => (
                  <Reveal key={h.v} delay={0.14 + i * 0.05}>
                    <li className="h-full rounded-2xl border border-mist bg-ice p-5">
                      <p className="font-display text-3xl leading-none text-royal">{h.v}</p>
                      <p className="mt-2 text-[15px] leading-snug text-slate">{h.l}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <ol className="relative mt-12 space-y-8 border-l-2 border-sky pl-8 sm:pl-10">
                {founder.steps.map((s, i) => {
                  const I = [GraduationCap, Compass, Award, TrendingUp, UserRound][i] ?? Award
                  return (
                    <Reveal key={s.title} delay={i * 0.05}>
                      <li className="relative">
                        <span className="absolute -left-[3.15rem] top-0 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-royal to-cyan text-white ring-4 ring-white sm:-left-[3.4rem]"><I className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></span>
                        <p className="text-[14px] font-bold uppercase tracking-[.16em] text-cyan">{s.tag}</p>
                        <h3 className="mt-1 font-display text-[1.7rem] leading-tight text-navy">{s.title}</h3>
                        <p className="mt-3 text-lg leading-relaxed text-slate">{s.body}</p>
                      </li>
                    </Reveal>
                  )
                })}
              </ol>

              <Reveal delay={0.1}>
                <blockquote className="mt-12 rounded-2xl border-l-4 border-cyan bg-navy p-8 text-xl leading-relaxed text-white/95 lg:p-10">{founder.closing}</blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction + beginning */}
      <section className="py-14 lg:py-20">
        <div className="wrap grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <ImageReveal className="relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-[0_40px_80px_-40px_rgba(9,43,76,.55)] lg:sticky lg:top-32 lg:self-start">
            <Photo photo={photos.pharmacy} position="25% 50%" sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 to-transparent p-8 pt-14"><p className="font-display text-3xl text-white">McASTRO PHARMA LLP</p><p className="mt-1 text-sm font-semibold uppercase tracking-[.16em] text-white/75">Since 1999</p></div>
          </ImageReveal>
          <div>
            <Reveal><p className="eyebrow">{beginning.title} · 1999</p></Reveal>
            <Reveal delay={0.06}><h2 className={H2}>Where the journey <em>began.</em></h2></Reveal>
            <Reveal delay={0.12}><p className="mt-7 text-xl leading-relaxed text-navy/85">{beginning.body}</p></Reveal>
            <Reveal delay={0.16}><p className="mt-5 text-lg leading-relaxed text-slate">The first headquarters were Jabalpur, Bilaspur and Durg. From there the company kept expanding its area of operations and its product basket, year on year.</p></Reveal>
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

      {/* People */}
      <section className="bg-ice py-14 lg:py-20">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div><Reveal><p className="eyebrow">Our people</p></Reveal><Reveal delay={0.06}><h2 className={H2}>{peopleStory.title}</h2></Reveal></div>
          <div className="space-y-6">{peopleStory.paragraphs.map((p, i) => <Reveal key={i} delay={0.08 + i * 0.06}><p className="text-xl leading-relaxed text-slate">{p}</p></Reveal>)}</div>
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
