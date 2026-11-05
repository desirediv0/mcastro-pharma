'use client'
import { useState } from 'react'
import { ArrowRight, CheckCircle2, Info } from 'lucide-react'
import { company } from '@/data/company'

type Mode = 'partner' | 'general'
const businessTypes = ['Distributor', 'Stockist', 'Wholesaler', 'Business associate', 'Healthcare distribution partner', 'Other']

type Values = Record<string, string>
const required: Record<Mode, string[]> = {
  partner: ['name', 'company', 'email', 'phone', 'city', 'businessType', 'message'],
  general: ['name', 'email', 'message'],
}
const labels: Record<string, string> = { name: 'Full Name', company: 'Company Name', email: 'Email', phone: 'Phone', city: 'City', businessType: 'Business Type', message: 'Message' }

function validate(mode: Mode, v: Values) {
  const e: Values = {}
  for (const k of required[mode]) if (!v[k]?.trim()) e[k] = `${labels[k]} is required`
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email address'
  if (v.phone && !/^[+()\d\s-]{7,16}$/.test(v.phone)) e.phone = 'Enter a valid phone number'
  if (v.message && v.message.trim().length < 10) e.message = 'Please add a little more detail (10+ characters)'
  return e
}

/**
 * Frontend-only form. It validates, then POSTs to company.formEndpoint if one is configured
 * (NEXT_PUBLIC_FORM_ENDPOINT). With no endpoint it does NOT pretend to save anything.
 */
export function EnquiryForm({ mode }: { mode: Mode }) {
  const [values, setValues] = useState<Values>({})
  const [errors, setErrors] = useState<Values>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'>('idle')
  const fields: { k: string; type?: string; select?: boolean; area?: boolean; span?: boolean; auto?: string }[] =
    mode === 'partner'
      ? [{ k: 'name', auto: 'name' }, { k: 'company', auto: 'organization' }, { k: 'email', type: 'email', auto: 'email' }, { k: 'phone', type: 'tel', auto: 'tel' }, { k: 'city', auto: 'address-level2' }, { k: 'businessType', select: true }, { k: 'message', area: true, span: true }]
      : [{ k: 'name', auto: 'name' }, { k: 'email', type: 'email', auto: 'email' }, { k: 'phone', type: 'tel', auto: 'tel' }, { k: 'message', area: true, span: true }]

  const set = (k: string, val: string) => { setValues((s) => ({ ...s, [k]: val })); if (errors[k]) setErrors((s) => { const n = { ...s }; delete n[k]; return n }) }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate(mode, values)
    setErrors(e)
    if (Object.keys(e).length) return
    if (!company.formEndpoint) { setStatus('unconfigured'); return }
    setStatus('sending')
    try {
      const res = await fetch(company.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ formType: mode, ...values }) })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent'); setValues({})
    } catch { setStatus('error') }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-2xl border border-mist bg-ice p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-royal" aria-hidden="true" />
        <h3 className="mt-4 font-display text-3xl text-navy">Thank you</h3>
        <p className="mt-2 text-slate">Your enquiry has been submitted. We will be in touch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2" aria-label={mode === 'partner' ? 'Partnership enquiry' : 'General enquiry'}>
      {fields.map((f) => {
        const id = `${mode}-${f.k}`
        const err = errors[f.k]
        const common = { id, name: f.k, value: values[f.k] ?? '', onChange: (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>) => set(f.k, e.target.value), 'aria-invalid': !!err, 'aria-describedby': err ? `${id}-err` : undefined, autoComplete: f.auto }
        return (
          <label key={f.k} htmlFor={id} data-invalid={!!err} className={`field ${f.span ? 'sm:col-span-2' : ''}`}>
            <span>{labels[f.k]}{required[mode].includes(f.k) && <span aria-hidden="true" className="text-royal"> *</span>}</span>
            {f.select ? (
              <select {...common}><option value="">Select…</option>{businessTypes.map((b) => <option key={b}>{b}</option>)}</select>
            ) : f.area ? (
              <textarea {...common} rows={mode === 'partner' ? 5 : 4} />
            ) : (
              <input {...common} type={f.type ?? 'text'} />
            )}
            {err && <span id={`${id}-err`} className="err" role="alert">{err}</span>}
          </label>
        )
      })}
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary disabled:opacity-60">{status === 'sending' ? 'Sending…' : mode === 'partner' ? 'Submit Partnership Enquiry' : 'Send Enquiry'}<ArrowRight aria-hidden="true" /></button>
        {status === 'error' && <p role="alert" className="mt-4 text-sm font-semibold text-destructive">Something went wrong sending your enquiry. Please try again{company.email ? <> or email <a className="underline" href={`mailto:${company.email}`}>{company.email}</a></> : null}.</p>}
        {status === 'unconfigured' && (
          <p role="status" className="mt-4 flex gap-2 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900"><Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Form submission is not connected yet, so this enquiry was <strong>not sent</strong>.{company.email ? <> Please email us at <a className="font-semibold underline" href={`mailto:${company.email}`}>{company.email}</a>.</> : null}</span></p>
        )}
      </div>
    </form>
  )
}
