import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
type ButtonProps = {
    size?:'sm' | 'default' | 'lg',
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({size ='default',children, ...props} :ButtonProps) {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        default: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }
const baseClasses = `relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90`
const classes = `${baseClasses} ${sizeClasses[size]}`;
  return (
    <button className= {classes} {...props}>
        <span className='relative flex items-center justify-center gap-2'>{children}</span>
    </button>
  )
}

export default Button