import Image from 'next/image'

interface ContactLinksProps {
  link: string
  key: number
  icon: string
  title: string
}

export const ContactLinks = ({ link, key, icon, title }: ContactLinksProps) => {
  return (
    <div
      key={key}
      className='flex flex-col-reverse justify-between items-center space-x-2 px-2 py-4 '
    >
      {/* TODO: ARREGLAR ESTO PARA Q TODO SEA UN LINK */}
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='text-gray-600 text-16 font-mono mt-2 '
      >
        {title}
      </a>
      <Image src={icon} alt={title} width={45} height={45} />
    </div>
  )
}
