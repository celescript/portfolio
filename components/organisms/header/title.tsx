import { MutableRefObject } from 'react'

interface TitleProps {
  headerRef: MutableRefObject<HTMLElement | null>
}

export const Title = ({ headerRef }: TitleProps) => {
  const text = "Hi, I'm Celeste Fernandez"

  return (
    <div className='overflow-hidden'>
      <h1 className='font-extrabold text-44 translate-y-[100px] clip'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange  via-pink to-blue bg-animation '>
          {text}
        </span>
      </h1>
    </div>
  )
}