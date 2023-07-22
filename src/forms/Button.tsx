import React from 'react'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} className='mb-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-slate-300'>
      {children}
    </button>
  )
}
