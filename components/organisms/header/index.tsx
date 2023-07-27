'use client'
import { Title } from './title'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const headerEl = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to('.clip', {
      y: 0,
      duration: 1,
      ease: 'power2.out',
    })
      .to(
        '#subtitle',
        {
          duration: 0.8,
          opacity: 1,
          ease: 'power1.in',
        },
        '-=0.5'
      )
      .to(
        '.underlined',
        {
          duration: 0.8,
          width: '100%',
          ease: 'power1.in',
        },
        '-=0.5'
      )
  }, [])

  return (
    <header
      className='h-screen flex flex-col items-center justify-center'
      ref={headerEl}
    >
      <Title headerRef={headerEl} />

      <p
        className='text-20 mt-4 text-center max-w-[500px] text-white opacity-0'
        id='subtitle'
      >
        I’m a front end developer based in Argentina. I love experimenting with
        new technologies to create{' '}
        <span className=' relative inline-flex'>
          aweasome interfaces.{' '}
          <span className='h-[2px] -rotate-1 w-0 underlined bg-blue absolute -bottom-[2px]'></span>
        </span>
      </p>
    </header>
  )
}