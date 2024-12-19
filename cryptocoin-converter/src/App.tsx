import React, { useEffect, useState } from 'react'
import './App.css'
import useAssets from './hooks/useAssets'
import fetchAssets from './services/fetchAssets'
import { Cryptocurrency, GetPriceProps, getPriceType } from './types.d'
import { SUPPORTED_ASSETS } from './constants'

function App() {
  const {
      fromCurrency,
      toCurrency,
      fromCurrencyUsd,
      toCurrencyUsd,
      fromAmount,
      toAmount,
      loading,
      setFromCurrency,
      setToCurrency,
      setFromCurrencyUsd,
      setToCurrencyUsd,
      setFromAmount,
      setToAmount
  } = useAssets()

  const handleFromCurrency = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(event.target.value as Cryptocurrency)
  }

  const handleToCurrency = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(event.target.value as Cryptocurrency)
  }

  const setToAmountWithFilter = ({ from, to, amount } : { from : number, to : number, amount : number }) => {
    if (to > 0) {
      setToAmount((from / to) * amount);
    }
  }

  const getPrice = async ({ type, changeValue } : GetPriceProps ) => {
    const currency = type===getPriceType.From ? fromCurrency : toCurrency
    const data = await fetchAssets(SUPPORTED_ASSETS[currency])
    const valueUsd = Number(data.priceUsd)
    if(!data && !Number.isNaN(data.priceUsd)) return

    const newToAmount = type===getPriceType.From
    ? { from : valueUsd, to : toCurrencyUsd, amount : fromAmount }
    : { from : fromCurrencyUsd, to : valueUsd, amount : fromAmount }
    
    changeValue(valueUsd) 
    setToAmountWithFilter(newToAmount)
  }

  const handleFromAmount = (event : React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(event.target.value)) return 
    const amount = Number(event.target.value)
    setFromAmount(amount)
    setToAmountWithFilter({ 
      from : fromCurrencyUsd, 
      to : toCurrencyUsd, 
      amount : amount 
    })
  }

  useEffect(()=>{
    getPrice({
      type : getPriceType.From,
      changeValue : setFromCurrencyUsd
    })
  }, [fromCurrency])

  useEffect(()=>{
    getPrice({
      type : getPriceType.To,
      changeValue : setToCurrencyUsd
    })
  }, [toCurrency])

  return (
    <>
      <h1>Cryptocurrency App</h1>
      <select onChange={handleFromCurrency} value={fromCurrency}>
        <option value="BTC">bitcoin</option>
        <option value="ETH">ethereum</option>
      </select>
      <p>{fromCurrencyUsd}</p>
      <input type="text" onChange={handleFromAmount}/>
      <select onChange={handleToCurrency} value={toCurrency}>
        <option value="BTC">bitcoin</option>
        <option value="ETH">ethereum</option>
      </select>
      <p>{toCurrencyUsd}</p>
      <input value={loading?'Loading...':toAmount} disabled/>
      
    </>
  )
}

export default App
