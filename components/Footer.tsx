'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { trackCTAClick } from '@/lib/analytics'

const navCols = [
  {
    heading: 'Menú',
    links: [
      { label: 'La carta', href: '#carta' },
      { label: 'Nuestra historia', href: '#historia' },
      { label: 'Dónde estamos', href: '#contacto' },
    ],
  },
]

const socials = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
        <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-burgundy " id="contacto">
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">

          {/* Brand col */}
          <div>
            <a href="#" className="inline-block mb-4">
              <Image
                src="/images/kaikenlogocompletoverde.PNG"
                alt="Kaiken"
                width={320}
                height={120}
                className="h-32 w-auto object-contain"
              />
            </a>
            <p className="font-sans text-cream/45 text-xs leading-relaxed mb-6 max-w-48">
              Heladería artesanal, cafetería de especialidad y pastelería de autor.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  whileHover={{ scale: 1.15 }}
                  className="w-9 h-9 rounded-full border border-cream/12 flex items-center justify-center
                    text-cream/30 hover:text-terracotta hover:border-terracotta/30 transition-all duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans font-semibold text-[9px] tracking-[0.35em] uppercase text-cream/50 mb-5">
                {col.heading}
              </h3>
              <nav className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="font-sans text-sm text-cream/50 hover:text-terracotta tracking-wide transition-colors duration-200 w-fit"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <h3 className="font-sans font-semibold text-[9px] tracking-[0.35em] uppercase text-cream/50 mb-5">
              Dónde estamos
            </h3>
            <address className="not-italic font-sans text-sm text-cream/50 leading-relaxed mb-5">
              Gral. Miguel Soler 462<br />
              Ituzaingó, Buenos Aires
            </address>
            <p className="font-sans text-sm text-cream/45 leading-relaxed mb-1">
              <span className="text-cream/70">Mar — Jue</span> 12:00–00:00
            </p>
            <p className="font-sans text-sm text-cream/45">
              <span className="text-cream/70">Vie · Sáb · Dom</span> 12:00–01:00
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/8 mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[9px] tracking-[0.15em] uppercase text-cream/25">
            &copy; {new Date().getFullYear()} Kaiken. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://tucan.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('nav')}
              className="font-sans text-[9px] tracking-[0.22em] uppercase text-cream/35 hover:text-terracotta transition-colors"
            >
              Pedir por Tucán →
            </a>
            <p className="font-sans text-[9px] text-cream/20">
              Hecho con ♥ en Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
