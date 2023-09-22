import { Td } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const TableTd = ({ classNameTd, classNameText, text, onClick, textAlign, time, children }) => (
  <Td onClick={onClick} textAlign={textAlign === '' ? 'start' : textAlign} className={classNameTd}>
    <p className={classNameText}>{text === '' ? '-' : text}</p>
    {children}
  </Td>
)

TableTd.propTypes = {
  classNameTd: PropTypes.string,
  classNameText: PropTypes.string,
  textAlign: PropTypes.string,
  children: PropTypes.node,
}

TableTd.defaultProps = {
  classNameTd: '',
  classNameText: '',
  text: '',
  textAlign: '',
}
