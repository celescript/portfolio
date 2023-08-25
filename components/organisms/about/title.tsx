import { gsap } from 'gsap'
import { MutableRefObject, useEffect, useRef } from 'react'

interface TitleProps {
  screenbigref: MutableRefObject<HTMLElement | null>
}

export const Title = ({ screenbigref }: TitleProps) => {
  const abouttitle = useRef<HTMLDivElement>(null)

  const text: string = 'AboutMe'

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: screenbigref.current,
        start: '70% 85%',
        end: 'bottom bottom',
      },
    })

    tl.to('.animated-letter', {
      y: 0,
      delay: 0,
      stagger: 0.05,
      duration: 0.2,
    })

    // const animletter = gsap.to('.animated-letter', {
    //     y: 0,
    //     stagger: 0.5,
    //     delay: 0.5,
    //     duration: .5,
    // })

    return () => {
      tl.reverse()
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={abouttitle}
      className='absolute bottom-[-14vw] -left-[3vw] w-[103vw] overflow-hidden'
    >
      <h3 className='text-black text-[24vw] text-center font-bold whitespace-nowrap overflow-hidden tracking-tighter'>
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className='animated-letter translate-y-[24vw] transition-[0.1s] ease-in-out inline-block'
          >
            {letter}
          </span>
        ))}
      </h3>
    </div>
  )
}
