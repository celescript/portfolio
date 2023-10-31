export const Title = () => {
  const text = 'Celeste Fernandez'

  return (
    <div className='overflow-hidden'>
      <h1 className='font-medium font-mono leading-snug text-white text-center text-2xl md:text-7xl translate-y-[100px] clip'>
        Hi, I{`'`}m{' '}
        <span className='bg-clip-text font-sans inline-block font-bold text-transparent bg-gradient-to-r from-orange-300  via-pink-500 to-sky-400 bg-animation '>
          {text}
        </span>
      </h1>
    </div>
  )
}
