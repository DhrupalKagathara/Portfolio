// src/components/Logo.tsx
import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="text-xl font-bold tracking-tight">
      Dhrupal.dev
    </Link>
  )
}
