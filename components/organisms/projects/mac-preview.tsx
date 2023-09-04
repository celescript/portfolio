import Image from 'next/image'
import mac from '../../../public/images/mac.svg'

interface MacPreviewProps {
  projectsContainer: React.RefObject<HTMLDivElement>
}

export const MacPreview = ({ projectsContainer }: MacPreviewProps) => {
  return (
    <div className='relative'>
      <div className='absolute overflow-hidden'></div>

      <Image alt='maaaac' src={mac} width={500} height={500}></Image>
    </div>
  )
}
