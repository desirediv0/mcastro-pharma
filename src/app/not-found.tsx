import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center py-14 text-center">
      <div className="wrap">
        <p className="font-display text-[8rem] italic leading-none text-sky">404</p>
        <h1 className="h-display mt-2 text-4xl">Page not found</h1>
        <p className="mt-3 text-slate">The page you are looking for does not exist.</p>
        <div className="mt-8 flex justify-center gap-3"><Link href="/" className="btn btn-primary">Home</Link><Link href="/products" className="btn btn-ghost">Categories</Link></div>
      </div>
    </section>
  )
}
