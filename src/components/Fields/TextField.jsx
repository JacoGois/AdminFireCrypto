import React from 'react'
import classNames from 'classnames'
import { FieldMessage } from '../FieldMessage'
import { InputText } from '../InputText'
import { Label } from '../Label'

export const TextField = ({ name, onChange, noMargins, label, value, className, id, isDisabled, errorMessage, ...rest }) => {
  const isInvalid = !!errorMessage
  const labelClasses = isInvalid ? 'text-negative' : ''

  return (
    <div className={classNames({ 'mb-2': !noMargins }, className)}>
      <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isInvalid={isInvalid} />
      <InputText
        type='text'
        onChange={onChange}
        value={value}
        id={id ?? name}
        name={name}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        {...rest}
      />
      {isInvalid && <FieldMessage message={errorMessage} />}
    </div>
  )
}