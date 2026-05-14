'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] overflow-hidden flex items-center justify-center">

      {/* Full-screen looping background video */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/heladosfondo.png"
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/videokaiken.mp4"
        />
      </motion.div>

      {/* Dark overlay — softens video brightness */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Main content — Faricci centered layout */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center text-center px-5"
      >
        {/* ── Eyebrow ── */}
        

        {/* ── Main heading ── */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans font-semibold text-cream mb-10 max-w-3xl
            text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem]
            leading-snug"
        >
          Nuestra mayor tradición es ser parte de tu historia
        </motion.h1>

        {/* ── CTA ── */}
        <motion.a
          href="https://pedir.tucan.la/menu/KaikenItuzaingo/Delivery"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => trackCTAClick('hero')}
          className="inline-flex items-center gap-3 bg-terracotta text-cream font-sans font-semibold
            text-[11px] tracking-[0.25em] uppercase px-10 py-4 rounded-full
            shadow-[0_8px_40px_rgba(215,144,116,0.4)]
            hover:bg-cream hover:text-burgundy transition-all duration-300"
        >
          Hacé tu pedido
          <span className="text-base leading-none">→</span>
        </motion.a>

        
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        
      </motion.div>
    </section>
  )
}
