import { About } from '@/components/organisms/about'
import { Header } from '@/components/organisms/header'

import { Projects } from '@/components/organisms/projects'

export default function Home() {
  return (
    <>
      <Header />
      {/* cambiar esto a hero */}

      <About />

      <Projects />
    </>
  )
}
