import React from 'react'
import classNames from 'classnames'
import { Label } from '../Label'
import { FieldMessage } from '../FieldMessage'
import { InputMoney } from '../InputMoney'

export const MoneyField = ({ name, onChange, noMargins, label, value, isDisabled, errorMessage, ...rest }) => {
  const { className, id } = rest
  const isInvalid = !!errorMessage
  const labelClasses = isInvalid ? 'text-negative' : ''

  return (
    <div className={classNames({ 'mb-2': !noMargins }, className)}>
      <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isInvalid={isInvalid} />
      <InputMoney
        isInvalid={isInvalid}
        onChange={onChange}
        value={value}
        name={name}
        disabled={isDisabled}
        {...rest}
      />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}

