import React from 'react'
import { NumericFormat } from 'react-number-format'
import classNames from 'classnames'
import { InputText } from './InputText'

export const InputMoney = ({ name, value, onChange, precision = 2, currencyCode = 'USD', ...rest }) => {
  const { className, suffix = '', allowNegative = false, isDisabled = false, placeholder = '', isInvalid = false } = rest

  let prefix = 'R$ '
  let decimalSeparator = ','
  let thousandSeparator = '.'

  if (['USD', 'EUR'].includes(currencyCode)) {
    decimalSeparator = '.'
    thousandSeparator = ','
  }

  if (currencyCode === 'USD') prefix = 'U$ '
  if (currencyCode === 'EUR') prefix = '€ '

  return (
    <NumericFormat
      allowNegative={allowNegative}
      thousandsGroupStyle='thousand'
      decimalScale={precision}
      fixedDecimalScale={true}
      value={value}
      placeholder={placeholder}
      displayType='input'
      name={name}
      disabled={isDisabled}
      onValueChange={({ floatValue }, sourceInfo) => {
        onChange({ ...sourceInfo.event, numberValue: floatValue })
      }}
      customInput={InputText}
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      prefix={prefix}
      isInvalid={isInvalid}
      suffix={suffix}
      className={classNames(className, { 'text-negative': value < 0, 'text-negative border border-negative': isInvalid })}
    />
  )
}
