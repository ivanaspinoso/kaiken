'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clasicos = [
  {
    category: 'Cremas',
    accent: 'border-terracotta/40 bg-terracotta/5',
    tag: 'text-terracotta',
    flavors: ['Vainilla', 'Oreo', 'Almendrado', 'Americana', 'Sambayón', 'Crema del cielo', 'Menta granizada', 'Mascarpone c/ f. rojos'],
  },
  {
    category: 'Frutales',
    accent: 'border-gold/50 bg-gold/5',
    tag: 'text-[#a89570]',
    flavors: ['Frutilla al agua', 'Frutilla a la reina', 'Limón', 'Pera', 'Melón', 'Sandía', 'Mandarina'],
  },
  {
    category: 'Chocolates',
    accent: 'border-burgundy/25 bg-burgundy/5',
    tag: 'text-burgundy',
    flavors: ['Clásico', 'Blanco', 'Volcán de chocolate', 'Cacao 80%', 'Kaiken'],
  },
  {
    category: 'Sin Azúcar',
    accent: 'border-burgundy/15 bg-cream',
    tag: 'text-burgundy/60',
    flavors: ['Frutilla', 'Americana', 'Chocolate', 'Durazno', 'Dulce de leche'],
  },
  {
    category: 'Dulce de Leche',
    accent: 'border-terracotta/50 bg-terracotta/8',
    tag: 'text-terracotta',
    flavors: ['Clásico', 'Granizado', 'Con brownie', 'Colonial', 'Con bombón'],
  },
]

const especiales = [
  { name: 'Vainilla Kaiken', description: 'Vainilla con dulce de leche natural y almendras garrapiñadas' },
  { name: 'Frambuesa Patagónica', description: 'Frambuesas a la crema con frambuesas bañadas en chocolate blanco y negro' },
  { name: 'ChocoRock', description: 'Chocolate con cucuruchos bañados en chocolate y dulce de leche natural' },
  { name: 'Pistacho', description: 'Pistacho a la crema con pistacho tostado en trozos' },
  { name: 'Volcán de Chocolate', description: 'Chocolate con frutos rojos y torta volcán' },
  { name: 'Raffaello', description: 'Chocolate blanco con coco y crocante de almendras' },
  { name: 'Pavlova', description: 'Crema americana con frutos rojos y merengue' },
  { name: 'Merquise', description: 'Chocolate con dulce de leche natural y merengue italiano' },
  { name: 'Choco Menta', description: 'Helado de chocolate semi amargo con menta fresca' },
]

export default function CartaSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="sabores" className="bg-cream py-20 md:py-32 overflow-hidden border-t border-burgundy/8">

      {/* ── Header ───────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="font-sans font-semibold text-[10px] tracking-[0.38em] uppercase text-burgundy/40 mb-4">
            La carta
          </p>
          <h2 className="text-burgundy leading-tight">
            <span className="font-sans font-light text-2xl md:text-3xl block">Descubrí</span>
            <span className="font-oleo italic text-5xl md:text-6xl lg:text-7xl text-terracotta block mt-1">
              nuestros productos.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* ── CLÁSICOS ─────────────────────────────────────────────────── */}
      <div className="mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-7xl mx-auto px-6 md:px-10 mb-6 flex items-center gap-4"
        >
          <span className="font-sans font-semibold text-[11px] tracking-[0.3em] uppercase text-burgundy/50">
            Clásicos
          </span>
          <div className="flex-1 h-px bg-burgundy/10" />
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-burgundy/30">
            deslizá →
          </span>
        </motion.div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-4 overflow-x-auto pl-6 md:pl-10 pr-6 md:pr-10 pb-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {clasicos.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              className={`flex-shrink-0 w-56 md:w-64 rounded-2xl border p-6 ${cat.accent}`}
            >
              <p className={`font-sans font-bold text-[10px] tracking-[0.3em] uppercase mb-4 ${cat.tag}`}>
                {cat.category}
              </p>
              <ul className="flex flex-col gap-1.5">
                {cat.flavors.map((f) => (
                  <li key={f} className="font-sans text-sm text-burgundy/65 leading-snug flex items-start gap-2">
                    <span className="flex-shrink-0 w-1 h-1 rounded-full bg-terracotta/50 mt-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── ESPECIALES ───────────────────────────────────────────────── */}
      <div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-7xl mx-auto px-6 md:px-10 mb-6 flex items-center gap-4"
        >
          <span className="font-sans font-semibold text-[11px] tracking-[0.3em] uppercase text-burgundy/50">
            Especiales
          </span>
          <div className="flex-1 h-px bg-burgundy/10" />
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-burgundy/30">
            pasá el mouse →
          </span>
        </motion.div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-4 overflow-x-auto pl-6 md:pl-10 pr-6 md:pr-10 pb-3"
          style={{ scrollbarWidth: 'none' }}
        >
          {especiales.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.07 }}
              className="group relative flex-shrink-0 w-48 md:w-56 aspect-[3/4] rounded-2xl
                bg-burgundy overflow-hidden cursor-default"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-b from-burgundy via-burgundy to-[#3a1e28]" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/15 rounded-full blur-2xl" />

              {/* Name — always visible */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-500
                group-hover:justify-center group-hover:pb-0">
                <p className="font-oleo italic text-cream text-xl leading-tight
                  group-hover:text-terracotta group-hover:text-center transition-all duration-500">
                  {e.name}
                </p>
                <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-cream/25 mt-1
                  group-hover:opacity-0 transition-opacity duration-300">
                  Especial
                </span>
              </div>

              {/* Hover reveal — description */}
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-auto
                bg-terracotta/95 backdrop-blur-sm p-5 pt-4
                opacity-0 group-hover:opacity-100
                transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                <p className="font-sans font-light text-cream/90 text-xs leading-relaxed">
                  {e.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
