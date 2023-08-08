import { MutableRefObject } from 'react'

interface TitleProps {
  headerRef: MutableRefObject<HTMLElement | null>
}

export const Title = ({ headerRef }: TitleProps) => {
  const text = "Hi, I'm Celeste Fernandez"

  return (
    <div className='overflow-hidden'>
      <h1 className='font-extrabold text-20 text-center lg:text-left lg:text-44 translate-y-[100px] clip'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-300  via-pink-500 to-purple-400 bg-animation '>
          {text}
        </span>
      </h1>
    </div>
  )
}
