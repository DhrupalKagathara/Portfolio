'use client'

import React from "react"
import ChromaGrid, { ChromaItem } from "../../components/ui/ChromaGrid"

interface ProjectProps {
  title: string
  alt: string
  image: string
  description?: string
  liveurl?: string
  livecode?: string
}

interface ProjectsSnipProps {
  projects: ProjectProps[]
}

export default function ProjectsSnip({ projects = [] }: ProjectsSnipProps) {
  console.log("ProjectsSnip projects:", projects);

  if (!projects || !Array.isArray(projects)) {
    return <p className="text-center text-gray-400">⚠️ No projects found.</p>;
  }

  const items: (ChromaItem & { livecode?: string; liveurl?: string })[] =
    projects.map((p) => ({
      image: p.image,
      title: p.title,
      subtitle: p.description ?? p.alt,
      url: p.livecode,
      livecode: p.livecode,
      liveurl: p.liveurl,
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
    }));

  return <ChromaGrid items={items} className="min-h-[260px]" />;
}
