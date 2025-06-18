import Link from 'next/link'
import ProjectsSnip from '../_components/ProjectsSnip'
import type { Metadata } from 'next'
import { projects } from '../../lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Page(): React.ReactElement {
  return (
    <div className="py-20">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold pb-4">
          My Projects<span className="text-primary">.</span>
        </h1>
        <p className="text-xs">
          Explore my collection of projects
          <span className="text-primary">.</span>
        </p>
      </div>
      {projects.map((project) => (
        <div className='grid place-content-center '>

        <ProjectsSnip
          key={project.title}
          {...project}
          />
          </div>
      ))}
    </div>
  )
}
