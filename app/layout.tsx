import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Analytics from '@/components/Analytics'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const oleoScript = localFont({
  src: [
    {
      path: '../public/fonts/OleoScriptSwashCaps-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/OleoScriptSwashCaps-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-oleo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kaiken.com.ar'),
  title: 'Kaiken | Heladería · Cafetería · Pastelería Artesanal',
  description:
    'Momentos dulces que merecen repetirse. Helados artesanales elaborados con ingredientes naturales, café de especialidad y pastelería de autor. Pedí por la app Tucán.',
  keywords: [
    'heladería artesanal',
    'cafetería premium',
    'pastelería artesanal',
    'helados',
    'café de especialidad',
    'postres',
    'delivery',
    'Tucán',
  ],
  openGraph: {
    title: 'Kaiken | Heladería · Cafetería · Pastelería Artesanal',
    description: 'Momentos dulces que merecen repetirse.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Kaiken',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaiken | Heladería · Cafetería · Pastelería Artesanal',
    description: 'Momentos dulces que merecen repetirse.',
  },
  icons: {
    icon: '/images/kaikenlogocompletoverde.PNG',
    apple: '/images/kaikenlogocompletoverde.PNG',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${oleoScript.variable} scroll-smooth`}>
      <body className={`${montserrat.className} antialiased`}>
        <Analytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''}
          pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ''}
        />
        {children}
      </body>
    </html>
  )
}
