import { PatternFormat } from 'react-number-format'
import { InputText } from './InputText'

export const InputFormat = ({ name, value, format, mask = '_', isDisabled, onChange, ...rest }) => {
  return (
    <PatternFormat
      customInput={InputText}
      name={name}
      format={format}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      mask={mask}
      {...rest}
    />
  )
}
