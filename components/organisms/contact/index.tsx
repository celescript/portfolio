'use client'
import { useRef } from 'react'
import { ContactLinks } from './contact-links'
import { Title } from './title'

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
  const containerContact = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className='h-screen w-screen flex flex-col justify-center align-middle items-center '
      ref={containerContact}
    >
      <Title screenbigref={containerContact} />

      <div className='flex justify-between flex-wrap text-sm lg:text-lg w-[90%] max-w-xl'>
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
