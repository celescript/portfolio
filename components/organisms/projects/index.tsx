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
      <div className='absolute h-screen w-full border border-red-600 pinned'>
        <div className='absolute right-10 top-1/2 translate-y-[-50%] border border-green-600'>
          <MacPreview projectsContainer={projectsContainer} />
        </div>
      </div>
      <div className='relative'>
        <div className='relative h-screen'>Titulo de proyect</div>
        <div className='relative h-screen'>Titulo de proyect</div>
        <div className='relative h-screen'>Titulo de proyect</div>
      </div>
    </div>
  )
}
// 1 solo slide
// ProjectPreview = ({
//   i,
//   projectscontainerRef,
//   total,
//   title,
//   href
// }) => {

// }
