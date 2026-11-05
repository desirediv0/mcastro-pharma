import { Breadcrumbs, type Crumb } from './breadcrumbs'
import { Reveal } from '../ui/motion'
import { Photo } from '../ui/photo'
import type { Photo as P } from '@/data/images'

/**
 * Photographic page hero. The photo fills the right ~55% of the band on desktop and sits behind a navy
 * overlay on mobile, so text always has contrast.
 */
export function PageHero({ eyebrow, title, intro, crumbs, photo, position = 'center', children }: { eyebrow: string; title: React.ReactNode; intro: string; crumbs: Crumb[]; photo: P; position?: string; children?: React.ReactNode }) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-midnight">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Photo photo={photo} position={position} priority sizes="(min-width: 1024px) 58vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight/20 lg:via-midnight/55 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
      </div>
      <div className="grid-lines absolute inset-0 opacity-30" />
      <div className="wrap relative flex min-h-[460px] flex-col justify-center py-10 lg:min-h-[560px] lg:py-16">
        <Breadcrumbs items={crumbs} light />
        <div className="mt-10 max-w-2xl">
          <Reveal><p className="eyebrow light">{eyebrow}</p></Reveal>
          <Reveal delay={0.08}><h1 className="h-display light mt-5 text-[clamp(2.7rem,5vw,4.5rem)]">{title}</h1></Reveal>
          <Reveal delay={0.16}><p className="mt-6 text-lg leading-relaxed text-white/80 lg:text-xl">{intro}</p></Reveal>
          {children && <Reveal delay={0.24} className="mt-9 flex flex-wrap gap-3">{children}</Reveal>}
        </div>
      </div>
    </section>
  )
}
