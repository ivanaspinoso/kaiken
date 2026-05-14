'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import BotanicalBg from './BotanicalBg'
import Marquee from './Marquee'
import { trackCTAClick } from '@/lib/analytics'

const marqueeItems = [
  'Helados artesanales',
  'Postres helados',
  'Dulces de la casa',
  'Extras',
  'Hecho con amor',
  '100% artesanal',
]

export default function DateElGustoSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="experiencia">

      {/* ── Two-column full-bleed ─────────────────────────────────────── */}
      <div className="relative bg-cream overflow-hidden flex flex-col md:flex-row min-h-[680px] md:min-h-[820px]">
        <BotanicalBg />

        {/* Left — texto 40% */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 w-full md:w-[40%] flex flex-col justify-center px-5 md:px-12 lg:px-16 py-20 md:py-32"
        >
          <p className="font-sans font-semibold text-[10px] tracking-[0.38em] uppercase text-burgundy/50 mb-5">
            Sabores seleccionados
          </p>

          <h2 className="text-burgundy leading-tight mb-6">
            <span className="font-sans font-bold text-4xl md:text-5xl lg:text-[3.2rem] block">
              ¡Date
            </span>
            <span className="font-oleo italic text-5xl md:text-6xl lg:text-[4rem] text-terracotta block -mt-1">
              el gusto!
            </span>
          </h2>

          <p className="font-sans font-light text-sm md:text-base text-burgundy/65 leading-relaxed mb-4">
            Elaboramos cada día{' '}
            <strong className="font-semibold text-burgundy">helados artesanales</strong>,{' '}
            cafés de especialidad y pasteles de autor. Todo con ingredientes{' '}
            <span className="text-terracotta font-medium">100% naturales</span>, sin atajos y
            con mucha pasión por el detalle.
          </p>
          <p className="font-sans font-light text-sm text-burgundy/50 leading-relaxed mb-10">
            Porque creemos que{' '}
            <strong className="font-semibold text-burgundy/70">disfrutar lo artesanal</strong>{' '}
            no debería ser un lujo, sino un momento cotidiano que merezca repetirse.
          </p>

          <a
            href="https://tucan.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('hero')}
            className="inline-flex items-center gap-3 bg-terracotta text-cream font-sans font-semibold
              text-[10px] tracking-[0.22em] uppercase px-9 py-3.5 rounded-full w-fit
              hover:bg-burgundy transition-colors duration-300"
          >
            Conocé nuestra carta
            <span>→</span>
          </a>
        </motion.div>

        {/* Right — imagen full-bleed 60% */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full md:w-[60%] flex-shrink-0 aspect-[4/3] md:aspect-auto overflow-hidden"
        >
          {/* Ken Burns zoom-out */}
          <motion.div
            initial={{ scale: 1.12 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/imagentest.jpg"
              alt="Helados artesanales Kaiken"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-burgundy/8" />
        </motion.div>
      </div>

      {/* ── Marquee strip ──────────────────────────────────────────────── */}
      <Marquee
        items={marqueeItems}
        bgClass="bg-terracotta"
        textClass="text-cream"
        sepClass="text-gold/40"
        duration={30}
        py="py-4 md:py-5"
      />
    </section>
  )
}
