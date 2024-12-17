import { SUPPORTED_COINS } from "./constants"

export type Cryptocoin = keyof typeof SUPPORTED_COINS

export interface StateReducer {
    fromCryptocoin : Cryptocoin
    toCryptocoin : Cryptocoin
    fromCryptocoinValueUSDValue : string
    fromCryptocoinValueValue : string
    toCryptocoinValueUSDValue : string
    result : string
}

export type ActionReducer = 
   | { type : 'INTERCHANGE_CRYPTOCOIN' }
   | { type : 'SET_FROM_CRYPTOCOIN', payload : Cryptocoin }
   | { type : 'SET_TO_CRYPTOCOIN', payload : Cryptocoin }
   | { type : 'SET_FROM_CRYPTOCOIN_VALUE', payload : string }
   | { type : 'SET_RESULT_VALUE', payload : string }