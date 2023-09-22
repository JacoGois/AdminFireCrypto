import { AiOutlineArrowUp } from "react-icons/ai"
import { emergenceVariant } from "../../../animations"
import { BoxRoot } from "../../../components/BoxRoot"
import { mock } from "../hooks/mock"
import MoneyAsText from "../../../components/MoneyAsText"
import classNames from "classnames"

export const LastTransactions = () => {
 return (
  <BoxRoot variants={emergenceVariant} animate='visible' initial='hidden' className='h-fit p-3'>
    <h4 className="text-lg font-semibold mb-4">Latest Card Transactions</h4>

    <div className='flex flex-col gap-2'>
      {mock.map(item => (
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            {item.value >= 0 ? (
              <div className='relative sm:bg-positive/40 h-10 w-10 rounded-full min-w-max'>
                <div className='bg-positive/60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center h-5 rounded-full w-5'>
                  <AiOutlineArrowUp className='rotate-45 text-white' size={20} />
                </div>
              </div>
            ) :
            (
            <div className='relative sm:bg-negative/40 h-10 w-10 rounded-full min-w-max'>
              <div className='bg-negative/60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center h-5 rounded-full w-5'>
                <AiOutlineArrowUp className='-rotate-[135deg] text-white' size={20} />
              </div>
            </div>
            )
          }
            <p className='flex flex-col'>
              <span className='font-semibold text-base'>{item.label}</span>
              <span className='font-semibold text-gray-400 '>{item.date}</span>
            </p>
          </div>
          <p className='text-base'><MoneyAsText className={classNames('whitespace-nowrap font-bold', item.value > 0 && 'text-positive')} value={item.value} /></p>
        </div>
      ))}
    </div>
  </BoxRoot>
 )
}