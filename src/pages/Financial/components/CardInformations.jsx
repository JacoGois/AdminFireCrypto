import { AiFillCreditCard } from "react-icons/ai"
import { emergenceVariant } from "../../../animations"
import { BiArrowFromLeft, BiLogoBitcoin } from "react-icons/bi"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { BoxRoot } from "../../../components/BoxRoot";

export const CardInformations = ({ values, handleOpenModalCard, handleOpenModalBalance }) => {
 return (
  <div className='xl:col-span-2 flex flex-col lg:flex-row lg:gap-4 xl:gap-6 w-full items-center'>
    <div className='md:w-fit w-full h-fit'>
      <Cards
        cvc={values.cvc}
        expiry={values.expiry}
        name={values.name}
        number={values.number}
        />
    </div>
    <div className='flex flex-col gap-3 md:mt-3 lg:mt-2 mt-5 w-full'>
      <BoxRoot variants={emergenceVariant} animate='visible' initial='hidden' onClick={handleOpenModalCard} className='flex items-center gap-2 py-4 px-3 hover:opacity-80 hover:bg-gray-100 cursor-pointer w-full'>
        <div className='p-2 bg-primary-light3/50 rounded-2 w-fit'>
          <AiFillCreditCard size={20} />
        </div>
        <div className='text-md flex items-center justify-between font-bold w-full'>
          <p>Card Settings</p>
          <BiArrowFromLeft size={25} className='text-orange-400' />
        </div>
      </BoxRoot>
      <BoxRoot variants={emergenceVariant} animate='visible' initial='hidden' onClick={handleOpenModalBalance} className='flex items-center gap-2 py-4 px-3 hover:opacity-80 hover:bg-gray-100 cursor-pointer w-full'>
        <div className='p-2 bg-primary-light3/50 rounded-2 w-fit'>
          <BiLogoBitcoin size={20} />
        </div>
        <div className='text-md flex items-center justify-between font-bold w-full'>
          <p>Update Balance</p>
          <BiArrowFromLeft size={25} className='text-orange-400' />
        </div>
      </BoxRoot>
    </div>
  </div>
 )
}