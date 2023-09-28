'use client'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { MacPreview } from './mac-preview'
import { projectData } from '@/utils/project-data'
import { Project } from './atoms/project'

export const Projects = () => {
  const projectsContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!projectsContainer.current) return

    const tl = gsap.to(projectsContainer.current, {
      scrollTrigger: {
        trigger: projectsContainer.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: '.pinned',
      },
    })

    return () => {
      tl.reverse()
      tl.kill()
    }
  }, [])

  return (
    <>
      <div className='relative' ref={projectsContainer}>
        {/* MAC OVERLAY */}
        <div className='absolute h-screen w-full pinned z-[100]'>
          <div className='absolute w-full md:w-[50vw] lg:w-[60vw] left-0 max-w-[400px] md:max-w-none md:-right-[15vw] md:left-auto right-0 bottom-[15vh] md:bottom-1/2 md:translate-y-[50%]'>
            <MacPreview
              projectData={projectData}
              projectsContainer={projectsContainer}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className='w-full h-[5vh]'></div>
        <div className='relative z-50 pt-[10vh] md:pt-0'>
          {projectData.map((project, i) => {
            return (
              <Project
                key={project.title}
                i={i}
                projectsContainer={projectsContainer}
                total={projectData.length}
                title={project.title}
                description={project.description}
              />
            )
          })}
        </div>
        <div className=' w-full h-[5vh]'></div>
      </div>
    </>
  )
}
