import { SUPPORTED_ASSETS } from "./constants"

export type Cryptocurrency = keyof typeof SUPPORTED_ASSETS

export interface CryptocurrencyValues {
    usd : number,
    amount : number
}

export interface StateReducer {
    fromCryptocurrency : Cryptocurrency
    toCryptocurrency : Cryptocurrency
    fromCryptocurrencyValue : CryptocurrencyValues
    toCryptocurrencyValue : CryptocurrencyValues
    loading : boolean
}

export type ActionReducer = 
   | { type : 'INTERCHANGE_CRYPTOCURRENCY' }
   | { type : 'SET_FROM_CRYPTOCURRENCY', payload : Cryptocurrency }
   | { type : 'SET_TO_CRYPTOCURRENCY', payload : Cryptocurrency }
   | { type : 'SET_FROM_CRYPTOCURRENCY_VALUE', payload : CryptocurrencyValues }
   | { type : 'SET_TO_CRYPTOCURRENCY_VALUE', payload : CryptocurrencyValues }