import { AiFillCreditCard } from "react-icons/ai"
import { BiLogoBitcoin } from "react-icons/bi"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { CardBox } from "./CardBox";

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
        <CardBox icon={AiFillCreditCard} onClick={handleOpenModalCard} title='Card Settings' />
        <CardBox icon={BiLogoBitcoin} onClick={handleOpenModalBalance} title='Update Balance' />
      </div>
    </div>
  )
}