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
        <h2 className='text-24 lg:text-44  font-mono'>{title}</h2>
        <p className='text-16 lg:text-20 leading-snug'>{description}</p>
      </div>
    </div>
  )
}
