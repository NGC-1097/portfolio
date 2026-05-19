/**
 * useAmbientTheme
 *
 * Combines the user's system dark/light preference with their local time of day
 * to produce one of four "ambient" states that subtly tune the palette:
 *
 *   bright  — day   + light mode  (default; crisp, high contrast)
 *   warm    — night + light mode  (warmer background, relaxed)
 *   dimmed  — day   + dark mode   (muted dark; eyes adapting to screen in daylight)
 *   dark    — night + dark mode   (full depth; maximum contrast in a dark room)
 */

export type AmbientMode = 'bright' | 'warm' | 'dimmed' | 'dark'

const DAY_START = 6   // 06:00
const DAY_END   = 20  // 20:00

export function useAmbientTheme() {
  const colorMode = useColorMode()

  const isNight = computed(() => {
    const hour = new Date().getHours()
    return hour < DAY_START || hour >= DAY_END
  })

  const ambientMode = computed<AmbientMode>(() => {
    const dark  = colorMode.value === 'dark'
    const night = isNight.value

    if (!dark && !night) return 'bright'
    if (!dark &&  night) return 'warm'
    if ( dark && !night) return 'dimmed'
    return 'dark'
  })

  // Apply ambient class to <html> — called once in app.vue
  function applyAmbientClass(mode: AmbientMode) {
    if (typeof document === 'undefined') return
    const html = document.documentElement
    html.classList.remove('ambient-bright', 'ambient-warm', 'ambient-dimmed', 'ambient-dark')
    html.classList.add(`ambient-${mode}`)
  }

  return { ambientMode, isNight, applyAmbientClass }
}
