import Image from 'next/image'
import type { Photo as P } from '@/data/images'

/** Responsive photo that fills its (relatively positioned) parent. */
export function Photo({ photo, className = '', position = 'center', priority = false, sizes = '(min-width: 1024px) 50vw, 100vw' }: { photo: P; className?: string; position?: string; priority?: boolean; sizes?: string }) {
  return <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className={`object-cover ${className}`} style={{ objectPosition: position }} />
}
