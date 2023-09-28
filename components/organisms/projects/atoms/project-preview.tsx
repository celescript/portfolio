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

  // if i is 0, then the first image will be visible
  // the first image should not have animation

  useEffect(() => {
    if (!projectscontainerRef.current || !currentImgRef.current) return

    if (i === 0) {
      currentImgRef.current.style.bottom = '0%'
      return
    }

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: projectscontainerRef.current,
          start: (i / total) * 100 + '% 50%', // container, viewport
          end: (i / total) * 100 + '% top',
          toggleActions: 'play complete reverse none',
          scrub: true,
        },
      })
      .to(currentImgRef.current, {
        bottom: '0%',
        ease: 'power2.out',
      })
      .to('.macshadow', {
        backgroundColor: data.color,
        ease: 'power2.out',
        zIndex: 100,
      })

    return () => {
      tl.kill()
    }
  }, [i, total])

  return (
    <div
      key={data.title}
      ref={currentImgRef}
      className='absolute h-full w-full z-30 left-0 flex justify-center items-center bottom-[-100%] bg-black'
    >
      <Image
        alt={data.title}
        fill
        priority
        src={'/images/projects/' + data.image}
        className='relative w-full z-40 object-contain'
      ></Image>
    </div>
  )
}
