'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

export default function CTAFinalSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0e0709] py-28 md:py-44 px-5 md:px-8"
    >
      {/* Parallax warm background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d12] via-[#2e161e] to-[#5F3641]" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-terracotta/18 blur-[90px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gold/10 blur-[70px] rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="block w-10 h-px bg-gold/30" />
          <span className="font-sans text-[10px] tracking-[0.38em] uppercase text-gold/50">
            Tu momento favorito te espera
          </span>
          <span className="block w-10 h-px bg-gold/30" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 44 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-oleo text-cream leading-[1.07] mb-8
            text-4xl xs:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          Lo mejor de hoy
          <br />
          comienza con
          <br />
          <span className="text-terracotta italic">un antojo.</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.28 }}
          className="font-sans text-cream/45 text-sm md:text-base leading-relaxed max-w-md mx-auto mb-12"
        >
          Pedí tus helados, cafés y pasteles directamente por la app Tucán. Rápido, fácil y sin salir de donde estás.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="https://tucan.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => trackCTAClick('cta_final')}
            className="inline-flex items-center gap-3 bg-terracotta text-cream font-sans font-semibold
              text-xs tracking-[0.22em] uppercase px-12 py-5 rounded-full
              shadow-[0_10px_50px_rgba(215,144,116,0.4)]
              hover:bg-cream hover:text-burgundy transition-all duration-300"
          >
            Pedir por Tucán
            <span className="text-base">→</span>
          </motion.a>

          <a
            href="https://tucan.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('cta_final')}
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase
              text-cream/40 hover:text-cream/80 transition-colors duration-300
              border border-cream/15 hover:border-cream/30 px-8 py-5 rounded-full"
          >
            Ver el menú
          </a>
        </motion.div>

        {/* Micro trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-6 flex-wrap"
        >
          {['100% artesanal', 'Sin conservantes', 'Delivery rápido'].map((item) => (
            <span key={item} className="flex items-center gap-2 font-sans text-[9px] tracking-[0.22em] uppercase text-cream/25">
              <span className="w-1 h-1 rounded-full bg-terracotta/50 inline-block" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
