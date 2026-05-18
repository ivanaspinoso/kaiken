'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

const categorias = [
  {
    num: '01',
    title: 'Helados Artesanales',
    description: 'Elaborados a mano con ingredientes naturales, sin conservantes. La base de todo lo que somos.',
    gradient: 'from-[#D79074] via-[#c47558] to-[#a85a3a]',
    overlay: 'rgba(215,144,116,0.38)',
    image: '/images/imagenkaiken4.jpeg',
    href: 'https://pedir.tucan.la/menu/KaikenItuzaingo/Sal%C3%B3n#CATEGORY_Helados_artesanales',
  },
  {
    num: '02',
    title: 'Postres Helados',
    description: 'Creaciones únicas que combinan texturas y sabores. Para los que quieren algo más.',
    gradient: 'from-[#5F3641] via-[#3a2028] to-[#2a1520]',
    overlay: 'rgba(95,54,65,0.48)',
    image: '/images/imagenkaiken6.jpeg',
    href: 'https://pedir.tucan.la/menu/KaikenItuzaingo/Sal%C3%B3n#CATEGORY_Postres_helados',
  },
  {
    num: '03',
    title: 'Dulces de la Casa',
    description: 'Recetas propias que van más allá del helado. El dulce con identidad Kaiken.',
    gradient: 'from-[#C4B687] via-[#a89570] to-[#8a7858]',
    overlay: 'rgba(196,182,135,0.38)',
    image: '/images/dulcesdelacasa.jpeg',
    href: 'https://pedir.tucan.la/menu/KaikenItuzaingo/Sal%C3%B3n#CATEGORY_Dulces_de_la_casa',
  },
  {
    num: '04',
    title: 'Extras',
    description: 'Todo lo que suma. Coberturas, toppings y complementos para personalizar tu pedido.',
    gradient: 'from-[#c47558] via-[#D79074] to-[#e8a882]',
    overlay: 'rgba(196,100,88,0.38)',
    image: '/images/extrakaiken.jpeg',
    href: 'https://pedir.tucan.la/menu/KaikenItuzaingo/Sal%C3%B3n#CATEGORY_Extras',
  },
]

export default function SaboresSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sabores" ref={ref} className="relative bg-gold overflow-hidden py-28 md:py-44 px-5 md:px-8">

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-sans font-semibold text-[10px] tracking-[0.38em] uppercase text-burgundy/50 mb-4">
            Nuestra carta
          </p>
          <h2 className="leading-tight">
            <span className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-burgundy block">
              Todo lo que querés,
            </span>
            <span className="font-oleo italic text-4xl md:text-5xl lg:text-6xl text-burgundy block">
              en un solo lugar
            </span>
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-12">
          {categorias.map((cat, i) => (
            <motion.a
              key={cat.title}
              href={cat.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('hero')}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-[#F5F3E8] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-400 cursor-pointer"
            >
              {/* Image / color band */}
              <div className={`relative h-40 md:h-48 overflow-hidden ${cat.image ? '' : `bg-gradient-to-br ${cat.gradient}`}`}>
                {cat.image && (
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    draggable={false}
                  />
                )}
                {cat.image && (
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(140deg, ${cat.overlay}, rgba(0,0,0,0.15))` }}
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
                <span className="absolute top-5 right-5 font-sans text-xs tracking-[0.2em] text-white/30 font-light">
                  {cat.num}
                </span>
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-5 right-5 text-white/70 text-lg"
                >
                  →
                </motion.span>
              </div>

              {/* Info */}
              <div className="px-6 py-6">
                <h3 className="font-sans font-semibold text-burgundy text-xl md:text-2xl mb-2 leading-tight">
                  {cat.title}
                </h3>
                <p className="font-sans font-light text-sm text-burgundy/50 leading-relaxed mb-4">
                  {cat.description}
                </p>
                <span className="font-sans font-bold text-xs text-burgundy/60 group-hover:text-terracotta transition-colors duration-200 flex items-center gap-2">
                  Ver en Tucán
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA global */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="https://pedir.tucan.la/menu/KaikenItuzaingo/Sal%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('hero')}
            className="inline-flex items-center gap-3 bg-burgundy text-cream font-sans font-semibold
              text-[10px] tracking-[0.22em] uppercase px-10 py-4 rounded-full
              hover:bg-terracotta transition-colors duration-300 shadow-md"
          >
            Ver la carta completa
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
