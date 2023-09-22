import { Sparklines, SparklinesLine } from "react-sparklines"
import { BoxRoot } from "../../../components/BoxRoot"
import { Skeleton } from "../../../components/Skeleton"
import MoneyAsText from "../../../components/MoneyAsText"
import { PercentAsText } from "../../../components/PercentAsText"
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi"
import classNames from "classnames"
import { cardItemVariant } from "../../../animations"

export const CryptoCard = ({ loadingCoinRanking, coin }) => {
  return (
    <BoxRoot variants={cardItemVariant} className="flex items-center gap-2 p-3 h-[75px]">
      {loadingCoinRanking ? 
      (
        <>
          <Skeleton type='circle' size='10' />
          <div className="w-full flex flex-col gap-1">
            <Skeleton height='15px' width='100%' />              
            <Skeleton height='15px' width='100%' />
          </div>
        </>
      ) : (
        <>
          <img src={coin?.iconUrl} width={36} />
          <div>
            <p className="font-bold text-base whitespace-nowrap">{coin?.name}</p>  
            <p className="font-bold text-base -mt-[2px] text-gray-400">{coin?.symbol}</p>  
          </div>            
          <Sparklines data={coin?.sparkline}>
            <SparklinesLine color={coin?.change >= 0 ? 'green' : 'red'} />
          </Sparklines>
          <div>
            <MoneyAsText className='text-base font-bold whitespace-nowrap' prefix='U$ ' value={coin?.price} />
            <div className=" flex gap-1 items-center"> {coin?.change >= 0 ? <BiSolidUpArrow className="text-positive" /> : <BiSolidDownArrow className="text-negative" /> } 
              <PercentAsText  
                className={classNames('font-semibold', { 'text-positive': coin?.change >= 0, 'text-negative': coin?.change < 0 })}
                value={coin?.change}  
              />
            </div>
          </div>
        </>
      )}
    </BoxRoot>
  )
}