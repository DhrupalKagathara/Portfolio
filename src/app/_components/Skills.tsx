// src/app/_components/Skills.tsx
import React from 'react'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Tailwind CSS',
  'Node.js', 'Git', 'Testing/QA'
]

export default function Skills() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center shadow">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
