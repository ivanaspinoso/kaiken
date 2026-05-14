'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const clasicos = [
  {
    categoria: 'Cremas',
    from: '#C4B687', to: '#C4B687',
    cardBg: '#C4B687', cardDark: false,
    sabores: ['Vainilla', 'Oreo', 'Almendrado', 'Americana', 'Sambayón', 'Crema del Cielo', 'Menta Granizada', 'Mascarpone c/ F. rojos'],
  },
  {
    categoria: 'Frutales',
    from: '#e8aa88', to: '#D79074',
    cardBg: '#D79074', cardDark: false,
    sabores: ['Frutilla al agua', 'Frutilla a la reina', 'Limón', 'Pera', 'Melón', 'Sandía', 'Mandarina'],
  },
  {
    categoria: 'Chocolates',
    from: '#5F3641', to: '#3a1e28',
    cardBg: '#5F3641', cardDark: true,
    sabores: ['Clásico', 'Blanco', 'Volcán de Chocolate', 'Cacao 80%', 'Kaiken'],
  },
  {
    categoria: 'Sin Azúcar',
    from: '#EFEDDC', to: '#C4B687',
    cardBg: '#C4B687', cardDark: false,
    sabores: ['Frutilla', 'Americana', 'Chocolate', 'Durazno', 'Dulce de Leche'],
  },
  {
    categoria: 'Dulce de Leche',
    from: '#D79074', to: '#5F3641',
    cardBg: '#D79074', cardDark: false,
    sabores: ['Clásico', 'Granizado', 'Con Brownie', 'Colonial', 'Con Bombon'],
  },
]

// cardDark: true → texto crema (card oscura); false → texto bordó (card clara)
const especiales = [
  { nombre: 'Vainilla Kaiken',      descripcion: 'Vainilla con dulce de leche natural y almendras garrapiñadas',              cardBg: '#D79074', cardDark: false },
  { nombre: 'Frambuesa Patagónica', descripcion: 'Frambuesas a la crema con frambuesas bañadas en chocolate blanco y negro',    cardBg: '#C4B687', cardDark: false },
  { nombre: 'ChocoRock',            descripcion: 'Chocolate con cucuruchos bañados en chocolate y dulce de leche natural',      cardBg: '#5F3641', cardDark: true  },
  { nombre: 'Pistacho',             descripcion: 'Pistacho a la crema con pistacho tostado en trozos',                          cardBg: '#D79074', cardDark: false },
  { nombre: 'Volcán de Chocolate',  descripcion: 'Chocolate con frutos rojos y torta volcán',                                   cardBg: '#C4B687', cardDark: false },
  { nombre: 'Raffaello',            descripcion: 'Chocolate blanco con coco y crocante de almendras',                           cardBg: '#D79074', cardDark: false },
  { nombre: 'Pavlova',              descripcion: 'Crema americana con frutos rojos y merengue',                                 cardBg: '#5F3641', cardDark: true  },
  { nombre: 'Marquise',             descripcion: 'Chocolate con dulce de leche natural y merengue italiano',                    cardBg: '#C4B687', cardDark: false },
  { nombre: 'Choco Menta',          descripcion: 'Helado de chocolate semi amargo con menta fresca',                            cardBg: '#D79074', cardDark: false },
]

const galeria = [
  { label: 'Medialunas',           from: '#C4B687', to: '#8a7050', image: '/images/medialuna.webp' },
  { label: 'Torta del día',        from: '#D79074', to: '#5F3641', image: '/images/torta.png' },
  { label: 'Café de especialidad', from: '#3a1e28', to: '#5F3641', image: '/images/cafe.jpg' },
  { label: 'Cheesecake',           from: '#C4B687', to: '#5F3641' },
  { label: 'Alfajores',            from: '#D79074', to: '#C4B687', image: '/images/alfajores.jpg' },
  { label: 'Tiramisú',             from: '#5F3641', to: '#3a1e28', image: '/images/tiramisu.png' },
  { label: 'Tostados',             from: '#C4B687', to: '#D79074', image: '/images/tostado1.png' },
  { label: 'Facturas',             from: '#EFEDDC', to: '#D79074', image: '/images/facturas.jpg' },
]

const BG = '#EFEDDC'

function ScrollHint() {
  return (
    <div className="flex items-center gap-1.5 mt-3 pl-0.5">
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ color: 'rgba(95,54,65,0.3)' }}
        className="font-sans text-[9px] tracking-[0.25em] uppercase select-none"
      >
        deslizá
      </motion.span>
      <motion.span
        initial={{ x: 0 }}
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        style={{ color: 'rgba(95,54,65,0.4)' }}
        className="text-[10px] select-none"
      >
        →
      </motion.span>
    </div>
  )
}

function Row({ children, hint = false }: { children: React.ReactNode; hint?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0
  }
  const stopDrag = () => { dragging.current = false }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2
  }

  return (
    <div>
      <div className="relative">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
          style={{ background: `linear-gradient(to left, ${BG}, transparent)` }}
        />
        <div
          ref={scrollRef}
          className="overflow-x-auto cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          style={{ touchAction: 'pan-x' }}
          onMouseDown={onMouseDown}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onMouseMove={onMouseMove}
        >
          <div className="flex gap-3 pb-1" style={{ width: 'max-content' }}>
            {children}
          </div>
        </div>
      </div>
      {hint && <ScrollHint />}
    </div>
  )
}

