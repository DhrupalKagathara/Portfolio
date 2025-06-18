// src/components/Footer.tsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center text-sm p-6 border-t mt-12 text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Dhrupal Kagathra. All rights reserved.
    </footer>
  )
}
