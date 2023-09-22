import { Table } from '@chakra-ui/react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { emergenceVariant } from '../../animations'

export const TableRoot = ({ children, className, scrollbar, text, classNameDiv }) => {

  return (
    <motion.div
      variants={emergenceVariant}
      initial='hidden'
      animate='visible'
      className={classNames('overflow-x-scroll shadow-xl rounded-xl w-full bg-surface', classNameDiv, {
        'no-scrollbar': !scrollbar,
      })}
    >
      { text }
      <Table className={classNames('bg-surface whitespace-nowrap w-full', className)}>
        {children}
      </Table>
    </motion.div>
  )
}

TableRoot.propTypes = {
  className: PropTypes.string,
  scrollbar: PropTypes.bool,
  children: PropTypes.node,
}

TableRoot.defaultProps = {
  className: '',
  classNameDiv: '',
  scrollbar: false,
}
