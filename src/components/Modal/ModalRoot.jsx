import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const ModalRoot = ({
  bgOverlay,
  backdropFilter,
  backdropBlur,
  isOpen,
  size,
  onClose,
  scrollBehavior,
  classNameOverlay,
  children,
  as,
  ...rest
}) => (
  <Modal isOpen={isOpen} size={size} scrollBehavior={scrollBehavior} onClose={onClose} isCentered>
    <ModalOverlay className={classNameOverlay} bg={bgOverlay} backdropFilter={backdropFilter} backdropBlur={backdropBlur} />
    <ModalContent as={as} {...rest}>
      {children}
    </ModalContent>
  </Modal>
)

ModalRoot.propTypes = {
  bgOverlay: PropTypes.string,
  backdropFilter: PropTypes.string,
  backdropBlur: PropTypes.string,
  scrollBehavior: PropTypes.string,
  size: PropTypes.string,
  classNameOverlay: PropTypes.string,
  children: PropTypes.node,
}

ModalRoot.defaultProps = {
  bgOverlay: 'none',
  backdropFilter: 'auto',
  backdropBlur: '10px',
  scrollBehavior: 'inside',
  size: 'lg',
  classNameOverlay: '',
}
