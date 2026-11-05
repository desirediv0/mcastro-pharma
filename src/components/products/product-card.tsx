import Image from 'next/image'
import type { Product } from '@/data/products'
import { getCategory } from '@/data/categories'
import { productImages } from '@/data/product-images'
import { CategoryGlyph } from '../ui/art'

/** Informational card. Not a link: products have no detail pages by design. */
export function ProductCard({ p, showCategory = true }: { p: Product; showCategory?: boolean }) {
  const cat = getCategory(p.category)
  const img = productImages[p.id]
  const src = img ? `/products/${img}` : null
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d5e3ef] bg-white shadow-[0_1px_2px_rgba(9,43,76,.04),0_8px_24px_-16px_rgba(9,43,76,.18)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/70 hover:shadow-[0_20px_40px_-20px_rgba(7,84,154,.35)]">
      {/* Pack shot: blurred copy fills the frame, sharp copy is contained so no pack is ever cropped */}
      <div className="relative aspect-[4/3] overflow-hidden bg-ice">
        {src ? (
          <>
            <Image src={src} alt="" aria-hidden="true" fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="scale-125 object-cover opacity-60 blur-2xl" />
            <Image src={src} alt={`${p.name.replace(/^Softgel : /, '')} pack`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]" />
          </>
        ) : (
          <div className="grid h-full place-items-center text-royal/40">{cat && <CategoryGlyph name={cat.icon} className="h-14 w-14" />}</div>
        )}
        {p.form && <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[13px] font-semibold text-slate shadow-sm backdrop-blur">{p.form}</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {showCategory && cat && (
          <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-sky px-2.5 py-1 text-[13px] font-bold uppercase tracking-[.12em] text-royal"><CategoryGlyph name={cat.icon} className="h-3.5 w-3.5" />{cat.name}</span>
        )}
        <h3 className="font-display text-[1.65rem] leading-tight tracking-tight text-navy">{p.name}</h3>
        {p.composition ? (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">{p.composition}</p>
        ) : (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate/80">Composition details are being verified with the company catalogue.</p>
        )}
        <div className="mt-5 flex items-center justify-between border-t border-mist pt-4 text-xs">
          <span className="text-slate">Packing</span>
          <span className="font-semibold text-navy">{p.packing ?? 'To be confirmed'}</span>
        </div>
      </div>
    </article>
  )
}
