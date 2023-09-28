'use client'

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { useEffect } from 'react'

type LenisOptions = ConstructorParameters<typeof Lenis>[0]

export const useScroll = (options: LenisOptions = {}) => {
  useEffect(() => {
    gsap.registerPlugin(CustomEase)
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  const stringifyOptions = JSON.stringify(options)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const lenis = new Lenis(options)
    function raf(time: number) {
      if (signal.aborted) return
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      abortController.abort()
      lenis.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifyOptions])

  return
}
