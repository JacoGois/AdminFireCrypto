import { NumericFormat } from 'react-number-format'
import { InputText } from './InputText'

export const InputNumber = ({ name, value, onChange, ...rest }) => {
  const { allowNegative = false, isDisabled = false, placeholder } = rest

  return (
    <NumericFormat
      placeholder={placeholder}
      allowNegative={allowNegative}
      decimalScale={0}
      onClick={e => e.target.select()}
      value={value}
      displayType='input'
      name={name}
      disabled={isDisabled}
      onValueChange={(values, sourceInfo) => {
        onChange({ ...sourceInfo.event, numberValue: values.floatValue })
      }}
      type='number'
      customInput={InputText}
      {...rest}
    />
  )
}
