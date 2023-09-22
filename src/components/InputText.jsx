import React from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const InputText = ({ name, value, onChange, type, className, isDisabled, isInvalid, ...rest }) => {
  const inputClassName = twMerge(
    classNames(
      'w-full block bg-zinc-50 py-2 px-3 border rounded-lg outline-none transition ease-in-out duration-300 delay-100 focus:border-gray-300 placeholder:text-gray-200',
      className,
      {
        'text-gray-700 border-gray-200': !isInvalid,
        'text-negative border-negative': isInvalid,
        'opacity-40': isDisabled,
      }
    )
  )
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      className={classNames('h-[44px]', inputClassName)}
      {...rest}
    />
  )
}
