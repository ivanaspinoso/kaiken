'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

const navLinks = [
  { label: 'La carta', href: '#carta' },
  { label: 'Nuestra historia', href: '#historia' },
  { label: 'Dónde estamos', href: '#contacto' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── Main header ── */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-visible ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(196,182,135,0.28)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 -my-6">
            <Image
              src="/images/kaikensolo.PNG"
              alt="Kaiken"
              width={400}
              height={150}
              className="h-20 md:h-24 w-auto max-w-[160px] md:max-w-[180px] object-contain drop-shadow-sm"
              priority
            />
          </a>

          {/* Links — desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end mr-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-sans text-[10px] tracking-[0.22em] uppercase font-medium transition-colors duration-200 whitespace-nowrap ${
                  scrolled
                    ? 'text-burgundy/60 hover:text-terracotta'
                    : 'text-cream/70 hover:text-cream'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA pill */}
          <a
            href="https://tucan.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick('nav')}
            className={`hidden md:inline-flex items-center gap-2 flex-shrink-0 font-sans font-semibold
              text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 rounded-full
              transition-all duration-300
              ${scrolled
                ? 'bg-terracotta text-cream hover:bg-burgundy hover:text-cream'
                : 'bg-cream/15 text-cream border border-cream/30 hover:bg-terracotta hover:border-transparent backdrop-blur-sm'
              }`}
          >
            Comprá
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-1 flex flex-col gap-1.5 flex-shrink-0 transition-colors duration-300 ${
              scrolled ? 'text-burgundy' : 'text-cream'
            }`}
            aria-label="Abrir menú"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-current origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-current origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-7"
          >
            <a href="#" className="mb-2" onClick={() => setOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Kaiken"
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </a>

            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm tracking-[0.28em] uppercase text-burgundy/55 hover:text-terracotta transition-colors"
              >
                {l.label}
              </a>
            ))}

            <a
              href="https://tucan.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { trackCTAClick('nav'); setOpen(false) }}
              className="mt-4 bg-terracotta text-cream font-sans font-semibold text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-burgundy transition-all duration-300"
            >
              Comprá ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
