import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Handshake, Layers, ShieldCheck, TrendingUp } from 'lucide-react'
import { Reveal, ImageReveal, Stagger, StaggerItem } from '../ui/motion'
import { Photo } from '../ui/photo'
import { CategoryPanel } from '../products/category-panel'
import { categories } from '@/data/categories'
import { milestones, whyChoose } from '@/data/content'
import { photos } from '@/data/images'

const H2 = 'h-display mt-5 text-[clamp(2.5rem,3.7vw,3.4rem)]'
const LEAD = 'mt-6 max-w-xl text-lg leading-relaxed text-slate lg:text-xl'

export function Intro() {
  const pillars = [
    { I: ShieldCheck, t: 'Quality-focused processes', b: 'A commitment to quality-oriented standards.' },
    { I: Handshake, t: 'Long-term relationships', b: 'Lasting partnerships built on responsible practice.' },
    { I: TrendingUp, t: 'Continuous growth', b: 'A forward-looking approach to business development.' },
  ]
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-ice to-white py-14 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-sky/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-16 lg:grid-cols-[1.02fr_1fr] lg:gap-20">
        {/* Photo collage */}
        <div className="relative order-2 pb-14 pr-6 lg:order-1 lg:pb-16 lg:pr-12">
          <div className="absolute -left-5 -top-5 hidden h-40 w-40 rounded-[20px] border-2 border-cyan/50 lg:block" aria-hidden="true" />
          <ImageReveal className="relative aspect-[5/4.4] overflow-hidden rounded-[22px] shadow-[0_50px_90px_-45px_rgba(9,43,76,.6)] ring-1 ring-mist">
            <Photo photo={photos.labInterior} position="35% 50%" sizes="(min-width:1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
          </ImageReveal>
          <Reveal delay={0.25} className="absolute bottom-0 right-0 hidden aspect-[4/3] w-[44%] overflow-hidden rounded-[18px] border-[6px] border-white shadow-[0_30px_60px_-30px_rgba(9,43,76,.6)] sm:block">
            <Photo photo={photos.labTeam} position="60% 45%" sizes="25vw" />
          </Reveal>
          <Reveal delay={0.35} className="absolute -bottom-2 left-4 max-w-[290px] rounded-2xl bg-navy p-6 text-white shadow-[0_30px_60px_-24px_rgba(9,43,76,.7)] lg:left-8">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-white/80" />
            <p className="mt-3 font-display text-[1.45rem] leading-snug">Quality, responsibility and long-term partnership.</p>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal><p className="eyebrow">Company introduction</p></Reveal>
          <Reveal delay={0.08}><h2 className={H2}>Building Trust Through <em>Pharmaceutical Excellence</em></h2></Reveal>
          <Reveal delay={0.16}><p className={LEAD}>McASTRO PHARMA LLP is focused on developing a diverse pharmaceutical portfolio across multiple therapeutic categories. We believe in building long-term relationships through responsible business practices, quality-focused processes and a commitment to continuous growth.</p></Reveal>
          <ul className="mt-8 space-y-3">
            {pillars.map(({ I, t, b }, i) => (
              <Reveal key={t} delay={0.2 + i * 0.07}>
                <li className="flex items-center gap-4 rounded-2xl border border-mist bg-white p-4 pr-6 shadow-[0_10px_26px_-20px_rgba(9,43,76,.35)] transition-all hover:-translate-y-0.5 hover:border-cyan/60">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal to-cyan text-white"><I className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" /></span>
                  <div><p className="text-lg font-semibold text-navy">{t}</p><p className="text-base text-slate">{b}</p></div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.45}><div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/founders-story" className="btn btn-primary">Discover Our Story<ArrowRight aria-hidden="true" /></Link>
            <Link href="/products" className="link-arrow">Explore {categories.length} categories<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div></Reveal>
        </div>
      </div>
    </section>
  )
}

export function FounderPreview() {
  const points = ['A vision', 'A growing portfolio', 'Lasting relationships']
  return (
    <section className="py-12 lg:py-16">
      <div className="wrap">
        <div className="on-dark relative isolate overflow-hidden rounded-[28px] bg-navy shadow-[0_60px_110px_-50px_rgba(9,43,76,.8)]">
          <div className="grid-lines absolute inset-0 -z-10 opacity-30" />
          <div className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-royal/50 blur-[110px]" aria-hidden="true" />
          <div className="grid lg:grid-cols-[.9fr_1.1fr]">
            {/* Photo side */}
            <ImageReveal className="relative min-h-[320px] lg:min-h-[560px]">
              <Photo photo={photos.pharmacy} position="30% 50%" sizes="(min-width:1024px) 45vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-navy" />
              <div className="absolute bottom-6 left-6 right-6 max-w-sm rounded-2xl border border-white/25 bg-white/12 p-6 backdrop-blur-xl lg:bottom-10 lg:left-10">
                <p className="font-display text-5xl leading-none text-cyan">“</p>
                <p className="mt-1 font-display text-2xl leading-snug text-white">A vision, a commitment and a growing portfolio.</p>
              </div>
            </ImageReveal>
            {/* Copy side */}
            <div className="p-8 sm:p-12 lg:p-14">
              <Reveal><p className="eyebrow light">Founder’s Story</p></Reveal>
              <Reveal delay={0.08}><h2 className={`${H2} light`}>A Journey Built on <em>Vision and Commitment</em></h2></Reveal>
              <Reveal delay={0.16}><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 lg:text-xl">Every meaningful journey begins with a vision. McASTRO PHARMA LLP represents a commitment to pharmaceutical business development, growing product portfolios and lasting professional relationships.</p></Reveal>
              <ol className="mt-9 grid gap-4 sm:grid-cols-3">
                {points.map((t, i) => (
                  <Reveal key={t} delay={0.2 + i * 0.07}>
                    <li className="group h-full rounded-2xl border border-white/15 bg-white/[.06] p-5 transition-colors hover:border-cyan/60 hover:bg-white/[.1]">
                      <span className="font-display text-4xl leading-none text-cyan">0{i + 1}</span>
                      <span className="mt-4 block h-px w-full bg-gradient-to-r from-cyan/70 to-transparent" />
                      <p className="mt-4 text-lg font-semibold leading-snug text-white">{t}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <Reveal delay={0.4}><Link href="/founders-story" className="btn btn-light mt-10">Read Our Story<ArrowRight aria-hidden="true" /></Link></Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MilestonesStrip() {
  return (
    <section className="on-dark relative overflow-hidden bg-midnight py-14 lg:py-20">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-royal/40 blur-[120px]" />
      <div className="wrap relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><p className="eyebrow light">Company milestones</p></Reveal>
            <Reveal delay={0.08}><h2 className={`${H2} light`}>Progress That Shapes <em>Our Journey</em></h2></Reveal>
            <Reveal delay={0.14}><p className="mt-5 max-w-lg text-lg text-white/70">Explore the journey, progress and evolving vision of McASTRO PHARMA LLP.</p></Reveal>
          </div>
          <Link href="/milestones" className="btn btn-outline-light">Full timeline<ArrowRight aria-hidden="true" /></Link>
        </div>
        <ol className="relative mt-20 grid gap-10 md:grid-cols-4 md:gap-6">
          <span className="absolute left-0 right-0 top-[68px] hidden h-px bg-gradient-to-r from-cyan/80 via-cyan/35 to-transparent md:block" aria-hidden="true" />
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08} className="relative">
              <p className="font-display text-[5.5rem] italic leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(140,201,242,.85)] lg:text-[6.5rem]">{m.year ?? String(i + 1).padStart(2, '0')}</p>
              <span className="relative mt-3 block h-3.5 w-3.5 rounded-full bg-cyan ring-[6px] ring-cyan/25" />
              <p className="mt-6 text-[13px] font-bold uppercase tracking-[.16em] text-cyan">{m.group}</p>
              <h3 className="mt-2 font-display text-[1.7rem] leading-tight text-white">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{m.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

const showcase = ['antibiotics', 'cough-syrup', 'gastro-care', 'anti-hypertensive', 'anti-diabetic', 'neuropathy', 'nutraceuticals', 'anti-allergic']
export function CategoryShowcase() {
  const idx = (s: string) => categories.findIndex((c) => c.slug === s)
  const cell = (s: string, span: string, size: 'lg' | 'md' | 'sm') => <StaggerItem key={s} className={span}><CategoryPanel c={categories[idx(s)]} size={size} index={idx(s)} /></StaggerItem>
  return (
    <section className="py-14 lg:py-20">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><p className="eyebrow">Product portfolio</p></Reveal>
            <Reveal delay={0.08}><h2 className={`${H2} max-w-2xl`}>Explore Our <em>Pharmaceutical Portfolio</em></h2></Reveal>
            <Reveal delay={0.14}><p className="mt-5 max-w-xl text-lg text-slate">Discover the McASTRO PHARMA portfolio across multiple pharmaceutical categories and formulations.</p></Reveal>
          </div>
          <Link href="/products" className="btn btn-ghost">View All Categories<ArrowRight aria-hidden="true" /></Link>
        </div>
        <Stagger className="mt-10 grid auto-rows-[250px] gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[230px]">
          {cell(showcase[0], 'sm:col-span-2 lg:col-span-6 lg:row-span-2', 'lg')}
          {cell(showcase[1], 'lg:col-span-6 lg:row-span-1', 'md')}
          {cell(showcase[2], 'lg:col-span-3', 'sm')}
          {cell(showcase[3], 'lg:col-span-3', 'sm')}
          {cell(showcase[4], 'lg:col-span-3', 'sm')}
          {cell(showcase[5], 'lg:col-span-3', 'sm')}
          {cell(showcase[6], 'lg:col-span-3', 'sm')}
          {cell(showcase[7], 'lg:col-span-3', 'sm')}
        </Stagger>
      </div>
    </section>
  )
}

export { FeaturedShowcase as FeaturedProducts } from './featured-showcase'

export function QualityBand() {
  return (
    <section className="relative bg-white pb-8 pt-4">
      <div className="wrap">
        <div className="grid overflow-hidden rounded-[20px] bg-navy shadow-[0_50px_100px_-50px_rgba(9,43,76,.7)] lg:grid-cols-[1.25fr_1fr]">
          <div className="relative min-h-[360px] lg:min-h-[640px]">
            <Photo photo={photos.cleanroom} position="55% 50%" sizes="(min-width: 1024px) 60vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/40" />
          </div>
          <div className="on-dark relative flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <div className="grain absolute inset-0 opacity-60" />
            <Reveal className="relative">
              <p className="eyebrow light">Our Quality Production</p>
              <h2 className="h-display light mt-5 text-[clamp(2.3rem,3.4vw,3.2rem)]">Quality Is at the Heart of <em>Our Approach</em></h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">We believe in the importance of quality-focused processes, responsible manufacturing practices and continuous attention to pharmaceutical product standards.</p>
              <ul className="mt-8 space-y-3">
                {['Quality-focused processes', 'Responsible manufacturing practices', 'Attention to product standards'].map((q) => <li key={q} className="flex items-center gap-3 text-lg font-semibold text-white"><ShieldCheck className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />{q}</li>)}
              </ul>
              <Link href="/quality-production" className="btn btn-light mt-10">Explore Our Quality Commitment<ArrowRight aria-hidden="true" /></Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PresenceBand() {
  return (
    <section className="on-dark relative isolate mt-10 overflow-hidden bg-navy py-14 lg:py-20">
      <div className="absolute inset-0 -z-10"><Photo photo={photos.warehouse} position="center 55%" sizes="100vw" className="opacity-30 mix-blend-luminosity" /></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-royal/55" />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <Reveal><p className="eyebrow light">Our Presence</p></Reveal>
          <Reveal delay={0.08}><h2 className={`${H2} light`}>Growing Connections, <em>Expanding Reach</em></h2></Reveal>
          <Reveal delay={0.16}><p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 lg:text-xl">Building a strong pharmaceutical presence through business relationships, distribution connections and long-term collaboration.</p></Reveal>
          <Reveal delay={0.24}><Link href="/our-presence" className="btn btn-light mt-9">Discover Our Presence<ArrowRight aria-hidden="true" /></Link></Reveal>
        </div>
        <ConnectionMap />
      </div>
    </section>
  )
}

/** Abstract animated network illustration (nodes and links). It does not depict real locations. */
export function ConnectionMap() {
  const dots = Array.from({ length: 15 * 17 }, (_, i) => ({ x: i % 17, y: Math.floor(i / 17) }))
  const hubs = [[8.5, 4.5], [5, 8.5], [11.5, 8], [8, 11.5], [3.5, 5], [13, 4.5]]
  const links: [number, number][] = []
  hubs.forEach((_, i) => hubs.forEach((__, j) => { if (j > i && (i + j) % 2 === 0) links.push([i, j]) }))
  return (
    <div className="net relative mx-auto aspect-[17/15] w-full max-w-2xl" role="img" aria-label="Illustration of a connected distribution network">
      <svg viewBox="0 0 17 15" className="net-float h-full w-full overflow-visible">
        {dots.map((d, i) => {
          const dx = d.x - 8, dy = d.y - 7
          const r = Math.sqrt(dx * dx * 0.8 + dy * dy)
          if (r > 7.2) return null
          const k = 1 - r / 7.2
          return <circle key={i} className="net-dot" style={{ animationDelay: `${((i * 37) % 50) / 10}s` }} cx={d.x + 0.5} cy={d.y + 0.5} r={0.17 + k * 0.1} fill="#8cc9f2" fillOpacity={0.25 + k * 0.5} />
        })}
        <g fill="none" strokeLinecap="round">
          {links.map(([i, j], n) => {
            const [x1, y1] = [hubs[i][0] + 0.5, hubs[i][1] + 0.5], [x2, y2] = [hubs[j][0] + 0.5, hubs[j][1] + 0.5]
            return (
              <g key={n}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8cc9f2" strokeOpacity=".35" strokeWidth=".08" />
                <line className="net-flow" style={{ animationDelay: `${n * 0.35}s` }} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#bfe3fa" strokeOpacity=".95" strokeWidth=".11" strokeDasharray=".5 2.2" />
                <circle className="net-anim" r=".16" fill="#fff">
                  <animateMotion dur={`${3.2 + (n % 4) * 0.6}s`} begin={`${n * 0.4}s`} repeatCount="indefinite" path={`M${x1} ${y1} L${x2} ${y2}`} />
                </circle>
              </g>
            )
          })}
        </g>
        {hubs.map(([x, y], i) => (
          <g key={i} className="net-hub" style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${x + 0.5}px ${y + 0.5}px` }}>
            <circle className="net-ring" style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${x + 0.5}px ${y + 0.5}px` }} cx={x + 0.5} cy={y + 0.5} r=".5" fill="none" stroke="#8cc9f2" strokeWidth=".06" />
            <circle cx={x + 0.5} cy={y + 0.5} r=".6" fill="#8cc9f2" fillOpacity=".22" />
            <circle cx={x + 0.5} cy={y + 0.5} r=".26" fill="#fff" />
          </g>
        ))}
      </svg>
    </div>
  )
}

const whyIcons = { layers: Layers, shield: ShieldCheck, handshake: Handshake, trending: TrendingUp }
export function WhyChoose() {
  const items = whyChoose
  return (
    <section className="py-14 lg:py-20">
      <div className="wrap">
        <Reveal><p className="eyebrow">Why McASTRO PHARMA</p></Reveal>
        <Reveal delay={0.08}><h2 className={`${H2} max-w-2xl`}>Built Around <em>Commitment and Trust</em></h2></Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {items.map((w, i) => {
            const I = whyIcons[w.icon]
            const styles = [
              'lg:col-span-7 bg-gradient-to-br from-sky to-white',
              'lg:col-span-5 bg-navy text-white',
              'lg:col-span-5 bg-white',
              'lg:col-span-7 bg-gradient-to-br from-royal to-navy text-white',
            ][i]
            const dark = i === 1 || i === 3
            return (
              <Reveal key={w.title} delay={i * 0.07} className={`${styles} group relative overflow-hidden rounded-xl border border-mist p-8 lg:min-h-[290px] lg:p-11`}>
                <span className={`absolute -right-10 -top-10 h-44 w-44 rounded-full ${dark ? 'bg-white/10' : 'bg-royal/[.06]'} transition-transform duration-500 group-hover:scale-150`} aria-hidden="true" />
                <span className={`relative grid h-14 w-14 place-items-center rounded-xl ${dark ? 'bg-white/12 text-white ring-1 ring-white/25' : 'bg-gradient-to-br from-royal to-cyan text-white'}`}><I className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" /></span>
                <h3 className={`relative mt-9 font-display text-[2rem] leading-tight ${dark ? 'text-white' : 'text-navy'}`}>{w.title}</h3>
                <p className={`relative mt-3 max-w-md text-lg leading-relaxed ${dark ? 'text-white/80' : 'text-slate'}`}>{w.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ContactStrip() {
  return (
    <section className="border-t border-mist bg-ice py-10">
      <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="h-display mt-4 text-4xl lg:text-5xl">Have a business enquiry?</h2>
          <p className="mt-4 max-w-xl text-lg text-slate">Send us your enquiry and our team will be ready to receive it.</p>
        </div>
        <Link href="/contact" className="btn btn-primary !px-8 !py-4">Contact Us<ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </section>
  )
}