function RowLabel({ label, delay, isInView }: { label: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay }}
      className="flex items-center gap-5 mb-5"
    >
      <span className="font-sans font-semibold text-[10px] tracking-[0.42em] uppercase text-burgundy/45 whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: 'rgba(95,54,65,0.1)' }} />
    </motion.div>
  )
}

export default function GustosSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="carta" ref={ref} style={{ background: BG }} className="py-28 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <p className="font-sans font-semibold text-[10px] tracking-[0.42em] uppercase text-burgundy/45 mb-5">
            La carta
          </p>
          <h2 className="leading-tight">
            <span className="text-burgundy block">
              <span className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl">Nuestros </span>
              <span className="font-oleo italic text-5xl md:text-6xl lg:text-7xl">sabores.</span>
            </span>
            <span className="font-sans font-light text-xl md:text-2xl text-burgundy/55 block mt-3">
              Elaborados a mano, cada día.
            </span>
          </h2>
        </motion.div>

        {/* ── Clásicos ── */}
        <RowLabel label="Clásicos" delay={0.2} isInView={isInView} />
        <div className="mb-16">
          <Row>
            {clasicos.map((cat, i) => (
              <motion.div
                key={cat.categoria}
                initial={{ opacity: 0, x: 32 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.08 }}
                className="w-44 sm:w-52 flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  background: cat.cardBg,
                  boxShadow: cat.cardDark ? 'none' : '0 8px 24px rgba(95,54,65,0.08)',
                }}
              >
                {/* Categoria header */}
                <div className="px-5 py-4" style={{ background: 'rgba(0,0,0,0.12)' }}>
                  <p
                    className="font-sans font-bold text-[10px] tracking-[0.36em] uppercase"
                    style={{ color: cat.cardDark ? '#EFEDDC' : 'rgba(95,54,65,1)' }}
                  >
                    {cat.categoria}
                  </p>
                </div>
                <ul className="px-5 py-5 space-y-2">
                  {cat.sabores.map((s) => (
                    <li
                      key={s}
                      className="font-sans text-sm leading-snug"
                      style={{ color: cat.cardDark ? 'rgba(239,237,220,0.92)' : 'rgba(95,54,65,0.75)' }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Row>
        </div>

        {/* ── Especiales ── */}
        <RowLabel label="Especiales" delay={0.35} isInView={isInView} />
        <Row hint>
          {especiales.map((s, i) => (
            <motion.div
              key={s.nombre}
              initial={{ opacity: 0, x: 32 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.35 + i * 0.06 }}
              className="group relative w-44 h-52 sm:w-52 sm:h-60 flex-shrink-0 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: s.cardBg,
                boxShadow: s.cardDark ? 'none' : '0 8px 24px rgba(95,54,65,0.08)',
              }}
            >
              {/* Nombre */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 transition-opacity duration-300 group-hover:opacity-0">
                <span
                  className="font-sans font-semibold text-base text-center leading-tight tracking-wide"
                  style={{ color: s.cardDark ? '#EFEDDC' : 'rgba(95,54,65,1)' }}
                >
                  {s.nombre}
                </span>
                <span
                  className="mt-4 block w-5 h-px"
                  style={{ background: s.cardDark ? 'rgba(239,237,220,0.4)' : 'rgba(95,54,65,0.3)' }}
                />
              </div>

              {/* Ingredientes on hover — always dark overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-between px-5 py-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ background: 'linear-gradient(140deg, #5F3641, #3a1e28)' }}
              >
                <span className="font-sans font-bold text-[8px] tracking-[0.38em] uppercase" style={{ color: 'rgba(239,237,220,0.55)' }}>
                  {s.nombre}
                </span>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(239,237,220,0.9)' }}>
                  {s.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </Row>

        {/* ── Pastelería y Cafetería ── */}
        <div className="mt-16">
          <RowLabel label="Pastelería y Cafetería" delay={0.5} isInView={isInView} />
          <Row hint>
            {galeria.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 32 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.5 + i * 0.06 }}
                className="relative w-60 h-40 sm:w-72 sm:h-48 flex-shrink-0 rounded-2xl overflow-hidden"
                style={item.image ? undefined : { background: `linear-gradient(140deg, ${item.from}, ${item.to})` }}
              >
                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 240px, 288px"
                      draggable={false}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(95,54,65,0.6) 0%, transparent 55%)' }} />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
                      <rect x="4" y="10" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" className="text-cream" />
                      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2" className="text-cream" />
                      <circle cx="37" cy="16" r="2" fill="currentColor" className="text-cream" />
                    </svg>
                  </div>
                )}
                <div
                  className="absolute bottom-0 inset-x-0 px-4 py-3"
                  style={{ background: item.image ? undefined : 'linear-gradient(to top, rgba(95,54,65,0.5), transparent)' }}
                >
                  <p
                    className="font-sans font-semibold text-[10px] tracking-[0.3em] uppercase"
                    style={{ color: 'rgba(239,237,220,0.85)' }}
                  >
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </Row>
        </div>

      </div>
    </section>
  )
}
