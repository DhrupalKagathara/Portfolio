// src/app/_components/ProjectsSnip.tsx
import React from 'react'

interface Project {
  title: string
  description: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'Spotify Clone',
    description: 'A music streaming clone built with React and Tailwind CSS.',
    link: '#'
  },
  {
    title: 'Laptop Shopping Website',
    description: 'An e-commerce frontend built using React and Redux Toolkit.',
    link: '#'
  },
  {
    title: 'Weather Forecast App',
    description: 'Weather data with live API using OpenWeatherMap.',
    link: '#'
  }
]

export default function ProjectsSnip() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            {project.link && (
              <a href={project.link} className="text-blue-600 underline text-sm">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
