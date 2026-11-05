import { useId } from 'react'
import { Activity, Apple, Bandage, Brain, Bug, Dna, Droplets, Flame, Flower2, HeartPulse, Leaf, Pill, Smile, Snowflake, Soup, Sparkles, ShieldPlus, Thermometer, Wind, Zap, type LucideIcon } from 'lucide-react'
import type { CategoryIcon } from '@/data/categories'

export const iconMap: Record<CategoryIcon, LucideIcon> = {
  shield: ShieldPlus, 'heart-pulse': HeartPulse, wind: Wind, stomach: Soup, bug: Bug, smile: Smile, droplet: Droplets, leaf: Leaf, flame: Flame,
  flower: Flower2, dna: Dna, sparkles: Sparkles, apple: Apple, activity: Activity, thermometer: Thermometer, bandage: Bandage, snowflake: Snowflake,
  brain: Brain, pill: Pill, zap: Zap,
}
export function CategoryGlyph({ name, className }: { name: CategoryIcon; className?: string }) {
  const I = iconMap[name]
  return <I className={className} aria-hidden="true" strokeWidth={1.4} />
}

/** Five tone palettes, each giving a category its own colour treatment within the blue family. */
export const tones = [
  { from: '#0a2447', to: '#0b4fa8', glow: '#19b3df' },
  { from: '#06203f', to: '#0d6aa8', glow: '#52d0f0' },
  { from: '#0b2a5e', to: '#2457c4', glow: '#7fb6ff' },
  { from: '#072a3d', to: '#0a7a95', glow: '#3fd6d0' },
  { from: '#101f52', to: '#3a4fc4', glow: '#8fa6ff' },
] as const

/** Abstract molecular-network backdrop with a large category glyph. Purely decorative. */
export function ToneArt({ tone, icon, className = '', seed = 0 }: { tone: 0 | 1 | 2 | 3 | 4; icon: CategoryIcon; className?: string; seed?: number }) {
  const t = tones[tone]
  const id = `g${tone}${seed}`
  const nodes = [[70, 60], [150, 110], [240, 70], [310, 150], [210, 190], [110, 200], [60, 140]]
  const rot = (seed * 37 + tone * 23) % 60
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`} style={{ background: `linear-gradient(145deg, ${t.from}, ${t.to})` }} aria-hidden="true">
      <svg viewBox="0 0 380 260" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id={id} cx="75%" cy="30%" r="60%"><stop offset="0%" stopColor={t.glow} stopOpacity=".55" /><stop offset="100%" stopColor={t.glow} stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="380" height="260" fill={`url(#${id})`} />
        <g transform={`rotate(${rot} 190 130)`} stroke="#fff" strokeOpacity=".22" fill="none">
          {nodes.map((a, i) => { const b = nodes[(i + 1) % nodes.length]; return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} /> })}
          <line x1="70" y1="60" x2="240" y2="70" /><line x1="150" y1="110" x2="310" y2="150" /><line x1="110" y1="200" x2="240" y2="70" />
          {nodes.map((n, i) => <circle key={i} cx={n[0]} cy={n[1]} r={i % 3 === 0 ? 7 : 4} fill="#fff" fillOpacity={i % 3 === 0 ? 0.35 : 0.6} stroke="none" />)}
        </g>
        <circle cx="320" cy="40" r="90" stroke="#fff" strokeOpacity=".14" fill="none" /><circle cx="320" cy="40" r="60" stroke="#fff" strokeOpacity=".1" fill="none" />
      </svg>
      <CategoryGlyph name={icon} className="absolute bottom-[12%] right-[10%] h-[44%] w-auto text-white/90 drop-shadow-[0_8px_24px_rgba(0,0,0,.3)]" />
    </div>
  )
}

/** Capsule motif for the hero. */
export function Capsule({ className = '', rotate = 0, a = '#0b4fa8', b = '#dff0fb' }: { className?: string; rotate?: number; a?: string; b?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 120 48" className={className} style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      <defs><linearGradient id={id} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".55" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".18" /></linearGradient></defs>
      <rect x="2" y="2" width="116" height="44" rx="22" fill={b} />
      <path d="M24 2h36v44H24A22 22 0 0 1 24 2z" fill={a} />
      <rect x="2" y="2" width="116" height="44" rx="22" fill={`url(#${id})`} />
    </svg>
  )
}
