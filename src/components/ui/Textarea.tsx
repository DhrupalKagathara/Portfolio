// src/components/ui/Textarea.tsx
import React from 'react'
import { cn } from '../../lib/utils'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white',
        className
      )}
      {...props}
    />
  )
}
