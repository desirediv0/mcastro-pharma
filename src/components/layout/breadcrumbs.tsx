import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from '../ui/json-ld'
import { breadcrumbLd } from '@/lib/seo'

export interface Crumb { name: string; path: string }

export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const all = [{ name: 'Home', path: '/' }, ...items]
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${light ? 'text-white/65' : 'text-slate'}`}>
          {all.map((c, i) => {
            const last = i === all.length - 1
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? <span aria-current="page" className={light ? 'text-white' : 'text-navy'}>{c.name}</span> : <Link href={c.path} className="transition-colors hover:text-cyan">{c.name}</Link>}
                {!last && <ChevronRight className="h-3 w-3 opacity-60" aria-hidden="true" />}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
