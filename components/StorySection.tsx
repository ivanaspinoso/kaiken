'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const details = [
  'Sin conservantes',
  'Sin colorantes artificiales',
  '100% artesanal',
  'Ingredientes de temporada',
]

export default function StorySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section
      ref={ref}
      className="bg-burgundy overflow-hidden"
    >
      <div className="flex flex-col md:flex-row min-h-[600px] md:min-h-[680px]">

        {/* Left — visual panel (animated gradient, parallax) */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
          <motion.div
            style={{ y: visualY }}
            className="absolute inset-0 scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D79074] via-[#b8724e] to-[#5F3641]" />
            {/* Layered shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-cream/10" />
                <div className="absolute inset-4 rounded-full border border-cream/8" />
                <div className="absolute inset-8 rounded-full bg-cream/5 backdrop-blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-oleo text-cream/90 text-4xl md:text-5xl text-center leading-tight px-4">
                    Hecho<br />a mano
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-gold/40" />
            <div className="absolute top-16 left-20 w-1 h-1 rounded-full bg-cream/30" />
            <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-terracotta/50" />
            <div className="absolute bottom-24 right-24 w-1.5 h-1.5 rounded-full bg-gold/30" />
          </motion.div>
        </div>

        {/* Right — story text */}
        <div className="w-full md:w-1/2 flex items-center px-8 md:px-14 lg:px-20 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.38em] uppercase text-gold/60 font-medium mb-7">
              <span className="block w-5 h-px bg-gold/40" />
              Nuestra filosofía
            </span>

            <h2 className="font-oleo text-cream text-4xl md:text-5xl lg:text-[3.2rem] leading-tight mb-7">
              Elaborado con
              <br />
              <span className="text-terracotta italic">amor y detalle.</span>
            </h2>

            <p className="font-sans text-cream/55 text-sm md:text-base leading-relaxed mb-5 max-w-sm">
              Desde el primer día, cada producto que sale de nuestra cocina es el resultado de horas de dedicación, ingredientes cuidadosamente seleccionados y recetas que perfeccionamos día a día.
            </p>
            <p className="font-sans text-cream/40 text-sm leading-relaxed mb-10 max-w-sm">
              No usamos atajos. No usamos conservantes. No compromentemos el sabor. Solo ingredientes reales, procesos artesanales y mucha pasión por lo que hacemos.
            </p>

            {/* Detail list */}
            <ul className="flex flex-col gap-3">
              {details.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 font-sans text-sm text-cream/60"
                >
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-terracotta/70" />
                  {d}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
