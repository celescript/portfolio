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
    console.log('startingLenis')
    const abortController = new AbortController()
    const signal = abortController.signal

    const lenis = new Lenis(options)
    lenis.on('scroll', () => {
      ScrollTrigger.update()
    })

    // TO DO: ACTIVATE THIS WHEN USING GSAP
    // const raf: gsap.TickerCallback = (time) => {
    //   if (signal.aborted) return
    //   lenis.raf(time)
    // }

    // gsap.ticker.add(raf, false, true)

    // TO DO: REMOVE THIS WHEN USING GSAP
    function raf(time: number) {
      if (signal.aborted) return
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      abortController.abort()
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stringifyOptions])

  return
}
