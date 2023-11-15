'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/all'

export const About = () => {
  const containerAbout = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerAbout.current) return

    // Background Animation Initialization with Scroll Trigger
    const backgroundTimeline = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: containerAbout.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play pause resume reset',
      },
    })
    // .to('.background', {
    //   transform: 'scale(1)',
    //   '--glow-opacity': 0.0,
    //   duration: 1,
    //   willChange: 'transform, --glow-opacity',
    // })

    // Span Animation Initialization with Scroll Trigger
    const spanTimeline = gsap
      .timeline({
        paused: true,
        scrollTrigger: {
          trigger: '.span-text',
          start: 'top 50%',
          toggleClass: 'active',
          once: true,
        },
      })
      .to('.span-animation', {
        duration: 1,
        backgroundSize: '100% 100%',
        ease: CustomEase.create('custom', 'M0,0 C0.075,0.82 0.165,1 1,1'),
      })

    // Cleanup function to prevent memory leaks
    return () => {
      backgroundTimeline.kill()
      spanTimeline.kill()
    }
  }, [])

  return (
    <div className='relative overflow-x-clip h-[200vh]  '>
      <div
        ref={containerAbout}
        className='sticky top-0 mx-auto h-screen w-full flex p-[10%] justify-center items-center'
      >
        <div
          // style={{ '--glow-opacity': 0.4 } as any}
          className='h-[90vh] w-full flex justify-center background max-w-[90vw]  items-center overflow-hidden shadowabout'
        >
          <div className=' bg-pink-600  bg-big absolute -inset-1 mx-4 my-3 md:mx-28 md:my-10 '></div>

          <div className='text-center font-mono font-regular -mt-20 relative'>
            <p className='text-black font-mono max-w-[600px] text-left mt-5 mx-auto w-[90%] text-sm lg:text-lg font-normal leading-snug'>
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
        </div>
      </div>
    </div>
  )
}
