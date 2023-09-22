import { ModalBody as Body } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Loader } from '../Loader'

export const ModalBody = ({ children, className, loading }) => (
  <Body className={className}>
    {loading && (
      <div className='my-20'>
        <Loader />
      </div>
    )}
    {!loading && children}
  </Body>
)

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

ModalBody.defaultProps = {
  className: '',
}
