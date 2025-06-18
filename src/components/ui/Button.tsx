// src/components/ui/Button.tsx
import React from 'react'
import { cn } from '../../utils/cn'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline'
}

export default function Button({ className, variant = 'default', ...props }: ButtonProps) {
  const baseStyles =
    'px-4 py-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100'
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  )
}
