declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === 'undefined') return

  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', eventName, params)
  }

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', eventName, params)
  }
}

export function trackCTAClick(location: 'hero' | 'cta_final' | 'nav' | 'floating') {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: `pedir_ahora_${location}`,
    button_location: location,
    destination: 'tucan_app',
  })

  // Meta Pixel standard event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Pedir Ahora',
      content_category: location,
    })
  }
}

export function trackPageView(url: string) {
  if (typeof window === 'undefined') return
  if (window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '', {
      page_path: url,
    })
  }
}
