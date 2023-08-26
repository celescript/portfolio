'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Title } from './title'
import { CustomEase } from 'gsap/all'

export const About = () => {
  const screenbig = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!screenbig.current) return

    // Background Animation Initialization
    const bgAnimTimeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: screenbig.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play pause resume reset',
      },
    })

    // Span Animation Initialization
    const spanAnimTimeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: '.span-text',
        start: 'top 70%',
        toggleClass: 'active',
        once: true,
      },
    })

    // Background Animation
    bgAnimTimeline.to('.background', {
      scale: 1,
      '--glow-opacity': 0.0,
      borderRadius: '0',
      duration: 1,
    })

    // Span Animation
    spanAnimTimeline.to('.span-animation', {
      duration: 1,
      backgroundSize: '100% 100%',
      ease: CustomEase.create('custom', 'M0,0 C0.075,0.82 0.165,1 1,1'),
    })

    // Cleanup function
    return () => {
      bgAnimTimeline.kill()
      spanAnimTimeline.kill()
    }
  }, [])

  return (
    <div ref={screenbig} className='relative screen-big overflow-x-clip '>
      <div className='relative top-0 mx-auto h-screen w-full flex justify-center items-center'>
        <div
          style={{ '--glow-opacity': 0.4 } as any}
          className='h-[100vh] w-full rounded-t-[100px] md:rounded-t-[300px] flex justify-center items-center overflow-hidden shadowabout background scale-[0.55] origin-[50%_10%]'
        >
          <div className=' bg-pink-600  bg-big absolute -inset-1 '></div>

          <div className='max-w-[600px] text-center -mt-20 mx-4 relative'>
            <p className='text-black text-16 lg:text-20 font-semibold leading-snug'>
              I{`'`}m a 23 year old Frontend Developer, started learning to code
              in 2021 and I{`'`}ve been doing it ever since. I love coding, and
              I{`'`}m always looking for new challenges. My tech stack includes{' '}
              <span className='span-animation rounded-lg px-1'>
                <span className='span-text overflow-hidden text-pink-500'>
                  {' '}
                  React, Next, TypeScript, Tailwind, and GSAP.
                </span>
              </span>{' '}
              I{`'`}m always looking to learn new things and improve my skills.
            </p>
          </div>

          <Title screenbigref={screenbig} />
        </div>
      </div>
    </div>
  )
}
