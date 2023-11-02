import Image from 'next/image'
import mac from '@/public/images/mac.svg'
import { clx } from '@/utils/clx'
import { ProjectConfig } from '@/utils/project-data'

interface ProjectProps {
  i?: number
  projectsContainer?: React.RefObject<HTMLDivElement>
  total?: number
  isMobile?: boolean
  projectData: ProjectConfig
}

export const Project = ({ projectData, isMobile }: ProjectProps) => {
  return (
    <div
      className={clx(
        'relative h-[100vh] text-white flex flex-col justify-start text-center md:text-left md:justify-center align-middle',
        isMobile && 'justify-evenly flex-col-reverse'
      )}
      style={{ '--background-mobile': projectData.color } as any}
    >
      {isMobile && projectData.image && (
        <div className='relative'>
          <div className='absolute overflow-hidden z-[450] bg-[var(--background-mobile)] top-[2.6%] bottom-[11.5%] left-[13.7%] right-[13.7%] '>
            <Image
              alt={projectData.title}
              fill
              priority
              src={'/images/projects/' + projectData.image}
              className='relative w-full h-[50vh] md:h-[70vh] object-cover'
            />
          </div>
          <div className='absolute inset-x-28 inset-y-10 bg-[var(--background-mobile)] blur-[90px] macshadow' />

          <Image
            alt='mac display image'
            src={mac}
            className='relative w-full aspect-[936/530] z-[400]'
          ></Image>
        </div>
      )}
      <div className='md:w-[50vw] md:pl-[10vw] px-4 space-y-6 '>
        <h2 className='text-3xl lg:text-6xl font-sans font-thin'>
          {projectData.title}
        </h2>
        <p className='text-sm lg:text-lg font-mono leading-snug max-w-lg'>
          {projectData.description}
        </p>
      </div>
    </div>
  )
}
