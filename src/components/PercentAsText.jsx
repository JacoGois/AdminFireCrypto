import React from 'react'
import { NumericFormat } from 'react-number-format'

export const PercentAsText = ({ value, precision = 2, ...rest }) => {
  const { className } = rest
  return (
    <NumericFormat
      thousandsGroupStyle='thousand'
      decimalScale={precision}
      fixedDecimalScale={true}
      value={value}
      displayType='text'
      decimalSeparator='.'
      thousandSeparator={false}
      prefix=''
      suffix='%'
      className={className}
    />
  )
}
