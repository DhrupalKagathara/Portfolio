'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' }
]

export default function Header(): React.ReactElement {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center p-4 border-b sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur z-50">
      <Link href="/" className="text-xl font-bold">
        Dhrupal
      </Link>
      <nav className="flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:underline ${pathname === item.href ? 'font-semibold text-blue-600' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  )
}
