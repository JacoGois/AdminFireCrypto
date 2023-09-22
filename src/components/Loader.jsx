import classNames from 'classnames'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Loader = ({ className }) => {
  return <AiOutlineLoading3Quarters className={classNames('animate-spin h-4 w-4', className)} />
}
