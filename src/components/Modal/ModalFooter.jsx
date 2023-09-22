import { ModalFooter as Footer } from '@chakra-ui/react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export const ModalFooter = ({
  children,
  buttonClose,
}) => (
  <Footer className={classNames('', { 'flex justify-center items-center gap-2': buttonClose })}>
    {children}
  </Footer>
)

ModalFooter.propTypes = {
  buttonClose: PropTypes.bool,
  isLoadingButton: PropTypes.bool,
  isDisabledButton: PropTypes.bool,
  onClose: PropTypes.func,
  buttonText: PropTypes.string,
  classNameButton: PropTypes.string,
  children: PropTypes.node,
  typeButton: PropTypes.string,
}

ModalFooter.defaultProps = {
  buttonClose: true,
  isLoadingButton: false,
  isDisabledButton: false,
  onClose: () => {},
  buttonText: 'Fechar',
  classNameButton: '',
  typeButton: 'button',
}
