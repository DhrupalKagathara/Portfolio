'use client'

import { Button } from "../../components/ui/Button"
import { Eye, Github } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ProjectProps {
  title: string
  alt: string
  image: string
  description?: string
  liveurl?: string
  livecode?: string
}

export default function Project({
  title,
  alt,
  image,
  description,
  liveurl,
  livecode,
}: ProjectProps) {
  return (
    <div className="relative border bg-background dark:bg-secondary max-w-fit rounded-md grid place-content-center">
      <div className="p-1">
        <img
          className="w-full max-w-[340px] md:max-w-[300px] h-full rounded-md aspect-video"
          src={image}
          alt={alt}
        />
      </div>

      <div className="absolute bottom-[84px] left-3 grid gap-2">
        <span className="text-xs dark:bg-secondary bg-background p-2 px-3 rounded">
          {alt}
        </span>
      </div>

      <div className="flex items-center justify-between px-4 py-4 mt-[5px]">
        <h1 className="text-sm">{title}</h1>

        <Button size="sm" variant="secondary" asChild>
          <Link
            href={livecode ?? "/"}
            className="flex items-center gap-1 justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            code <Github className="h-4 w-4" />
          </Link>
        </Button>

        <Button size="sm" asChild>
          <Link
            href={liveurl ?? "/"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 justify-center"
          >
            live <Eye className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
