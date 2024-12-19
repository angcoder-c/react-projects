import React, { useEffect } from 'react'
import './App.css'
import useAssets from './hooks/useAssets'
import fetchAssets from './services/fetchAssets'
import { type Cryptocurrency, type GetPriceProps, getPriceType } from './types.d'
import SelectAsset from './components/selectForm/selectForm'
import { SUPPORTED_ASSETS } from './constants'
import Amount from './components/amount/amount'
import ShowUsdValue from './components/showUsdValue/showUsdValue'

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
      setToAmount,
      interchange
  } = useAssets()

  const handleInterchange = (event : React.MouseEvent<HTMLButtonElement>) => {
    interchange()
  }

  const handleFromCurrency = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(event.target.value as Cryptocurrency)
  }

  const handleToCurrency = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(event.target.value as Cryptocurrency)
  }

  const setToAmountWithFilter = ({ from, to, amount } : { from : number, to : number, amount : number }) => {
    if (to > 0) {
      setToAmount(Number(((from / to) * amount).toFixed(2)));
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
      <header>
        <h1>Cryptocurrency App</h1>
      </header>
      <main>
        <div className='currency'>
          <SelectAsset
            defaultValue={fromCurrency}
            onChange={handleFromCurrency}
            />
          <ShowUsdValue
            usd={fromCurrencyUsd}
            />
          <Amount
            type={getPriceType.From}
            onChange={handleFromAmount}
            value={fromAmount}
            />
        </div>
        <button className='interchange-button' onClick={handleInterchange}>
          🔄️
        </button>
        <div className='currency'>
          <SelectAsset
            defaultValue={toCurrency}
            onChange={handleToCurrency}
            />
          <ShowUsdValue
            usd={toCurrencyUsd}
            />
          <Amount
            type={getPriceType.To}
            loading={loading}
            amount={toAmount}
            />
        </div>
      </main>
    </>
  )
}

export default App
