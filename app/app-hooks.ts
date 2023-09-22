'use client'

import { useScroll } from '@/utils/hooks/use-scroll'

export const AppHooks = () => {
  useScroll({
    lerp: 0.05,
    wheelMultiplier: 1,
    smoothWheel: true,
    normalizeWheel: true,
  })

  return null
}
