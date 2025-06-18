// src/components/ui/Card.tsx
import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type CardProps = {
    children: ReactNode
    className?: string
}

export function CardHeader({ children, className }: CardProps) {
    return <div className={cn('mb-4 font-semibold text-lg', className)}>{children}</div>
}

export function CardBody({ children, className }: CardProps) {
    return <div className={cn('text-sm', className)}>{children}</div>
}

export function CardFooter({ children, className }: CardProps) {
    return <div className={cn('mt-4', className)}>{children}</div>
}
