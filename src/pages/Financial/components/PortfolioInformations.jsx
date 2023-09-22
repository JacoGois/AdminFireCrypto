import { cardItemVariant, cardListVariant } from "../../../animations"
import { BoxRoot } from "../../../components/BoxRoot"
import MoneyAsText from "../../../components/MoneyAsText"
import { useBalance } from "../../../contexts/BalanceContext"
import { motion } from "framer-motion"

export const PortfolioInformations = () => {
 const { balance } = useBalance()
 return (
   <div className='w-full flex flex-col col-span-2 mt-3 lg:-mt-2'>
     <h4 className="text-lg font-semibold mb-3">My Portfolio</h4>
     <motion.div variants={cardListVariant} animate="visible" initial='hidden' className='w-full flex flex-col md:flex-row gap-3'>
       <BoxRoot variants={cardItemVariant} className='w-full px-3 py-2 font-bold flex md:flex-col lg:flex-row justify-between items-center'>
           <div className='flex gap-2 items-center font-bold md:flex-col lg:flex-row'>
             <img src='https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg' width={25} />
             <div className='flex flex-col gap-1 md:text-center lg:text-start'>
               <p>BTC</p>
               <span className='text-gray-400 text-xs'>Bitcoin</span>
             </div>
           </div>
           <p><MoneyAsText value={balance.btc} /></p>
       </BoxRoot>
       <BoxRoot variants={cardItemVariant} className='w-full px-3 py-2 font-bold md:flex-col lg:flex-row flex justify-between items-center'>
         <div className='flex gap-2 items-center font-bold md:flex-col lg:flex-row'>
           <img src='https://cdn.coinranking.com/rk4RKHOuW/eth.svg' width={25} />
           <div className='flex flex-col gap-1 md:text-center lg:text-start'>
             <p>ETH</p>
             <span className='text-gray-400 text-xs'>Ethereum</span>
           </div>
         </div>
         <p><MoneyAsText value={balance.eth} /></p>
       </BoxRoot>
       <BoxRoot variants={cardItemVariant} className='w-full px-3 py-2 font-bold md:flex-col lg:flex-row flex justify-between items-center'>
         <div className='flex gap-2 items-center font-bold md:flex-col lg:flex-row'>
           <img src='https://cdn.coinranking.com/mgHqwlCLj/usdt.svg' width={25} />
           <div className='flex flex-col gap-1 md:text-center lg:text-start'>
             <p>USDT</p>
             <span className='text-gray-400 text-xs'>USDT Tether</span>
           </div>
         </div>
         <p><MoneyAsText value={balance.usdt} /></p>
       </BoxRoot>
     </motion.div>
    </div>
 )
}