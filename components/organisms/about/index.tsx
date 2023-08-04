export const About = () => {
  return (
    <div className='h-[100vh] w-full rounded-t-full overflow-hidden absolute background'>
      <div className='bg-gradient-to-b from-orange-300 via-pink-600 to-purple-500 bg-big absolute blur-lg z-0 -inset-1 '></div>
      {/* TODO: absolute pq se agrande con el contenedor */}
      <div className='relative z-10 h-screen bg-transparent'>
        <p className='text-black text-44'>Hola</p>
      </div>
    </div>
  )
}
