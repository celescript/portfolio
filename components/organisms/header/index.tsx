'use client'
import { Title } from './title'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const headerEl = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Header Animation Initialization
    const headerAnimTimeline = gsap.timeline()

    // Move the '.clip' element to its original position with a bounce-back effect
    headerAnimTimeline.to('.clip', {
      y: '0%',
      duration: 1,
      ease: 'power2.out',
    })

    // Fade in and move the '#subtitle' to its original position
    headerAnimTimeline.to(
      '#subtitle',
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power1.out',
      },
      '-=0.25'
    ) // Overlapping the animation slightly for a more dynamic effect

    // Expand the '.underlined' width to 100%
    headerAnimTimeline.to(
      '.underlined',
      {
        width: '100%',
        duration: 0.8,
        ease: 'power1.out',
      },
      '-=0.3'
    )
  }, [])

  return (
    <header
      className='h-screen flex flex-col items-center px-[8%] md:px-[20%] justify-center'
      ref={headerEl}
    >
      <Title headerRef={headerEl} />

      <p
        className='text-16 lg:text-20 mt-4 text-center max-w-[600px] text-white opacity-0 transform translate-y-8'
        id='subtitle'
      >
        I{`'`}m a <span className='text-pink-500'>front end developer</span>{' '}
        based in Argentina. I love experimenting with new technologies to create{' '}
        <span className=' relative inline-flex'>
          aweasome interfaces.{' '}
          <span className='h-[2px] -rotate-1 w-0 underlined bg-purple-400 absolute -bottom-[2px]'></span>
        </span>
      </p>
    </header>
  )
}
