import React from 'react'
import { twMerge } from 'tailwind-merge'
import classNames from 'classnames'
import { Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'
export const Button = ({
  text,
  type,
  className,
  isDisabled,
  isLoading,
  children,
  onClick,
  iconLeft,
  iconRight,
  ...rest
}) => {
 
  const classes = classNames('py-[11px] px-5 bg-primary text-white rounded-lg', {
    'transition ease-in-out duration-300 delay-50 hover:opacity-80': !isDisabled,
    'opacity-40 cursor-not-allowed': isDisabled,
    'flex gap-2 items-center min-w-min': isLoading,
    'flex justify-center items-center gap-2': iconLeft || iconRight,
  })

  const buttonClasses = twMerge(classes, className)

  return (
    <motion.button 
      whileTap={{ scale: 0.9 }}
      type={type} 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={isDisabled} 
      {...rest}
    >
      {!isLoading && iconLeft}
      {isLoading && <Spinner />}
      {!isLoading && text !== '' ? text : children}
      {!isLoading && iconRight}
    </motion.button>
  )
}
