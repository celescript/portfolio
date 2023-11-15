'use client'

import { useScroll } from '@/utils/hooks/use-scroll'

export const AppHooks = () => {
  useScroll({
    touchMultiplier: 0.8,
    wheelMultiplier: 0.8,
  })

  return null
}
