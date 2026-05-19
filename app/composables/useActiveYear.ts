/**
 * Shared active-year state across PIV page components
 * (DesignTimeline drives it; Vision section reads it).
 *
 * Value is the year number (1, 2, 3...) — matches timeline entry `order`
 * and vision entry `year`. Null until DesignTimeline initializes it.
 *
 * Wraps `useState` so the ref is request-scoped on SSR.
 */
export function useActiveYear() {
  return useState<number | null>('piv-active-year', () => null)
}
