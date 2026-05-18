'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function HistoriaSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="historia" ref={ref} className="bg-cream overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[680px] md:min-h-[820px]">

        {/* Imagen — 60% izquierda, full bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full md:w-[60%] flex-shrink-0 aspect-[4/3] md:aspect-auto overflow-hidden order-2 md:order-1"
        >
          {/* Ken Burns zoom-out */}
          <motion.div
            initial={{ scale: 1.12 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/kaikenlocal.png"
              alt="Local Kaiken"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-burgundy/8" />
        </motion.div>

        {/* Texto — 40% derecha */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full md:w-[40%] flex flex-col justify-center px-5 md:px-12 lg:px-16 py-20 md:py-32 order-1 md:order-2"
        >
          <p className="font-sans font-semibold text-[10px] tracking-[0.38em] uppercase text-burgundy/45 mb-6">
            Nuestra historia
          </p>

          <h2 className="text-burgundy leading-tight mb-7">
            <span className="font-oleo italic text-5xl md:text-6xl text-terracotta">Kaiken</span>
            <span className="font-sans font-light text-2xl md:text-3xl block mt-1">
              nació de una pasión
              <br />
              <strong className="font-semibold">por lo artesanal.</strong>
            </span>
          </h2>

          <p className="font-sans font-light text-sm md:text-base text-burgundy/60 leading-relaxed mb-4">
            Nacimos y crecimos en el corazón de Ituzaingó, siendo el punto de encuentro donde se
            cruzan las historias de nuestros clubes, las salidas de la escuela y las{' '}
            <strong className="font-semibold text-burgundy/80">mesas familiares</strong>. Nuestra
            tradición no se mide en el tiempo, sino en las generaciones que nos siguen eligiendo.
          </p>
          <p className="font-sans font-light text-sm text-burgundy/50 leading-relaxed mb-4">
            Porque sabemos que{' '}
            <span className="text-terracotta font-medium">el sabor de nuestra casa</span>{' '}
            es el sabor de tu barrio.
          </p>
          <p className="font-sans font-semibold text-sm md:text-base text-burgundy/80 leading-relaxed mb-10">
            Somos Kaikén: una familia heladera.
          </p>

          

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 pt-8 border-t border-burgundy/10"
          >
            <a
              href="https://maps.google.com/?q=Gral+Miguel+Soler+462,+Ituzaingo,+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic font-sans text-sm text-burgundy/60 leading-relaxed mb-5 hover:text-terracotta transition-colors duration-200 block"
            >
              Gral. Miguel Soler 462<br />
              Ituzaingó, Buenos Aires
              <span className="block text-[10px] tracking-[0.2em] uppercase text-terracotta/70 mt-1.5">
                Ver en Google Maps →
              </span>
            </a>
            <p className="font-sans text-sm text-burgundy/50 mb-1">
              <span className="text-burgundy/70 font-medium">Lun</span> &nbsp;14:00–23:00
            </p>
            <p className="font-sans text-sm text-burgundy/50 mb-1">
              <span className="text-burgundy/70 font-medium">Mar — Jue</span> &nbsp;12:00–00:00
            </p>
            <p className="font-sans text-sm text-burgundy/50">
              <span className="text-burgundy/70 font-medium">Vie · Sáb · Dom</span> &nbsp;12:00–01:00
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
