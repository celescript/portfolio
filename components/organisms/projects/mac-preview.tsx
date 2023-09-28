import Image from 'next/image'
import mac from '@/public/images/mac.svg'
import { projectData } from '@/utils/project-data'
import ProjectPreview from './atoms/project-preview'

interface MacPreviewProps {
  projectsContainer: React.RefObject<HTMLDivElement>
  projectData: typeof projectData
}

export const MacPreview = ({
  projectsContainer,
  projectData,
}: MacPreviewProps) => {
  return (
    <div className='relative'>
      <div className='absolute overflow-hidden z-[450] bg-pink-600/80 top-[2.6%] bottom-[11.5%] left-[13.7%] right-[13.7%] '>
        {projectData.map((project, i) => {
          return (
            project.image && (
              <ProjectPreview
                i={i}
                key={i}
                projectscontainerRef={projectsContainer}
                total={projectData.length}
                data={project}
              />
            )
          )
        })}
      </div>
      <div className='absolute inset-x-28 inset-y-10 bg-[#DE5C89] blur-[90px] macshadow' />

      <Image
        alt='mac display image'
        src={mac}
        className='relative w-full aspect-[936/530] z-[400]'
        priority
      ></Image>
    </div>
  )
}
