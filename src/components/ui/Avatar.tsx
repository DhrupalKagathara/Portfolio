// src/components/ui/Avatar.tsx
import React from 'react'
import Image from 'next/image'
import { cn } from '../../lib/utils'

type AvatarProps = {
  src: string
  alt?: string
  size?: number
  className?: string
}

export default function Avatar({ src, alt = 'Avatar', size = 48, className }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn('rounded-full object-cover', className)}
    />
  )
}
