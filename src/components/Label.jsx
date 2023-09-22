import classNames from 'classnames'

export const Label = ({ text, className, children, htmlFor, isInvalid, ...rest }) => {
  return (
    <label
      className={classNames('mb-1 block text-sm font-semibold', className, { 'text-negative font-bold': isInvalid })}
      htmlFor={htmlFor}
      {...rest}
    >
      {children ?? text}
    </label>
  )
}
