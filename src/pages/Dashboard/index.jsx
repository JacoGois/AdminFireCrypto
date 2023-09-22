import { useEffect, useState } from "react"
import { useFetchCoinRanking } from "./hooks/useFetchCoinRanking"
import { useFetchNotice } from "./hooks/useFetchNotice"
import { BalanceCard, CryptoCard, NewsCard, TableDashboard } from "./components"
import { motion } from 'framer-motion'
import { cardListVariant } from "../../animations"
import { Chart } from "./components/Chart"
import { useCandlesChart } from "./hooks/useCandlesChart"

export const Dashboard = () => {
  const [topCoins, setTopCoins] = useState([])
  const [cachedData, setCachedData] = useState({
    coinRanking: [],
    notice: []
  })
  const { dataCoinRanking, loadingCoinRanking, makeRequestCoinRanking } = useFetchCoinRanking()
  const { dataNotice, loadingNotice, makeRequestNotice } = useFetchNotice()
  const { consumeCandleChartWebSocket, dataChart } = useCandlesChart()

  useEffect(() => {
    const webSocket = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
    webSocket.onopen = () => {
      webSocket.send(JSON.stringify({ event: 'subscribe', channel: 'candles', key: 'trade:1D:tBTCUSD' }))
      webSocket.onmessage = msg => {
        const message = JSON.parse(msg.data)
        consumeCandleChartWebSocket(message)
      }
    }
    
    const cachedValue = localStorage.getItem('cachedData')
    if (cachedValue) {
      const { data, expiration } = JSON.parse(cachedValue)
      if (Date.now() < expiration) {
        setCachedData(data)
      } else {
        localStorage.removeItem('cachedData')
        makeRequestNotice()
        makeRequestCoinRanking()
      }
      return
    }
    
    makeRequestCoinRanking()   
    makeRequestNotice() 
    return () => webSocket.close()
  },[])
  
  useEffect(() => {
    if (dataCoinRanking.length !== 0 && dataNotice.length !== 0 && JSON.stringify({  coinRanking: dataCoinRanking, notice: dataNotice }) !== JSON.stringify(cachedData)) {
      setCachedData({
        coinRanking: dataCoinRanking, 
        notice: dataNotice 
      })
    }
  }, [dataNotice, dataCoinRanking])

  useEffect(() => {
    if (cachedData.length !== 0 && dataNotice.length !== 0 && dataCoinRanking.length !== 0) {
      const expiration = Date.now() + 10 * 60 * 1000
      localStorage.setItem('cachedData', JSON.stringify({ 
          data: {
          coinRanking: dataCoinRanking,
          notice: dataNotice
        }, 
        expiration 
      }))
    }
    setTopCoins(cachedData.coinRanking.slice(0 , 3))
  }, [cachedData])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
      <motion.div variants={cardListVariant} animate='visible' initial='hidden' className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
        <CryptoCard coin={topCoins[0]} loadingCoinRanking={loadingCoinRanking} />
        <CryptoCard coin={topCoins[1]} loadingCoinRanking={loadingCoinRanking} />
        <CryptoCard coin={topCoins[2]} loadingCoinRanking={loadingCoinRanking} />
      </motion.div>
      <Chart dataChart={dataChart} />
      <BalanceCard loadingCoinRanking={loadingCoinRanking} />
      <TableDashboard dataCoinRanking={cachedData.coinRanking} loadingCoinRanking={loadingCoinRanking} />
      <NewsCard dataNotice={cachedData.notice} loadingNotice={loadingNotice} />
    </div>
  )
}