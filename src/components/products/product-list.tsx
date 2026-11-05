'use client'
import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { Product } from '@/data/products'

/**
 * Category product list as a structured catalogue table: No. | Product Name | Composition | Packing.
 * On mobile each row collapses to a compact stacked entry. Search appears only for larger categories.
 */
export function ProductCatalogue({ products }: { products: Product[] }) {
  const [q, setQ] = useState('')
  const [form, setForm] = useState('All')
  const forms = useMemo(() => ['All', ...Array.from(new Set(products.map((p) => p.form).filter(Boolean) as string[]))], [products])
  const showTools = products.length > 10
  const list = products.filter((p) => (form === 'All' || p.form === form) && (!q.trim() || `${p.name} ${p.composition ?? ''}`.toLowerCase().includes(q.trim().toLowerCase())))
  const numbers = new Map(products.map((p, i) => [p.id, i + 1]))

  return (
    <div>
      {showTools && (
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block lg:w-96">
            <span className="sr-only">Search products in this category</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate" aria-hidden="true" />
            <input value={q} onChange={(e) => setQ(e.target.value)} type="search" placeholder="Search name or composition" className="w-full rounded-lg border border-[#c9d9e8] bg-white py-3.5 pl-12 pr-4 text-base focus:border-royal focus:outline-none focus:ring-2 focus:ring-cyan/30" />
          </label>
          {forms.length > 2 && (
            <div role="group" aria-label="Filter by dosage form" className="flex flex-wrap gap-2">
              {forms.map((f) => <button key={f} type="button" aria-pressed={form === f} onClick={() => setForm(f)} className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${form === f ? 'border-navy bg-navy text-white' : 'border-[#c9d9e8] bg-white text-navy hover:border-royal'}`}>{f}</button>)}
            </div>
          )}
        </div>
      )}
      <p className="sr-only" role="status" aria-live="polite">{list.length} products shown</p>

      <div className="overflow-hidden rounded-xl border border-[#d5e3ef] bg-white shadow-[0_20px_50px_-35px_rgba(9,43,76,.45)]" role="table" aria-label="Product catalogue">
        <div role="row" className="hidden grid-cols-[72px_minmax(220px,1fr)_minmax(300px,1.9fr)_150px] gap-6 bg-navy px-7 py-4 text-[13px] font-bold uppercase tracking-[.16em] text-white md:grid">
          <span role="columnheader">No.</span><span role="columnheader">Product Name</span><span role="columnheader">Composition</span><span role="columnheader">Packing</span>
        </div>
        <ul>
          {list.map((p) => (
            <li key={p.id} role="row" className="group relative grid gap-x-6 gap-y-1.5 border-t border-mist px-5 py-5 transition-colors first:border-t-0 odd:bg-white even:bg-ice/70 hover:bg-sky/60 md:grid-cols-[72px_minmax(220px,1fr)_minmax(300px,1.9fr)_150px] md:items-center md:px-7 md:py-6">
              <span className="absolute inset-y-0 left-0 w-[3px] origin-center scale-y-0 bg-cyan transition-transform group-hover:scale-y-100" />
              <span role="cell" className="font-display text-xl text-royal/70 md:text-2xl">{String(numbers.get(p.id)).padStart(2, '0')}</span>
              <div role="cell">
                <h3 className="font-display text-[1.45rem] leading-tight text-navy md:text-[1.55rem]">{p.name}</h3>
                {p.form && <p className="mt-1 text-[13px] font-semibold uppercase tracking-[.1em] text-brand/80">{p.form}</p>}
              </div>
              <p role="cell" className="text-base leading-relaxed text-slate md:text-[15.5px]">
                <span className="mb-0.5 block text-[13px] font-bold uppercase tracking-[.12em] text-navy/50 md:hidden">Composition</span>
                {p.composition ?? <span className="italic text-slate/70">Pending verification</span>}
              </p>
              <p role="cell" className="text-base font-semibold text-navy md:text-[15.5px]">
                <span className="mb-0.5 block text-[13px] font-bold uppercase tracking-[.12em] text-navy/50 md:hidden">Packing</span>
                {p.packing ?? <span className="font-normal italic text-slate/70">Pending verification</span>}
              </p>
            </li>
          ))}
        </ul>
        {list.length === 0 && <p className="px-7 py-14 text-center text-lg text-slate">No products match your search.</p>}
      </div>
    </div>
  )
}
