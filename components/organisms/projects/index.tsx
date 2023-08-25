'use client'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export const Projects = () => {
  const projectscontainer = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   if (!projectscontainer.current) return

  //   const scroll = gsap.to(projectscontainer.current, {
  //     trigger: '.gallery',
  //     start: 'top -20vh',
  //     end: 'bottom bottom',
  //     pin: '.right',
  //   })

  //   const tl = gsap.timeline()

  //   tl.to('.colors', {
  //     y: 0,
  //     duration: 1,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.title',
  //       start: 'top 80%',
  //       end: 'bottom 50%',
  //       scrub: true,
  //       toggleActions: 'play pause resume reset',
  //     },
  //   })

  //   return () => {
  //     scroll.reverse()
  //     tl.reverse()
  //   }
  // }, [])

  return (
    <div className='relative flex bg-black gallery' ref={projectscontainer}>
      <div className='w-[50vw] left'>
        <div className='w-[80%] m-auto'>
          {/* details 1 */}
          <div className='h-screen w-full flex flex-col align-middle justify-center bg-transparent'>
            <h3 className='title'>Hola</h3>
            <p>ajndkandkladn</p>
          </div>
          {/* details 2 */}
          <div className='h-screen w-full flex-col  flex align-middle justify-center bg-transparent'>
            <h3 className='title'>Chau</h3>
            <p>gfdgdgdfgdfgdf</p>
          </div>
        </div>
      </div>

      <div className='w-[50vw] right bg-black h-screen flex flex-col justify-center'>
        <div className='w-[40vw] h-[40vh] relative rounded-2xl overflow-hidden shadow mx-auto'>
          <div className='bg-red-500 w-full absolute h-full colors'> </div>
          <div className='bg-yellow-500 w-full absolute colors h-full'> </div>
          <div className='bg-blue-500 w-full absolute colors h-full'> </div>
        </div>
      </div>
    </div>
  )
}
