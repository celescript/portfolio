import { About } from '@/components/organisms/about'
import { Contact } from '@/components/organisms/contact'
import { Hero } from '@/components/organisms/hero'

import { Projects } from '@/components/organisms/projects'

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Projects />

      <Contact />
    </>
  )
}
