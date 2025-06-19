// src/components/ui/Label.tsx
import React, { LabelHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export default function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn('text-sm font-medium text-gray-700 dark:text-gray-300', className)}
      {...props}
    />
  )
}
