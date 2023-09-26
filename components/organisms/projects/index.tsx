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
        <div className='absolute h-screen w-full  overflow-y-visible pinned'>
          <div className='absolute w-[50vw] md:w-[60vw] -right-[15vw] top-1/2 translate-y-[-50%]'>
            <MacPreview
              projectData={projectData}
              projectsContainer={projectsContainer}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className=' w-full h-[5vh]'></div>
        <div className='relative'>
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
