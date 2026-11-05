import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '../ui/motion'
import { Photo } from '../ui/photo'
import { photos } from '@/data/images'

export function PartnerCTA({ title = 'Let’s Build Stronger Pharmaceutical Partnerships', body = 'Connect with McASTRO PHARMA LLP to explore distribution opportunities and meaningful business collaborations.' }: { title?: string; body?: string }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy py-14 lg:py-20">
      <div className="absolute inset-0 -z-10"><Photo photo={photos.warehouse} position="center 60%" sizes="100vw" className="opacity-40 mix-blend-luminosity" /></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-royal/45" />
      <div className="grain absolute inset-0 -z-10" />
      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.3fr_.7fr]">
        <div>
          <Reveal><p className="eyebrow light">Partner With Us</p></Reveal>
          <Reveal delay={0.08}><h2 className="h-display light mt-5 text-[clamp(2.4rem,4.6vw,4.2rem)]">{title}</h2></Reveal>
          <Reveal delay={0.16}><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 lg:text-xl">{body}</p></Reveal>
        </div>
        <Reveal delay={0.24} className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
          <Link href="/partner-with-us" className="btn btn-light !px-8 !py-4">Become Our Partner<ArrowRight aria-hidden="true" /></Link>
          <Link href="/contact" className="btn btn-outline-light !px-8 !py-4">Contact Us</Link>
        </Reveal>
      </div>
    </section>
  )
}
