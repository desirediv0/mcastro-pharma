import Link from 'next/link'
import { ArrowRight, CheckCircle2, Handshake, Layers, Mail, MapPin, MessageSquareText, Phone } from 'lucide-react'
import { PageHero } from '@/components/layout/page-hero'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { Photo } from '@/components/ui/photo'
import { Reveal, Stagger, StaggerItem } from '@/components/ui/motion'
import { company } from '@/data/company'
import { photos } from '@/data/images'
import { portfolioStats } from '@/data/products'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Let’s Start a Conversation',
  description: 'Contact McASTRO PHARMA LLP for business enquiries and partnership opportunities.',
  path: '/contact',
})

const include = [
  'Your name, company and business type',
  'The product categories you are interested in',
  'Your city or region of operation',
  'A short note about your requirement',
]

export default function Contact() {
  // Only verified details are ever shown; unverified ones stay hidden.
  const details = [
    company.email && { I: Mail, t: 'Email', v: <a className="text-royal underline-offset-4 hover:underline" href={`mailto:${company.email}`}>{company.email}</a> },
    company.phone && { I: Phone, t: 'Phone', v: <a className="text-royal underline-offset-4 hover:underline" href={`tel:${company.phone}`}>{company.phone}</a> },
    company.address && { I: MapPin, t: 'Address', v: company.address },
  ].filter(Boolean) as { I: typeof Mail; t: string; v: React.ReactNode }[]

  const ways = [
    { I: MessageSquareText, t: 'General enquiry', b: 'Questions about the company, our portfolio or anything else.', href: '#form', cta: 'Use the form below' },
    { I: Handshake, t: 'Distribution & partnership', b: 'Distributors, stockists and wholesalers can use the partnership form.', href: '/partner-with-us#enquiry', cta: 'Partner With Us' },
    { I: Layers, t: 'Product information', b: `Browse ${portfolioStats.categories} categories with composition and packing details.`, href: '/products', cta: 'View categories' },
  ]

  return (
    <>
      <PageHero eyebrow="Contact Us" title={<>Let’s Start a <em>Conversation</em></>} intro="Have a business enquiry or partnership opportunity? Connect with McASTRO PHARMA LLP and our team will be ready to receive your enquiry." crumbs={[{ name: 'Contact Us', path: '/contact' }]} photo={photos.labInterior} position="55% 50%">
        <Link href="#form" className="btn btn-light">Send an Enquiry<ArrowRight aria-hidden="true" /></Link>
      </PageHero>

      {/* Ways to reach us */}
      <section className="py-14 lg:py-20">
        <div className="wrap">
          <Reveal><p className="eyebrow">How can we help</p></Reveal>
          <Reveal delay={0.06}><h2 className="h-display mt-5 max-w-3xl text-[clamp(2.6rem,4.2vw,3.8rem)]">Choose the <em>right route</em> for your enquiry</h2></Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {ways.map(({ I, t, b, href, cta }) => (
              <StaggerItem key={t} className="group flex h-full flex-col rounded-2xl border border-mist bg-white p-8 shadow-[0_14px_36px_-24px_rgba(9,43,76,.3)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_30px_60px_-30px_rgba(7,84,154,.45)] lg:p-10">
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-royal to-cyan text-white"><I className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" /></span>
                <h3 className="mt-7 font-display text-[2rem] leading-tight text-navy">{t}</h3>
                <p className="mt-3 flex-1 text-lg leading-relaxed text-slate">{b}</p>
                <Link href={href} className="link-arrow mt-6">{cta}<ArrowRight aria-hidden="true" /></Link>
              </StaggerItem>
            ))}
          </Stagger>

          {details.length > 0 && (
            <ul className="mt-6 grid gap-6 md:grid-cols-3">
              {details.map(({ I, t, v }) => (
                <li key={t} className="flex items-start gap-5 rounded-2xl bg-ice p-8 ring-1 ring-mist">
                  <I className="mt-1 h-7 w-7 shrink-0 text-cyan" aria-hidden="true" />
                  <div><p className="text-[14px] font-bold uppercase tracking-[.16em] text-brand">{t}</p><p className="mt-1 text-xl text-navy">{v}</p></div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Form */}
      <section id="form" className="relative overflow-hidden bg-midnight py-14 lg:py-20">
        <div className="absolute inset-0 opacity-25"><Photo photo={photos.qcLab} position="50% 50%" sizes="100vw" /></div>
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight/90 to-navy/80" />
        <div className="on-dark wrap relative grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal><p className="eyebrow light">Send us your enquiry</p></Reveal>
            <Reveal delay={0.06}><h2 className="h-display light mt-5 text-[clamp(2.6rem,4.2vw,3.8rem)]">Tell us <em>what you need.</em></h2></Reveal>
            <Reveal delay={0.1}><p className="mt-6 text-xl leading-relaxed text-white/85">Use the form and share a few details. Our team reviews every business enquiry and responds to it.</p></Reveal>
            <p className="mt-10 text-[15px] font-bold uppercase tracking-[.16em] text-cyan">It helps to include</p>
            <ul className="mt-4 space-y-3">
              {include.map((x) => <li key={x} className="flex gap-3 text-lg text-white/90"><CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-cyan" aria-hidden="true" />{x}</li>)}
            </ul>
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/[.06] p-7 backdrop-blur-sm">
              <p className="font-display text-3xl leading-tight text-white">Distributor or stockist?</p>
              <p className="mt-2 text-lg text-white/80">Use our dedicated partnership form.</p>
              <Link href="/partner-with-us#enquiry" className="btn btn-light mt-5">Partner With Us<ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
          <Reveal className="rounded-[20px] bg-white p-7 text-navy shadow-[0_50px_100px_-40px_rgba(0,0,0,.7)] sm:p-11">
            <p className="eyebrow">General enquiry</p>
            <h2 className="mt-3 font-display text-4xl text-navy">Contact form</h2>
            <p className="mb-9 mt-3 text-lg text-slate">Fields marked * are required.</p>
            <EnquiryForm mode="general" />
          </Reveal>
        </div>
      </section>

      {company.mapEmbedUrl && (
        <section className="bg-ice py-10"><div className="wrap"><iframe title="McASTRO PHARMA LLP location" src={company.mapEmbedUrl} loading="lazy" className="h-[420px] w-full rounded-xl border-0" referrerPolicy="no-referrer-when-downgrade" /></div></section>
      )}
    </>
  )
}
