import { BiArrowFromLeft } from "react-icons/bi"
import { emergenceVariant } from "../../../animations"
import { BoxRoot } from "../../../components/BoxRoot"

export const CardBox = ({ onClick, icon, title }) => {
 const Icon = icon
 return (
  <BoxRoot variants={emergenceVariant} animate='visible' initial='hidden' onClick={onClick} className='flex items-center gap-2 py-4 px-3 hover:opacity-80 hover:bg-gray-100 cursor-pointer w-full'>
   <div className='p-2 bg-primary-light3/50 rounded-2 w-fit'>
     <Icon size={20} />
   </div>
   <div className='text-md flex items-center justify-between font-bold w-full'>
     <p>{title}</p>
       <BiArrowFromLeft size={25} className='text-orange-400' />
   </div>
 </BoxRoot>
 )
}