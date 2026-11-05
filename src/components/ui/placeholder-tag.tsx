import { company } from '@/data/company'

/** Marks content that McASTRO has not yet supplied/verified. Hidden when company.showPlaceholderBadges is false. */
export function PlaceholderTag({ children = 'Placeholder' }: { children?: string }) {
  if (!company.showPlaceholderBadges) return null
  return <span className="inline-block rounded-sm border border-amber-400/60 bg-amber-50 px-1.5 py-0.5 align-middle text-[13px] font-bold uppercase tracking-[.14em] text-amber-700">{children}</span>
}
