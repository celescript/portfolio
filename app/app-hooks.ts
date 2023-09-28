'use client'

import { useScroll } from '@/utils/hooks/use-scroll'

export const AppHooks = () => {
  useScroll({
    // lerp: 0.5,
    smoothWheel: true,
    normalizeWheel: true,
    touchMultiplier: 1.2,
    wheelMultiplier: 0.8,
    smoothTouch: false,
  })

  return null
}
