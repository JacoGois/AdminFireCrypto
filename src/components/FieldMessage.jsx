import React from 'react'
import classNames from 'classnames'
import { MdError } from 'react-icons/md'

export const FieldMessage = ({ message, icon = MdError, className }) => {
  const IconElement = icon
  return (
    message && (
      <div className={classNames('flex flex-row text-sm items-center gap-1 mt-1 text-red-500', className)}>
        <IconElement />
        {message}
      </div>
    )
  )
}
