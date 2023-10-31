interface ProjectProps {
  i?: number
  projectsContainer?: React.RefObject<HTMLDivElement>
  total?: number
  title: string
  description: string
}

export const Project = ({ title, description }: ProjectProps) => {
  return (
    <div className='relative h-[100vh] text-white flex flex-col justify-start text-center md:text-left md:justify-center align-middle'>
      <div className='md:w-[50vw] md:pl-[10vw] px-4 space-y-6 '>
        <h2 className='text-3xl lg:text-6xl font-sans font-thin'>{title}</h2>
        <p className='text-sm lg:text-lg font-mono leading-snug max-w-lg'>
          {description}
        </p>
      </div>
    </div>
  )
}
