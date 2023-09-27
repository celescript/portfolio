export const Title = () => {
  const text = 'Celeste Fernandez'

  return (
    <div className='overflow-hidden'>
      <h1 className='font-medium font-mono leading-snug text-white text-28 text-center lg:text-[3vw] translate-y-[100px] clip'>
        Hi, I{`'`}m{' '}
        <span className='bg-clip-text inline-block font-extrabold text-transparent bg-gradient-to-r from-orange-300  via-pink-500 to-sky-400 bg-animation '>
          {text}
        </span>
      </h1>
    </div>
  )
}
