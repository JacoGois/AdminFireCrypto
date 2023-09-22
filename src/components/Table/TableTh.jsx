import { Th } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

export const TableTh = ({ text, classNameTh, classNameText, textAlign, expansiveTh }) => (
  <Th textAlign={textAlign === '' ? 'start' : textAlign} className={twMerge(classNameTh, expansiveTh && 'w-full')}>
    <p className={classNameText}>{text}</p>
  </Th>
)

TableTh.propTypes = {
  classNameTh: PropTypes.string,
  classNameText: PropTypes.string,
  text: PropTypes.string,
  textAlign: PropTypes.string,
  expansiveTh: PropTypes.bool,
}

TableTh.defaultProps = {
  classNameTh: 'w-10',
  expansiveTh: false,
  classNameText: '',
  text: '',
  textAlign: '',
}
