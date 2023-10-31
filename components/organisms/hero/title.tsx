export const Title = () => {
  const text = 'Celeste Fernandez'

  return (
    <div className='overflow-hidden'>
      <h1 className='font-medium font-mono leading-snug text-white text-center text-2xl lg:text-7xl   '>
        <span className='clip translate-y-[150px] inline-block'>
          Hi, I{`'`}m{' '}
        </span>{' '}
        <br />
        <span className='bg-clip-text translate-y-[100px] font-sans inline-block font-bold text-transparent bg-gradient-to-r from-orange-300  via-pink-500 to-sky-400 bg-animation clip'>
          {text}
        </span>
      </h1>
    </div>
  )
}
