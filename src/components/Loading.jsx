import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Loading = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <AiOutlineLoading3Quarters className='animate-spin h-5 w-5' />
    </div>
  )
}
