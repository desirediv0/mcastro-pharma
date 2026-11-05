import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Category } from '@/data/categories'
import { categoryCount } from '@/data/products'
import { categoryPhoto } from '@/data/images'
import { tones, CategoryGlyph } from '../ui/art'
import { Photo } from '../ui/photo'

/** Photographic category panel. Each category gets its own crop + blue tint so panels stay distinct. */
export function CategoryPanel({ c, size = 'sm', index = 0 }: { c: Category; size?: 'lg' | 'md' | 'sm' | 'xs'; index?: number }) {
  const n = categoryCount(c.slug)
  const { photo, position } = categoryPhoto(index)
  const t = tones[c.tone]
  return (
    <Link href={`/products/${c.slug}`} className="group relative block h-full min-h-[220px] overflow-hidden rounded-xl bg-navy text-white focus-visible:outline-offset-4">
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.06]"><Photo photo={photo} position={position} sizes={size === 'lg' ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'} /></div>
      <div className="absolute inset-0 mix-blend-multiply" style={{ background: `linear-gradient(160deg, ${t.from}b3, ${t.to}66)` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/10 to-transparent" />
      <div className={`relative flex h-full flex-col justify-between ${size === 'lg' ? 'p-8 lg:p-10' : 'p-6'}`}>
        <div className="flex items-start justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/15 ring-1 ring-white/25 backdrop-blur-sm"><CategoryGlyph name={c.icon} className="h-6 w-6" /></span>
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/35 transition-all group-hover:border-white group-hover:bg-white group-hover:text-navy"><ArrowUpRight className="h-5 w-5" aria-hidden="true" /></span>
        </div>
        <div>
          <h3 className={`font-display leading-[1.05] tracking-tight ${size === 'lg' ? 'text-4xl lg:text-5xl' : size === 'md' ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-[1.7rem]'}`}>{c.name}</h3>
          {(size === 'lg' || size === 'md') && <p className="mt-3 max-w-md text-base leading-relaxed text-white/85">{c.short}</p>}
          <p className="mt-4 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[.14em] text-white/90">
            <span>{n} product{n === 1 ? '' : 's'}</span><span className="h-px flex-1 bg-white/30" /><span>Explore</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
