import React from 'react'
import { NumericFormat } from 'react-number-format'
import classNames from 'classnames'

const MoneyAsText = ({ value, prefix = 'U$ ', precision = 2, ...rest }) => {
  const { className = 'whitespace-nowrap', suffix = '', positive } = rest
  let decimalSeparator = ','
  let thousandSeparator = '.'

  if (prefix.includes('U$')) {
    decimalSeparator = '.'
    thousandSeparator = ','
  }

  return (
    <NumericFormat
      decimalScale={precision}
      fixedDecimalScale={true}
      value={value}
      displayType='text'
      decimalSeparator={decimalSeparator}
      thousandSeparator={thousandSeparator}
      prefix={prefix}
      suffix={suffix}
      className={classNames(className, { 'text-negative': value < 0, 'text-positive': positive && value > 0 })}
    />
  )
}

export default MoneyAsText
