import Link from 'next/link'
import { ArrowRight, CheckCircle2, Handshake, MessageSquareText, ClipboardList, Store, Warehouse } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { Photo } from '@/components/ui/photo'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/motion'
import { partnerBenefits, partnerSections } from '@/data/content'
import { portfolioStats } from '@/data/products'
import { photos } from '@/data/images'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Grow With McASTRO PHARMA',
  description: 'Partner with McASTRO PHARMA LLP. Enquiries welcome from distributors, stockists, wholesalers and business associates.',
  path: '/partner-with-us',
})

const icons = [Warehouse, Store, Handshake]
const cardPhotos = [photos.warehouse, photos.pharmacy, photos.labTeam]
const steps = [
  { icon: ClipboardList, title: 'Fill the enquiry form', body: 'Share your business details and the categories you are interested in.' },
  { icon: MessageSquareText, title: 'Tell us what you need', body: 'Add a short message about your market and requirements.' },
  { icon: Handshake, title: 'We get in touch', body: 'Our team reviews your enquiry and responds to you directly.' },
]

export default function Partner() {
  return (
    <>
      <PageHero eyebrow="Partner With Us" title={<>Grow With <em>McASTRO PHARMA</em></>} intro="We welcome business enquiries and opportunities to build meaningful pharmaceutical distribution and business partnerships." crumbs={[{ name: 'Partner With Us', path: '/partner-with-us' }]} photo={photos.warehouse} position="center 60%">
        <Link href="#enquiry" className="btn btn-light">Send a Partnership Enquiry<ArrowRight aria-hidden="true" /></Link>
        <Link href="/products" className="btn btn-outline-light">View Categories</Link>
      </PageHero>

      {/* Portfolio numbers (calculated from the catalogue) */}
      <section className="on-dark relative bg-navy" aria-label="Portfolio at a glance">
        <div className="wrap grid grid-cols-2 divide-white/15 py-8 lg:grid-cols-3 lg:divide-x lg:py-10">
          {[
            { v: portfolioStats.categories, l: 'Product categories' },
            { v: portfolioStats.products, l: 'Products in the catalogue' },
            { v: portfolioStats.forms, l: 'Dosage forms' },
          ].map((s, i) => (
            <div key={s.l} className={`px-2 py-3 text-center lg:px-8 ${i === 2 ? 'col-span-2 lg:col-span-1' : ''}`}>
              <p className="font-display text-5xl leading-none text-white lg:text-6xl">{s.v}</p>
              <p className="mt-3 text-[15px] font-semibold uppercase tracking-[.12em] text-cyan">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-14 lg:py-20">
        <div className="wrap">
          <Reveal><p className="eyebrow">Who we work with</p></Reveal>
          <Reveal delay={0.06}><h2 className="h-display mt-5 max-w-3xl text-[clamp(2.6rem,4.2vw,3.8rem)]">Built for <em>distributors, stockists</em> &amp; business partners</h2></Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {partnerSections.map((s, i) => {
              const I = icons[i]
              return (
                <StaggerItem key={s.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-mist bg-white shadow-[0_14px_36px_-24px_rgba(9,43,76,.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(7,84,154,.45)]">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"><Photo photo={cardPhotos[i]} position="50% 50%" sizes="(min-width:768px) 33vw, 100vw" /></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <span className="absolute bottom-0 left-8 grid h-16 w-16 translate-y-1/2 place-items-center rounded-2xl bg-gradient-to-br from-royal to-cyan text-white shadow-lg ring-4 ring-white"><I className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" /></span>
                  </div>
                  <div className="flex flex-1 flex-col px-8 pb-9 pt-12">
                    <p className="text-[14px] font-bold tracking-[.16em] text-brand">0{i + 1}</p>
                    <h3 className="mt-2 font-display text-[2rem] leading-tight text-navy">{s.title}</h3>
                    <p className="mt-3 flex-1 text-lg leading-relaxed text-slate">{s.body}</p>
                    <Link href="#enquiry" className="link-arrow mt-6">Enquire now<ArrowRight aria-hidden="true" /></Link>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* How to get started */}
      <section className="bg-ice py-14 lg:py-20">
        <div className="wrap">
          <Reveal><p className="eyebrow">How to get started</p></Reveal>
          <Reveal delay={0.06}><h2 className="h-display mt-5 text-[clamp(2.6rem,4.2vw,3.8rem)]">Three simple <em>steps</em></h2></Reveal>
          <Stagger className="relative mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <StaggerItem key={s.title} className="relative rounded-2xl bg-white p-8 shadow-[0_14px_36px_-26px_rgba(9,43,76,.35)] ring-1 ring-mist lg:p-10">
                <span className="absolute right-7 top-5 font-display text-7xl leading-none text-sky">{i + 1}</span>
                <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-navy text-white"><s.icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" /></span>
                <h3 className="relative mt-7 text-2xl font-semibold text-navy">{s.title}</h3>
                <p className="relative mt-3 text-lg leading-relaxed text-slate">{s.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Benefits + form */}
      <section className="relative overflow-hidden bg-midnight py-14 lg:py-20" id="enquiry">
        <div className="absolute inset-0 opacity-25"><Photo photo={photos.pharmacy} position="50% 50%" sizes="100vw" /></div>
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight/90 to-navy/80" />
        <div className="on-dark wrap relative grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal><p className="eyebrow light">Partnership benefits</p></Reveal>
            <Reveal delay={0.06}><h2 className="h-display light mt-5 text-[clamp(2.6rem,4.2vw,3.8rem)]">Why partner with <em>McASTRO.</em></h2></Reveal>
            <ul className="mt-10 space-y-4">
              {partnerBenefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.05}>
                  <li className="flex gap-4 rounded-xl border border-white/15 bg-white/[.06] p-6 backdrop-blur-sm">
                    <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-cyan" aria-hidden="true" />
                    <div><h3 className="text-xl font-semibold text-white">{b.title}</h3><p className="mt-1 text-lg leading-relaxed text-white/80">{b.body}</p></div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="h-fit rounded-[20px] bg-white p-7 text-navy shadow-[0_50px_100px_-40px_rgba(0,0,0,.7)] sm:p-11 lg:sticky lg:top-28">
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-3 font-display text-4xl text-navy">Partnership Enquiry Form</h2>
            <p className="mb-9 mt-3 text-lg text-slate">Tell us about your business. Fields marked * are required.</p>
            <EnquiryForm mode="partner" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
