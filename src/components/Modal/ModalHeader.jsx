import { ModalCloseButton, ModalHeader as Header } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const ModalHeader = ({ classNameHeader, text, closeButton }) => (
  <>
    <Header className={classNameHeader}>
      {text}
    </Header>
    {closeButton && <ModalCloseButton />}
  </>
)

ModalHeader.propTypes = {
  classNameHeader: PropTypes.string,
  closeButton: PropTypes.bool,
}

ModalHeader.defaultProps = {
  classNameHeader: '',
  closeButton: true,
}
