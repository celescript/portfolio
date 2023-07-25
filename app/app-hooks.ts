'use client'

import { useScroll } from '@/utils/hooks/use-scroll'

export const AppHooks = () => {
  useScroll({
    lerp: 0.2,
    wheelMultiplier: 0.5,
    smoothWheel: true,
    normalizeWheel: true,
  })

  return null
}
