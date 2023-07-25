'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function Home() {
  const container = useRef(null)

  useEffect(() => {
    if (!container.current) return
    let ctx = gsap.context(() => {
      gsap.to('.mini', {
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: '.section',
          start: '50% 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
          markers: {
            startColor: 'green',
            endColor: 'red',
          },
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <main className='main h-[300vh] bg-yellow pt-[150vh]' ref={container}>
      <div className='section h-[500px] bg-black'>
        <div className='mini h-[200px] bg-red opacity-0'></div>
      </div>
    </main>
  )
}
