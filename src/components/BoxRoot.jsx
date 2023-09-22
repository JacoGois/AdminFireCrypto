import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export const BoxRoot = ({ children, className, ...rest }) => {

 return (
  <motion.div className={twMerge("bg-surface rounded-lg shadow-lg", className)} { ...rest }>
    { children }
  </motion.div>
 )
}