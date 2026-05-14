'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
)

export default function InstagramSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-terracotta py-28 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-sans font-semibold text-[10px] tracking-[0.38em] uppercase text-cream/55 mb-6"
        >
          Seguinos en Instagram
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="leading-tight mb-10"
        >
          <span className="font-sans font-light text-2xl md:text-3xl text-cream/80 block">
            Seguí tentándote en
          </span>
          <span className="font-oleo italic text-5xl md:text-6xl lg:text-7xl text-cream block mt-1">
            nuestras redes
          </span>
        </motion.h2>

        {/* Instagram CTA */}
        <motion.a
          href="https://www.instagram.com/kaiken.helados"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex flex-col items-center gap-5"
        >
          {/* Big handle pill */}
          <span className="inline-flex items-center gap-3 bg-cream text-burgundy font-sans font-semibold
            text-sm md:text-base tracking-[0.12em] px-10 py-5 rounded-full
            shadow-[0_8px_40px_rgba(0,0,0,0.12)]
            group-hover:bg-burgundy group-hover:text-cream transition-all duration-300">
            <IgIcon />
            @kaiken.helados
          </span>

          <span className="font-sans text-[10px] tracking-[0.28em] uppercase text-cream/50
            group-hover:text-cream transition-colors duration-300">
            Ver perfil en Instagram →
          </span>
        </motion.a>

        {/* Decorative dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-14"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block rounded-full bg-cream/30"
              style={{ width: i === 1 ? 28 : 8, height: 8 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
