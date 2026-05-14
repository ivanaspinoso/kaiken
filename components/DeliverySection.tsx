'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

export default function DeliverySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[620px] md:min-h-[740px] flex items-center">

      {/* Full-width background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <Image
          src="/images/local12.jpg"
          alt=""
          fill
          className="object-cover object-[center_70%]"
          sizes="100vw"
          quality={100}
          priority
        />
        {/* Dark overlay so the text is legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
      </motion.div>

      {/* Text overlay — left aligned */}
      <div className="relative z-10 px-5 md:px-16 lg:px-24 py-16 md:py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Eyebrow */}
          <p className="font-sans font-semibold text-[10px] tracking-[0.38em] uppercase text-cream/45 mb-6">
            Delivery disponible
          </p>

          {/* Big headline in Oleo Script, two lines */}
          <h2 className="font-sans font-bold text-cream leading-[1.06] mb-8
            text-5xl xs:text-6xl md:text-7xl lg:text-[5.5rem]">
            Sin moverte
            <br />
            <span className="font-oleo italic text-terracotta">de tu casa</span>
          </h2>

          <p className="font-sans font-light text-cream/55 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
            Pedí tus helados artesanales, cafés y pasteles directo desde la app Tucán. Llegamos rápido a donde estés.
          </p>

          <motion.a
            href="https://tucan.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => trackCTAClick('cta_final')}
            className="inline-flex items-center gap-3 bg-terracotta text-cream font-sans font-semibold
              text-[10px] tracking-[0.22em] uppercase px-10 py-4 rounded-full
              shadow-[0_8px_40px_rgba(215,144,116,0.4)]
              hover:bg-cream hover:text-burgundy transition-all duration-300"
          >
            Pedir por Tucán
            <span className="text-base">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
