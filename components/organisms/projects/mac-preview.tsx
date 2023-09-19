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
      <div className='absolute overflow-hidden bg-pink-600/80 top-[2.6%] bottom-[11.5%] left-[13.7%] right-[13.7%] '>
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
      <div className='absolute inset-20 bg-red-700 blur-[150px] macshadow' />
      <div className='absolute inset-24 bg-red-700 blur-[500px] macshadow' />

      <Image
        alt='maaaac'
        src={mac}
        className='relative w-full aspect-[936/530]'
        priority
      ></Image>
    </div>
  )
}
