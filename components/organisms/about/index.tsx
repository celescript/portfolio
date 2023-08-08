'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

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

    tl.to('.background', {
      scale: 1,
      borderRadius: '0',
      duration: 1,
      ease: 'none',
    })

    return () => {
      tl.reverse()
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={screenbig}
      className='relative screen-big overflow-x-clip -mt-[20vh]  '
    >
      <div className='relative top-0 mx-auto h-screen w-full flex justify-center'>
        <div className='h-[100vh] w-full rounded-t-3xl overflow-hidden shadow-3xl shadow-pink-500/50 background scale-[0.25]'>
          {/* <Image src={colorMorph} alt='color morph' /> */}
          <div className=' bg-pink-600  bg-big absolute -inset-1 '></div>
          {/* TODO: absolute pq se agrande con el contenedor */}

          <div className='absolute bottom-[-12vw] -left-[3vw] w-[103vw] overflow-hidden'>
            <h3 className='text-black text-[24vw] text-center font-bold whitespace-nowrap tracking-tighter'>
              About me
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
