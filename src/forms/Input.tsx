import React from 'react'
import { ComponentPropsWithRef } from 'react'
import '../index.css'

interface InputProps extends ComponentPropsWithRef<'input'> {
  mode?: string
}

const Input = ({ mode, ...rest }: InputProps) => {
  let className = 'w-full rounded border border-solid  px-4 py-2 disabled:bg-slate-200 '
  switch (mode) {
    case 'danger':
      className += 'border-red-400 outline-0'
      break
    default:
      className += 'border-gray-400 outline-gray-500 outline-1'
      break
  }

  return <input {...rest} className={className} />
}

export default Input
