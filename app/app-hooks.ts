'use client'

import { useScroll } from '@/utils/hooks/use-scroll'

export const AppHooks = () => {
  useScroll({
    // lerp: 0.5,
    // smoothWheel: true,
    // normalizeWheel: true,
    touchMultiplier: 0.8,
    // touchInertiaMultiplier: 0.5,
    wheelMultiplier: 0.8,
  })

  return null
}
