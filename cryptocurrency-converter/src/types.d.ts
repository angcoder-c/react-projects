import { SUPPORTED_ASSETS } from "./constants"

export type Cryptocurrency = keyof typeof SUPPORTED_ASSETS
export type CryptocurrencyName = typeof SUPPORTED_ASSETS[keyof typeof SUPPORTED_ASSETS]

export interface StateReducer {
    fromCurrency : Cryptocurrency
    toCurrency : Cryptocurrency
    fromCurrencyUsd : number
    toCurrencyUsd : number
    fromAmount : number
    toAmount : number
    loading : boolean
}

export type ActionReducer = 
   | { type : 'INTERCHANGE_CRYPTOCURRENCY' }
   | { type : 'SET_FROM_CURRENCY', payload : Cryptocurrency }
   | { type : 'SET_TO_CURRENCY', payload : Cryptocurrency }
   | { type : 'SET_FROM_CURRENCY_USD', payload : number }
   | { type : 'SET_TO_CURRENCY_USD', payload : number }
   | { type : 'SET_FROM_CURRENCY_AMOUNT', payload : number }
   | { type : 'SET_TO_CURRENCY_AMOUNT', payload : number }

export enum getPriceType {
    From = 'from',
    To = 'to'
}

export type GetPriceProps = 
    | { type : getPriceType.Form, changeValue : (value : number) => void}
    | { type : getPriceType.To, changeValue : (value : number) => void}