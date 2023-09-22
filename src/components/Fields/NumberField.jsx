import classNames from 'classnames'
import { Label } from '../Label'
import { NumberInput } from '@chakra-ui/react'
import { FieldMessage } from '../FieldMessage'

export const NumberField = ({ label, name, id, onChange, value, noMargins, isDisabled, errorMessage, className, ...rest }) => {
 const isInvalid = !!errorMessage 
 const labelClasses = isInvalid ? 'text-negative' : ''

  return (
    <div className={classNames({ 'mb-2': !noMargins }, className)}>
      <Label className={classNames(labelClasses)} text={label} htmlFor={id ?? name} isInvalid={isInvalid} />
      <NumberInput
        name={name}
        id={id ?? name}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {errorMessage && <FieldMessage message={errorMessage} />}
    </div>
  )
}
