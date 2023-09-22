import PropTypes from 'prop-types'
import { Skeleton as Ske, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export const Skeleton = ({ type, ...rest }) => {
  switch (type) {
    case 'default':
      return <Ske {...rest} />
    case 'text':
      return <SkeletonText {...rest} />
    case 'circle':
      return <SkeletonCircle {...rest} />
  }
}

Skeleton.propTypes = {
  type: PropTypes.string,
}

Skeleton.defaultProps = {
  type: 'default',
}
