'use client'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export const Projects = () => {
  const projectscontainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!projectscontainer.current) return

    const tl = gsap.to('.gallery', {
      scrollTrigger: {
        trigger: projectscontainer.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
      },
    })

    return () => {
      tl.reverse()
    }
  }, [])

  return (
    <div className='relative h-[300vh] ' ref={projectscontainer}>
      <div className='sticky top-0 left-0 w-full h-full bg-black gallery'></div>
    </div>
  )
}
