import { motion } from "framer-motion"
import { cardItemVariant, cardListVariant } from "../../../animations"
import { BoxRoot } from "../../../components/BoxRoot"

export const RecentBeneficiaries = () => {
 return (
  <div className='w-full flex flex-col col-span-2 mt-3 lg:-mt-2'>
    <h4 className="text-lg font-semibold mb-3">Recent Beneficiaries</h4>
    <motion.div variants={cardListVariant} animate="visible" initial='hidden' className='w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3'>
      {[{},{},{},{},{},{},{},{},{},{},{},{}].map(() => (
        <BoxRoot variants={cardItemVariant} className='font-bold text-center flex flex-col gap-2 items-center justify-center py-2'>
          <div className='w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://media.licdn.com/dms/image/C4D12AQH_iljjSlzpMw/article-cover_image-shrink_600_2000/0/1609243609412?e=2147483647&v=beta&t=uua56LS1jCIoTUONqsc8J579VYqq9z74NmTjxpliC_Y" alt="" />
          </div>
          <div>
            <p className='text-base'>Neymar</p>
            <p className='text-gray-400 font-normal'>Paris</p>
          </div>
        </BoxRoot>

      ))}
    </motion.div>
   </div>
 )
}