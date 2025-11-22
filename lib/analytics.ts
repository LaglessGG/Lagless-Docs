/**
 * Track a CTA click event with Plausible Analytics
 */
export function trackCTAClick(location: string, campaign?: string) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('CTACLICK', {
      props: {
        location,
        ...(campaign && { campaign })
      }
    });
  }
}

/**
 * Generic function to track custom events
 */
export function trackEvent(eventName: string, props?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }
} 