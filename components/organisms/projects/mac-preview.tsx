import Image from 'next/image'
import mac from '../../../public/images/mac.svg'

interface MacPreviewProps {
  projectsContainer: React.RefObject<HTMLDivElement>
}

export const MacPreview = ({ projectsContainer }: MacPreviewProps) => {
  return (
    <div className='relative overflow-hidden'>
      <div className='absolute overflow-hidden bg-pink-600/80 top-[2.6%] bottom-[11.5%] left-[13.7%] right-[13.7%] '>
        {
          // loop
          // 1 solo slide
          // ProjectPreview = ({
          //   i,
          //   projectscontainerRef,
          //   total,
          //   title,
          //   href
          // }) => {
          // }
        }
      </div>

      <Image alt='maaaac' src={mac} className='w-full aspect-[936/530]'></Image>
    </div>
  )
}
