export const Title = () => {
  const text = 'Celeste Fernandez'

  return (
    <div className='overflow-hidden'>
      <h1 className='font-medium font-mono text-white text-24 text-center lg:text-left lg:text-[3vw] translate-y-[100px] clip'>
        Hi, I{`'`}m{' '}
        <span className='bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-orange-300  via-pink-500 to-sky-400 bg-animation '>
          {text}
        </span>
      </h1>
    </div>
  )
}
