'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Title } from './title'

export const About = () => {
  const screenbig = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!screenbig.current) return
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: screenbig.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play pause resume reset',
      },
    })

    const spananim = gsap.to('.span-animation', {
      scrollTrigger: {
        trigger: '.span-animation',
        start: 'top 70%',
      },
      color: '#ec4899',
      duration: 0.3,
      backgroundSize: '100% 100%',
      ease: 'slow.in',
    })

    tl.to('.background', {
      scale: 1,
      '--glow-opacity': 0.0,
      borderRadius: '0',
      duration: 1,
      ease: 'out',
    })

    return () => {
      tl.reverse()
      tl.kill()
      spananim.kill()
    }
  }, [])

  return (
    <div ref={screenbig} className='relative screen-big overflow-x-clip  '>
      <div className='relative top-0 mx-auto h-screen w-full flex justify-center items-center'>
        <div
          style={{ '--glow-opacity': 0.4 } as any}
          className='h-[100vh] w-full rounded-t-[200px] md:rounded-t-[300px] flex justify-center items-center overflow-hidden shadowabout background scale-[0.55] origin-[50%_10%]'
        >
          {/* <Image src={colorMorph} alt='color morph' /> */}
          <div className=' bg-pink-600  bg-big absolute -inset-1 '></div>

          <div className='max-w-[600px] text-center -mt-20 mx-4 relative'>
            <p className='text-black text-20 font-semibold leading-snug'>
              I{`'`}m a 23 year old Frontend Developer, started learning to code
              in 2021 and I{`'`}ve been doing it ever since. I love coding, and
              I{`'`}m always looking for new challenges.{' '}
              <span className='span-animation'>
                My tech stack includes React, Next, TypeScript, Tailwind, and
                GSAP.{' '}
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
