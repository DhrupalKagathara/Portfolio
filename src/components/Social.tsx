// src/components/Social.tsx
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Social() {
  return (
    <div className="flex gap-4 mt-4">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub size={20} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={20} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={20} />
      </a>
    </div>
  )
}
