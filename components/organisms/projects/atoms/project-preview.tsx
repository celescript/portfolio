import { ProjectConfig } from '@/utils/project-data'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface ProjectPreviewProps {
  i: number
  projectscontainerRef: React.RefObject<HTMLDivElement>
  total: number
  data: ProjectConfig
}

export default function ProjectPreview({
  i,
  projectscontainerRef,
  total,
  data,
}: ProjectPreviewProps) {
  const currentImgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!projectscontainerRef.current || !currentImgRef.current) return

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: projectscontainerRef.current,
          start: (i / total) * 100 + '% 70%', // container, viewport
          end: (i / total) * 100 + '% top',
          toggleActions: 'play pause resume reset',
          markers: true,
          scrub: true,
        },
      })
      .to(currentImgRef.current, {
        bottom: '0%',
        ease: 'none',
      })

    return () => {
      tl.kill()
    }
  }, [i, total])

  return (
    <div
      key={data.title}
      ref={currentImgRef}
      className='absolute h-full w-full z-30 left-0 flex justify-center items-center bottom-[-100%]'
    >
      <Image
        alt={data.title}
        fill
        src={'/images/projects/' + data.image}
        className='relative w-full  aspect-[936/530] z-40'
      ></Image>
    </div>
  )
}
