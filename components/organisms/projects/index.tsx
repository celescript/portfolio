'use client'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { MacPreview } from './mac-preview'

export const Projects = () => {
  const projectsContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!projectsContainer.current) return

    const tl = gsap.to('.gallery', {
      scrollTrigger: {
        trigger: projectsContainer.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
        pin: '.pinned',
      },
    })

    return () => {
      tl.reverse()
      tl.kill()
    }
  }, [])

  return (
    <div className='relative' ref={projectsContainer}>
      <div className='absolute h-screen w-full border overflow-x-hidden border-red-600 pinned'>
        <div className='absolute w-[50vw] -right-[15vw] top-1/2 translate-y-[-50%]'>
          <MacPreview projectsContainer={projectsContainer} />
        </div>
      </div>
      <div className='relative'>
        {
          // loop de proyectos
        }
        <div className='relative h-screen text-white'>Titulo de proyect</div>
        <div className='relative h-screen text-white'>Titulo de proyect</div>
        <div className='relative h-screen text-white'>Titulo de proyect</div>
      </div>
    </div>
  )
}
