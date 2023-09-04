import Image from 'next/image'
import mac from '../../../public/images/mac.svg'

interface MacPreviewProps {
  projectsContainer: React.RefObject<HTMLDivElement>
}

export const MacPreview = ({ projectsContainer }: MacPreviewProps) => {
  return (
    <div className='relative'>
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
      <div className='absolute inset-20 bg-red-700 blur-[150px]' />
      <div className='absolute inset-24 bg-red-700 blur-[500px]' />

      <Image
        alt='maaaac'
        src={mac}
        className='relative w-full aspect-[936/530]'
      ></Image>
    </div>
  )
}
