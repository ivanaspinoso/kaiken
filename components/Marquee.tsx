'use client'

interface MarqueeProps {
  items: string[]
  bgClass?: string
  textClass?: string
  sepClass?: string
  duration?: number
  py?: string
}

export default function Marquee({
  items,
  bgClass = 'bg-burgundy',
  textClass = 'text-cream',
  sepClass = 'text-cream/30',
  duration = 32,
  py = 'py-4',
}: MarqueeProps) {
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden ${bgClass} ${py}`} aria-hidden="true">
      <div
        className="marquee-track"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-5 px-3 font-sans font-medium text-xs md:text-sm tracking-[0.25em] uppercase whitespace-nowrap ${textClass}`}
          >
            {item}
            <span className={`text-sm ${sepClass}`}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
