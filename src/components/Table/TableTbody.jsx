import { Tbody } from '@chakra-ui/react'
import { BiErrorAlt } from 'react-icons/bi'
import PropTypes from 'prop-types'
import { Loader } from '../Loader'

export const TableTbody = ({ children, className, data, loading, colSpan, skeleton }) => (
  <Tbody className={className}>
    {loading && skeleton && (
      <tr>
        <td colSpan={colSpan} className='text-center h-full'>
          { skeleton }
        </td>
      </tr>
    )} 
    {loading && !skeleton &&  (
      <tr>
        <td colSpan={colSpan} className='text-center h-full py-5'>
          <Loader className='inline-block' />
        </td>
      </tr>
    )}
    {!loading && data && data.length === 0 && (
      <tr>
        <td colSpan={colSpan}>
          <div className='flex items-center justify-center gap-1 my-3'>
            <BiErrorAlt />
            <p>Nenhum registro encontrado.</p>
          </div>
        </td>
      </tr>
    )}
    {!loading && data && data.length !== 0 && children}
  </Tbody>
)

TableTbody.propTypes = {
  className: PropTypes.string,
  colSpan: PropTypes.string,
  filter: PropTypes.bool,
  loading: PropTypes.bool,
  data: PropTypes.array,
  children: PropTypes.node,
}

TableTbody.defaultProps = {
  className: '',
  colSpan: '',
  filter: true,
  loading: false,
  data: [],
}
