import Image from 'next/image'
import Link from 'next/link'

/**
 * The supplied logo file contains two lockups on one sheet (horizontal on top, stacked below).
 * The file itself is untouched; each variant is shown by cropping with CSS.
 */
const SHEET = { w: 539, h: 270 }

export function Logo({ variant = 'horizontal', className = '' }: { variant?: 'horizontal' | 'stacked'; className?: string }) {
  const crop = variant === 'horizontal' ? { w: 539, h: 62, y: 0 } : { w: 395, h: 108, y: 162 }
  return (
    <Link href="/" aria-label="McASTRO PHARMA LLP – home" className={`block ${className}`}>
      <span className="relative block overflow-hidden" style={{ aspectRatio: `${crop.w} / ${crop.h}` }}>
        <Image
          src="/brand/logo.jpg"
          alt="McASTRO PHARMA"
          width={SHEET.w}
          height={SHEET.h}
          priority
          className="absolute left-0 top-0 h-auto max-w-none"
          style={{ width: `${(SHEET.w / crop.w) * 100}%`, top: `-${(crop.y / crop.h) * 100}%` }}
        />
      </span>
    </Link>
  )
}
