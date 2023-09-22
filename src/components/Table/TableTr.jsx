import { Tr } from '@chakra-ui/react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const TableTr = ({ className, children, onClick, as, to }) => (
  <Tr as={as} to={to} onClick={onClick} className={classNames('hover:bg-gray-100 transition-colors duration-300', className)}>
    {children}
  </Tr>
)

TableTr.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

TableTr.defaultProps = {
  className: '',
  onClick: () => {},
}
