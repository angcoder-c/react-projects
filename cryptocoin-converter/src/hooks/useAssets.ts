import { useReducer } from "react";
import { type StateReducer, type ActionReducer, type Cryptocurrency, CryptocurrencyValues } from "../types";

const initialState : StateReducer = {
    fromCryptocurrency : 'BTC',
    toCryptocurrency : 'ETH',
    fromCryptocurrencyValue : {
        usd : 0,
        amount : 0
    },
    toCryptocurrencyValue : {
        usd : 0, 
        amount : 0
    },
    loading:false
}

const reducer = (state : StateReducer, action : ActionReducer) => {
    const { type } = action

    if (type==='INTERCHANGE_CRYPTOCURRENCY') {
        const loading = state.fromCryptocurrencyValue.amount!==0
        return {
            ...state,
            loading : loading,
            fromCryptocurrency : state.toCryptocurrency,
            toCryptocurrency : state.fromCryptocurrency,
            fromCryptocurrencyValue : state.toCryptocurrencyValue,
            toCryptocurrencyValue : state.fromCryptocurrencyValue
        }
    }

    if (type==='SET_FROM_CRYPTOCURRENCY') {
        const loading = state.fromCryptocurrencyValue.amount!==0
        return {
            ...state,
            loading : loading, 
            fromCryptocurrency : action.payload
        }
    }

    if (type==='SET_TO_CRYPTOCURRENCY') {
        const loading = state.fromCryptocurrencyValue.amount!==0
        return {
            ...state,
            loading : loading,
            toCryptocurrency : action.payload
        }
    }

    if (type==='SET_FROM_CRYPTOCURRENCY_VALUE') {
        const loading = action.payload.amount!==0
        return {
            ...state,
            loading : loading,
            fromCryptocurrencyValue : action.payload
        }
    }


    if (type==='SET_TO_CRYPTOCURRENCY_VALUE') {
        const amountResult = (action.payload.usd * state.fromCryptocurrencyValue.amount) / state.fromCryptocurrencyValue.usd  
        return {
            ...state,
            location : false,
            toCryptocurrencyValue : {
                usd : action.payload.usd,
                amount : amountResult
            }
        } 
    }
    return state
}

export const useStore = (value = initialState) => {
    const [{
        fromCryptocurrency,
        toCryptocurrency,
        fromCryptocurrencyValue,
        toCryptocurrencyValue,
        loading
    }, dispatch] = useReducer(reducer, value)

    const interchangeCryptocurrency = () => {
        dispatch({ type : 'INTERCHANGE_CRYPTOCURRENCY' })
    }

    const setFromCryptocurrency = (symbol : Cryptocurrency) => {
        dispatch({ type : 'SET_FROM_CRYPTOCURRENCY', payload : symbol })
    }

    const setToCryptocurrency = (symbol : Cryptocurrency) => {
        dispatch({ type : 'SET_TO_CRYPTOCURRENCY', payload : symbol })
    }

    const setFromCryptocurrencyValue = (assetValues : CryptocurrencyValues) => {
        dispatch({ type : 'SET_FROM_CRYPTOCURRENCY_VALUE', payload : assetValues})
    }

    const setToCryptocurrencyValue = (assetValues : CryptocurrencyValues) => {
        dispatch({ type : 'SET_TO_CRYPTOCURRENCY_VALUE', payload : assetValues})
    }

    return {
        fromCryptocurrency,
        setFromCryptocurrency,
        toCryptocurrency,
        setToCryptocurrency,
        fromCryptocurrencyValue,
        setFromCryptocurrencyValue,
        toCryptocurrencyValue,
        setToCryptocurrencyValue,
        loading,
        interchangeCryptocurrency
    }
}