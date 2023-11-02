import { gsap } from 'gsap'
import { MutableRefObject, useEffect, useRef } from 'react'

interface TitleProps {
  screenbigref: MutableRefObject<HTMLElement | null>
}

export const Title = ({ screenbigref }: TitleProps) => {
  const abouttitle = useRef<HTMLDivElement>(null)

  const text1: string = "Let's"
  const text2: string = 'talk!'

  useEffect(() => {
    if (!screenbigref.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: screenbigref.current,
        start: '20% 70%',
        end: '50% 60% ',
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
  }, [screenbigref])

  return (
    <div ref={abouttitle} className='overflow-hidden text-center'>
      <h3 className='text-white text-5xl md:text-8xl font-mono overflow-hidden whitespace-nowrap tracking-tighter'>
        {text1.split('').map((letter, index) => (
          <span
            key={index}
            className='animated-letter translate-y-[100%] transition-[0.1s] ease-in-out inline-block'
          >
            {letter}
          </span>
        ))}{' '}
        {text2.split('').map((letter, index) => (
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
