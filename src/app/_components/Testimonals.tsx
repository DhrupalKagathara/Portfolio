// src/app/_components/Testimonals.tsx
import React from 'react'

interface Testimonial {
  name: string
  feedback: string
  role?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Jane Doe',
    role: 'Frontend Mentor',
    feedback: 'Dhrupal has shown excellent skills in building responsive and user-friendly interfaces.'
  },
  {
    name: 'John Smith',
    role: 'QA Lead',
    feedback: 'Very attentive to detail. Dhrupal’s testing approach improved our bug detection rate significantly.'
  }
]

export default function Testimonals() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded shadow">
            <p className="italic mb-2">"{testimonial.feedback}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
