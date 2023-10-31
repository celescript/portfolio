import { gsap } from 'gsap'
import { MutableRefObject, useEffect, useRef } from 'react'

interface TitleProps {
  screenbigref: MutableRefObject<HTMLElement | null>
}

export const Title = ({ screenbigref }: TitleProps) => {
  const abouttitle = useRef<HTMLDivElement>(null)

  const textAbout: string = 'About'
  const textMe: string = 'Me'

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: screenbigref.current,
        start: '30% 70%',
        end: '50% 50% ',
        scrub: true,
      },
    })

    tl.to('.animated-letter', {
      y: 0,
      stagger: 0.05,
      duration: 0.2,
    })

    return () => {
      tl.reverse()
      tl.kill()
    }
  }, [])

  return (
    <div ref={abouttitle} className='overflow-hidden text-center'>
      <h3 className='text-black text-5xl md:text-8xl   overflow-hidden whitespace-nowrap tracking-tighter'>
        {textAbout.split('').map((letter, index) => (
          <span
            key={index}
            className='animated-letter translate-y-[100%] transition-[0.1s] ease-in-out inline-block'
          >
            {letter}
          </span>
        ))}{' '}
        {textMe.split('').map((letter, index) => (
          <span
            key={index}
            className='animated-letter translate-y-[100%] transition-[0.1s] ease-in-out inline-block'
          >
            {letter}
          </span>
        ))}
      </h3>
    </div>
  )
}
