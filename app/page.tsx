'use client'

import { About } from '@/components/organisms/about'
import { Header } from '@/components/organisms/header'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Projects } from '@/components/organisms/projects'

export default function Home() {
  const screenbig = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!screenbig.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: screenbig.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
        toggleActions: 'play pause resume reset',
      },
    })

    tl.to('.background', {
      scale: 2,
      duration: 1,
      ease: 'power2.out',
    })

    return () => {
      tl.reverse()
      tl.kill()
    }
  }, [])

  return (
    <div>
      <Header />
      <div ref={screenbig} className='relative screen-big overflow-x-clip'>
        <div className='relative top-0 h-screen w-full'>
          <About />
        </div>
      </div>
      <Projects />
    </div>
  )
}
