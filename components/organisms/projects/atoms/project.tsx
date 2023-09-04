interface ProjectProps {
  i: number
  projectsContainer: React.RefObject<HTMLDivElement>
  total: number
  title: string
  description: string
}

export const Project = ({
  i,
  projectsContainer,
  total,
  title,
  description,
}: ProjectProps) => {
  return (
    <div className='relative h-screen text-white flex flex-col justify-center align-middle'>
      <div className='w-[50vw] pl-[10vw] space-y-6 '>
        <h2 className='text-24 lg:text-44 font-sans'>{title}</h2>
        <p className='text-16 lg:text-20 leading-snug'>{description}</p>
      </div>
    </div>
  )
}
