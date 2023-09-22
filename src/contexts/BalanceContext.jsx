import React, { createContext, useState, useEffect, useContext } from 'react'
import { useCotation } from '../hooks'

const BalanceContext = createContext({
  balance: {
    btc: 0,
    eth: 0,
    usdt: 0
  },
  cotation: {USDBRL: {}, ETHUSD: {}, BTCUSD: {}},
  loadingCotation: false,
  clearBalance: () => {},
  updateBalance: () => {},
})

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState({
    btc: 0,
    eth: 0,
    usdt: 0
  })

  const [cotation, setCotation] = useState({
    USDBRL: {},
    ETHUSD: {}, 
    BTCUSD: {}
  })
  const { dataCotation,loadingCotation, makeRequestCotation } = useCotation()

  useEffect(() => {
    makeRequestCotation()
    const balanceLocalStorage = window.localStorage.getItem('balanceCrypto')
    if (balanceLocalStorage) return setBalance(JSON.parse(balanceLocalStorage))
    window.localStorage.setItem('balanceCrypto', JSON.stringify(balance))
  }, [])

  useEffect(() => {
    if(!dataCotation) return 
    setCotation({
      USDBRL: {
        cotation: Number(dataCotation?.USDBRL?.bid)
      },
      ETHUSD: {
        cotation: Number(dataCotation?.ETHUSD?.bid)
      }, 
      BTCUSD: {
        cotation: Number(dataCotation?.BTCUSD?.bid)
      }
    })
  },[dataCotation])

  const clearBalance = () => setBalance(0)
  const updateBalance = value => {
    setBalance(value)
    window.localStorage.setItem('balanceCrypto', JSON.stringify(value))
  }

  return (
    <BalanceContext.Provider
      value={{
        balance,
        loadingCotation,
        cotation,
        updateBalance,
        clearBalance,
      }}
    >
      {children}
    </BalanceContext.Provider>
  )
}

export const useBalance = () => {
  return { ...useContext(BalanceContext) }
}
