// src/app/page.tsx

import About from "./_components/About";
import Hero from "./_components/Hero";
import ProjectsSnip from "./_components/ProjectsSnip";
import Skills from "./_components/Skills";
import Testimonals from "./_components/Testimonals";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSnip />
      <Skills />
      <Testimonals />
    </>
  )
}
