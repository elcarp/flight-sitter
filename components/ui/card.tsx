import React from 'react'
import { cn } from '~lib/utils'

import { ReactNode } from 'react'

interface CardProps {
  className?: string
  children: ReactNode
}

export const Card = ({ className, children }: CardProps) => (
  <div className={cn('bg-white shadow-md rounded-xl p-4', className)}>
    {children}
  </div>
)

export const CardHeader = ({ className, children }: CardProps) => (
  <div className={cn('border-b pb-2 mb-2', className)}>{children}</div>
)

export const CardTitle = ({ className, children }: CardProps) => (
  <h3 className={cn('text-lg font-semibold', className)}>{children}</h3>
)

export const CardContent = ({ className, children }: CardProps) => (
  <div className={cn('text-gray-700', className)}>{children}</div>
)
