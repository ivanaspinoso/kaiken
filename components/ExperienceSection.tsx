'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

const categories = [
  {
    num: '01',
    title: 'Helados Artesanales',
    sub: 'Elaborados a mano, cada día',
    description: 'Recetas propias con ingredientes de temporada. Sin conservantes, sin colorantes. Solo sabor puro en cada cucharada.',
    gradient: 'from-[#c47558] via-[#D79074] to-[#e8a882]',
    bg: 'bg-[#c47558]',
  },
  {
    num: '02',
    title: 'Cafetería',
    sub: 'El ritual del buen café',
    description: 'Granos de especialidad, extracciones precisas y lattes de autor. Un café para cada momento.',
    gradient: 'from-[#2e1a22] via-[#5F3641] to-[#3a2028]',
    bg: 'bg-[#3a2028]',
  },
  {
    num: '03',
    title: 'Pastelería',
    sub: 'Dulce precisión hecha arte',
    description: 'Croissants laminados, tortas de autor, tartas de temporada. Cada pieza elaborada con manteca de primera calidad.',
    gradient: 'from-[#b0a070] via-[#C4B687] to-[#d4c898]',
    bg: 'bg-[#C4B687]',
  },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="experiencia"
      ref={ref}
      className="bg-cream py-24 md:py-36 px-5 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.38em] uppercase text-terracotta/80 font-medium mb-4">
              <span className="block w-5 h-px bg-terracotta/50" />
              Lo que hacemos
            </span>
            <h2 className="font-oleo text-burgundy text-4xl md:text-5xl lg:text-6xl leading-tight">
              Una propuesta para
              <br />
              <span className="text-terracotta italic">cada antojo.</span>
            </h2>
          </div>
          <p className="font-sans text-burgundy/40 text-sm leading-relaxed max-w-xs">
            Artesanal de principio a fin. Todo lo que ofrecemos nace de la misma pasión por los detalles.
          </p>
        </motion.div>

        {/* Cards — Faricci style: gradient top + cream bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 48 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: i * 0.14 }}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              {/* Visual area — gradient */}
              <div className={`relative h-64 md:h-72 lg:h-80 bg-gradient-to-br ${cat.gradient} overflow-hidden`}>
                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 xmlns=http://www.w3.org/2000/svg%3E%3Ccircle cx=20 cy=20 r=1 fill=%23fff/%3E%3C/svg%3E')]" />
                {/* Shine on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/6 transition-colors duration-500" />
                {/* Category number top-right */}
                <span className="absolute top-5 right-5 font-sans text-xs tracking-[0.2em] text-white/25 font-light">
                  {cat.num}
                </span>
                {/* Zoom effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} scale-100 group-hover:scale-110 transition-transform duration-700 -z-10`}
                />
              </div>

              {/* Info area — cream, like Faricci */}
              <div className="bg-cream border-x border-b border-burgundy/6 rounded-b-2xl px-6 py-6 md:py-7">
                <p className="font-sans text-[9px] tracking-[0.32em] uppercase text-terracotta/70 mb-2.5 font-medium">
                  {cat.sub}
                </p>
                <h3 className="font-oleo text-burgundy text-2xl md:text-2xl lg:text-3xl mb-3 leading-tight">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-burgundy/50 leading-relaxed mb-5">
                  {cat.description}
                </p>
                <a
                  href="https://tucan.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCTAClick('hero')}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.18em] uppercase font-semibold text-terracotta hover:text-burgundy transition-colors duration-200 group/link"
                >
                  Pedir ahora
                  <span className="inline-block group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
