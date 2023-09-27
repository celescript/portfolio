import Image from 'next/image'

interface ContactLinksProps {
  link: string
  key: number
  icon: string
  title: string
}

export const ContactLinks = ({ link, key, icon, title }: ContactLinksProps) => {
  return (
    <a
      key={key}
      href={link}
      target='_blank'
      rel='noreferrer'
      className='mt-14 flex-1'
    >
      <div className='flex flex-col justify-between items-center '>
        <Image
          src={icon}
          alt={title}
          width={45}
          height={45}
          className='max-w-[45px] max-h-[45px]
        '
        />
        <p className='text-gray-300 text-[0.8rem] md:text-16 font-mono mt-6'>
          {title}
        </p>
      </div>
    </a>
  )
}
