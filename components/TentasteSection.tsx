'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.5l5.797-1.517A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.947 0-3.775-.502-5.365-1.38l-.385-.228-3.985 1.043 1.064-3.878-.249-.398A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

const PedidosYaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5l-5-3V7h1.5v5.7l4.25 2.55-.75 1.25z"/>
  </svg>
)

export default function TentasteSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-cream py-16 md:py-24 px-5 md:px-8 border-t border-burgundy/8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Headline */}
        <h2 className="font-oleo text-burgundy leading-tight mb-3
          text-5xl md:text-6xl lg:text-7xl">
          ¿Te tentaste?
        </h2>

        <p className="font-sans font-light text-burgundy/50 text-sm md:text-base tracking-wide mb-10">
          Pedí ahora y recibilo donde estés.
        </p>

        {/* Two CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('cta_final')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 bg-[#25D366] text-white font-sans font-semibold
              text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full w-full sm:w-auto justify-center
              shadow-[0_4px_24px_rgba(37,211,102,0.3)]
              hover:bg-[#20bc5a] transition-all duration-300"
          >
            <WhatsAppIcon />
            Pedí por WhatsApp
          </motion.a>

          {/* PedidosYa */}
          <motion.a
            href="https://www.pedidosya.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('cta_final')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 bg-[#FA3F2B] text-white font-sans font-semibold
              text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full w-full sm:w-auto justify-center
              shadow-[0_4px_24px_rgba(250,63,43,0.3)]
              hover:bg-[#e0321f] transition-all duration-300"
          >
            <PedidosYaIcon />
            Pedí por PedidosYa
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
