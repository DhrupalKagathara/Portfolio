'use client'

import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { Button } from '../components/ui/Button'
import { MenuIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/DropdownMenu'
import { ModeToggle } from './ModeToggle'

export default function Header(): React.ReactElement {
  return (
    <header className="flex justify-between items-center py-5 px-7 md:px-20 lg:px-32">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <ul className="md:flex gap-4 text-sm mr-5 hidden">
          <li className="hover:underline underline-offset-4 hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline underline-offset-4 hover:text-primary">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:underline underline-offset-4 hover:text-primary">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:underline underline-offset-4 hover:text-primary">
            <Link href="/about">About</Link>
          </li>
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden flex">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ml-[96px]">
            <Link href="/" passHref legacyBehavior>
              <DropdownMenuItem asChild>
                <a>Home</a>
              </DropdownMenuItem>
            </Link>
            <Link href="/skills" passHref legacyBehavior>
              <DropdownMenuItem asChild>
                <a>Skills</a>
              </DropdownMenuItem>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <DropdownMenuItem asChild>
                <a>Projects</a>
              </DropdownMenuItem>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <DropdownMenuItem asChild>
                <a>About</a>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>

        <ModeToggle />
      </div>
    </header>
  )
}
