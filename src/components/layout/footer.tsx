import Link from 'next/link'
import { ArrowUpRight, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from './logo'
import { company } from '@/data/company'
import { footerCompany } from '@/data/navigation'
import { categories, categoryGroups } from '@/data/categories'

const head = 'mb-6 flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[.18em] text-white'
const link = 'inline-block py-1 text-[16px] text-white/75 transition-all hover:translate-x-1 hover:text-cyan'

export function Footer() {
  const social = [
    { k: 'linkedin', I: Linkedin, label: 'LinkedIn' }, { k: 'facebook', I: Facebook, label: 'Facebook' }, { k: 'instagram', I: Instagram, label: 'Instagram' },
  ]
  return (
    <footer className="relative overflow-hidden bg-midnight text-white/75">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-royal/30 blur-[120px]" aria-hidden="true" />

      {/* Main columns */}
      <div className="wrap relative grid gap-12 pt-14 pb-12 lg:grid-cols-[1.05fr_.6fr_2.5fr] lg:gap-14 lg:pt-20 lg:pb-16">
        <div>
          <div className="inline-block rounded-lg bg-white p-3"><Logo variant="stacked" className="w-[190px]" /></div>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-white/75">McASTRO PHARMA LLP is focused on a diverse pharmaceutical product portfolio across multiple therapeutic categories, built on quality, responsible business practices and long-term partnerships.</p>
          <ul className="mt-6 space-y-3 text-[16px]">
            {company.email && <li className="flex gap-3"><Mail className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" /><a href={`mailto:${company.email}`} className="hover:text-cyan">{company.email}</a></li>}
            {company.phone && <li className="flex gap-3"><Phone className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" /><a href={`tel:${company.phone}`} className="hover:text-cyan">{company.phone}</a></li>}
            {company.address && <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" /><span>{company.address}</span></li>}
            {!company.email && !company.phone && !company.address && <li className="leading-relaxed text-white/75">For business enquiries, please use our enquiry form and our team will respond.</li>}
          </ul>
          <div className="mt-6 flex gap-2.5">
            {social.map(({ k, I, label }) => {
              const href = company.social[k]
              return href
                ? <a key={k} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-lg border border-white/25 transition-colors hover:border-cyan hover:bg-white/10 hover:text-cyan"><I className="h-[18px] w-[18px]" /></a>
                : <span key={k} aria-label={`${label} (coming soon)`} title="Coming soon" className="grid h-11 w-11 cursor-not-allowed place-items-center rounded-lg border border-white/10 text-white/30"><I className="h-[18px] w-[18px]" /></span>
            })}
          </div>
        </div>

        <nav aria-label="Footer – company">
          <p className={head}><span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />Company</p>
          <ul>{footerCompany.map(([l, h]) => <li key={h}><Link href={h} className={link}>{l}</Link></li>)}</ul>
        </nav>

        <nav aria-label="Footer – product categories">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="flex items-center gap-2.5 text-[14px] font-bold uppercase tracking-[.18em] text-white"><span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />Product Categories</p>
            <Link href="/products" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan hover:text-white">All {categories.length}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
            {categoryGroups.map((g) => (
              <div key={g}>
                <p className="mb-2 text-[13px] font-bold uppercase tracking-[.14em] text-cyan">{g}</p>
                <ul>{categories.filter((c) => c.group === g).map((c) => <li key={c.slug}><Link href={`/products/${c.slug}`} className="inline-block py-1 text-[15.5px] leading-snug text-white/75 transition-all hover:translate-x-1 hover:text-white">{c.name}</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="relative border-t border-white/10 bg-black/20">
        <div className="wrap flex flex-col gap-4 py-6 text-[15px] lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="max-w-xl text-sm leading-relaxed text-white/55">Product information is for trade reference only and is not medical advice. Please consult a qualified healthcare professional.</p>
          <div className="flex gap-6"><Link href="/privacy-policy" className="hover:text-cyan">Privacy Policy</Link><Link href="/terms-and-conditions" className="hover:text-cyan">Terms &amp; Conditions</Link></div>
        </div>
      </div>
    </footer>
  )
}
