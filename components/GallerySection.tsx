'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

const flavors = [
  {
    name: 'Chocolate Belga',
    category: 'Helado artesanal',
    gradient: 'from-[#2a1510] via-[#4a2418] to-[#3a1e14]',
    accent: 'text-terracotta',
  },
  {
    name: 'Dulce de Leche',
    category: 'Helado artesanal',
    gradient: 'from-[#c9a060] via-[#d4aa70] to-[#b88848]',
    accent: 'text-burgundy',
  },
  {
    name: 'Frutilla & Crema',
    category: 'Helado artesanal',
    gradient: 'from-[#a84040] via-[#c05050] to-[#D79074]',
    accent: 'text-cream',
  },
  {
    name: 'Cappuccino',
    category: 'Helado de cafetería',
    gradient: 'from-[#3a2028] via-[#5F3641] to-[#4a2a34]',
    accent: 'text-gold',
  },
  {
    name: 'Maracuyá',
    category: 'Helado frutal',
    gradient: 'from-[#c4901e] via-[#d4a030] to-[#e8b840]',
    accent: 'text-burgundy',
  },
  {
    name: 'Stracciatella',
    category: 'Helado clásico',
    gradient: 'from-[#e8e0d0] via-[#EFEDDC] to-[#d8d0c0]',
    accent: 'text-burgundy',
  },
]

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="galeria"
      ref={ref}
      className="bg-cream py-24 md:py-36 px-5 md:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="mb-14 md:mb-18 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.38em] uppercase text-terracotta/80 font-medium mb-4">
              <span className="block w-5 h-px bg-terracotta/50" />
              Nuestros sabores
            </span>
            <h2 className="font-oleo text-burgundy text-4xl md:text-5xl lg:text-6xl leading-tight">
              Sabores que
              <br />
              <span className="text-terracotta italic">enamoran.</span>
            </h2>
          </div>
          <a
            href="https://tucan.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('hero')}
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase font-semibold text-burgundy/60 hover:text-terracotta transition-colors duration-200 group self-start md:self-auto"
          >
            Ver todos los sabores
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
          </a>
        </motion.div>

        {/* 6-item grid — Faricci style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-14">
          {flavors.map((flavor, i) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.09 }}
              className="group rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 cursor-pointer"
              onClick={() => trackCTAClick('hero')}
            >
              {/* Color visual area */}
              <div
                className={`relative h-40 sm:h-48 md:h-52 lg:h-60 bg-gradient-to-br ${flavor.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
                <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-600 bg-gradient-to-br opacity-0 group-hover:opacity-20" />
                {/* Centered flavor initial */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-400">
                  <span className={`font-oleo text-6xl md:text-7xl ${flavor.accent}`}>
                    {flavor.name[0]}
                  </span>
                </div>
              </div>

              {/* Label — cream strip like Faricci */}
              <div className="bg-[#EFEDDC] border-x border-b border-burgundy/6 rounded-b-xl md:rounded-b-2xl px-4 md:px-5 py-4 md:py-5">
                <p className="font-sans text-[9px] tracking-[0.26em] uppercase text-terracotta/60 mb-1.5 font-medium">
                  {flavor.category}
                </p>
                <h3 className="font-oleo text-burgundy text-lg md:text-xl">
                  {flavor.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="https://tucan.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('hero')}
            className="inline-flex items-center gap-3 bg-burgundy text-cream font-sans font-semibold text-xs tracking-[0.22em] uppercase px-10 py-4 rounded-full hover:bg-terracotta transition-colors duration-300 shadow-md hover:shadow-xl"
          >
            Ver toda la carta en Tucán
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
