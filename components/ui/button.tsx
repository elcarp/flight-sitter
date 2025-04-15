import React from 'react'
import { cn } from '~lib/utils' // Adjust path if needed

interface ButtonProps {
  className?: string;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
  [key: string]: unknown;
}

export const Button = ({
  className,
  variant = 'default',
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    default: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  }
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition cursor-pointer',
        variants[variant],
        className
      )}
      {...props}>
      {children}
    </button>
  )
}
