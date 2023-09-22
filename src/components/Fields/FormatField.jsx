import classNames from 'classnames'
import { InputFormat } from '../InputFormat'
import { FieldMessage } from '../FieldMessage'
import { Label } from '../Label'

export const FormatField = ({ format, mask, label, name, id, onChange, value, noMargins, isDisabled, errorMessage, className, ...rest }) => {
 const isInvalid = !!errorMessage 
 const labelClasses = isInvalid ? 'text-negative' : ''

  return (
    <div className={classNames({ 'mb-2': !noMargins }, className)}>
      <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isInvalid={isInvalid} />
      <InputFormat
        name={name}
        id={id ?? name}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        onChange={onChange}
        value={value}
        format={format}
        mask={mask}
        {...rest}
      />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}
