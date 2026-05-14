'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BotanicalBg from './BotanicalBg'

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const hours = [
  { days: 'Martes — Jueves', time: '12:00 — 00:00' },
  { days: 'Vie · Sáb · Dom', time: '12:00 — 01:00' },
]

export default function FranquiciasSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative bg-cream overflow-hidden border-t border-burgundy/8 py-28 md:py-44"
    >
      <BotanicalBg />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-sans font-semibold text-[10px] tracking-[0.42em] uppercase text-burgundy/40 mb-12 md:mb-16"
        >
          Encontranos
        </motion.p>

        {/* Grid: dirección izquierda · horarios derecha */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-start">

          {/* ── Dirección ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-terracotta mb-6">
              <MapPinIcon />
              <span className="font-sans font-semibold text-[10px] tracking-[0.32em] uppercase text-burgundy/40">
                Dirección
              </span>
            </div>

            {/* La dirección como titular principal */}
            <div className="mb-6">
              <p className="font-oleo italic text-terracotta leading-tight
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Gral. Miguel<br />Soler 462
              </p>
              <p className="font-sans text-burgundy/50 text-base md:text-lg mt-3">
                Ituzaingó, Buenos Aires
              </p>
            </div>

            <p className="font-sans text-sm text-burgundy/40 leading-relaxed mb-8 max-w-xs">
              En el corazón de Ituzaingó, donde cada visita termina con algo dulce en la mano.
            </p>

            <a
              href="https://maps.google.com/?q=Gral.+Miguel+Soler+462+Ituzaingo+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-burgundy text-cream
                font-sans font-semibold text-[10px] tracking-[0.22em] uppercase
                px-8 py-3.5 rounded-full
                hover:bg-terracotta transition-colors duration-300"
            >
              Cómo llegar
              <span>→</span>
            </a>
          </motion.div>

          {/* ── Horarios ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="md:pt-20"
          >
            <div className="flex items-center gap-2 text-terracotta mb-8">
              <ClockIcon />
              <span className="font-sans font-semibold text-[10px] tracking-[0.32em] uppercase text-burgundy/40">
                Horarios
              </span>
            </div>

            <div className="flex flex-col">
              {hours.map((h, i) => (
                <motion.div
                  key={h.days}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  className="flex items-baseline justify-between gap-6 py-5 border-b border-burgundy/8 last:border-0"
                >
                  <span className="font-sans text-sm text-burgundy/45 whitespace-nowrap">
                    {h.days}
                  </span>
                  <span className="font-oleo italic text-burgundy text-2xl md:text-3xl whitespace-nowrap">
                    {h.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Dots decorativos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-2 mt-16 md:mt-20"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block rounded-full bg-terracotta/25"
              style={{ width: i === 1 ? 28 : 8, height: 8 }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
