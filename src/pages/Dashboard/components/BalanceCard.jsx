import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import MoneyAsText from "../../../components/MoneyAsText"
import classNames from "classnames"
import { emergenceVariant } from "../../../animations"
import { BoxRoot } from "../../../components/BoxRoot"
import { useBalance } from "../../../contexts/BalanceContext"

export const BalanceCard = ({ loadingCoinRanking }) => {
  const { balance, cotation } = useBalance()
  return (
    <BoxRoot variants={emergenceVariant} initial='hidden' animate='visible' className="p-3 h-[360px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">My Portfolio</h4>
        <MdOutlineAccountBalanceWallet size={25} />
      </div>
      <hr />
      <div className="flex items-center justify-between text-lg font-semibold">
        <img src='https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg' width={25} />
        <div className="flex items-center gap-2">
          <p className="text-md">{(balance.btc / cotation.BTCUSD.cotation).toFixed(7)}</p>
          <span>•</span>
          <p className={classNames('gap-1 flex items-center',{ 'blur-md' : loadingCoinRanking })}>
            <MoneyAsText prefix="U$ " value={balance.btc} /> 
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between text-lg font-semibold">
        <img src='https://cdn.coinranking.com/rk4RKHOuW/eth.svg' width={25} />
        <div className="flex items-center gap-2">
          <p className="text-md">{(balance.eth / cotation.ETHUSD.cotation).toFixed(7)}</p>
          <span>•</span>
          <p className={classNames('gap-1 flex items-center',{ 'blur-md' : loadingCoinRanking })}>
            <MoneyAsText prefix="U$ " value={balance.eth} /> 
          </p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between text-lg font-semibold">
        <img src='https://cdn.coinranking.com/mgHqwlCLj/usdt.svg' width={25} />
        <div className="flex items-center gap-2">
          <p className="text-md">{balance.usdt}</p>
          <span>•</span>
          <p className={classNames('gap-1 flex items-center',{ 'blur-md' : loadingCoinRanking })}>
            <MoneyAsText prefix="U$ " value={balance.usdt} /> 
          </p>
        </div> 
      </div>
    </BoxRoot>
  )
}