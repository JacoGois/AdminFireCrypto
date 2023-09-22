import { Thead, Tr } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const TableThead = ({ children, classNameThead, classNameTr }) => (
  <Thead className={classNameThead}>
    <Tr className={classNameTr}>{children}</Tr>
  </Thead>
)

TableThead.propTypes = {
  classNameThead: PropTypes.string,
  classNameTr: PropTypes.string,
  children: PropTypes.node,
}

TableThead.defaultProps = {
  classNameThead: '',
  classNameTr: '',
}
