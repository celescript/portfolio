import { ContactLinks } from './contact-links'

export interface ContactLink {
  link: string
  index: number
  icon: string
  title: string
}

export const contactData: ContactLink[] = [
  {
    // github link
    link: 'https://github.com/celescript',
    index: 0,
    icon: '/images/contact/github.svg',
    title: '@celescript',
  },
  {
    // linkedin link
    link: 'https://www.linkedin.com/in/celescript/',
    index: 1,
    icon: '/images/contact/linkedin.svg',
    title: '/celescript',
  },
  {
    // download cv
    link: '/CelesteFernandezCV.pdf',
    index: 2,
    icon: '/images/contact/download.svg',
    title: ' CV',
  },
]

export const Contact = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center align-middle items-center '>
      <p className='font-mono text-24 md:text-44 text-white'>
        Let{"'"}s talk!{'\n '}
      </p>
      <div className='flex justify-between flex-wrap w-[90%] max-w-[400px]'>
        {contactData.map((contactLink) => (
          <ContactLinks
            key={contactLink.index}
            link={contactLink.link}
            icon={contactLink.icon}
            title={contactLink.title}
          />
        ))}
      </div>
    </div>
  )
}
