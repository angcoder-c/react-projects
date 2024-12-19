import { useReducer } from "react"
import { ActionReducer, Cryptocurrency, StateReducer } from "../types"

const initialState : StateReducer = {
    fromCurrency : "BTC",
    toCurrency : "ETH",
    fromCurrencyUsd : 0,
    toCurrencyUsd : 0,
    fromAmount : 0,
    toAmount : 0,
    loading : false
}

const reducer = ( state : StateReducer, action : ActionReducer ) => {
    const { type } = action

    if (type==='INTERCHANGE_CRYPTOCURRENCY') {
        return {
            ...state,
            loading : true,
            fromCurrency : state.toCurrency,
            toCurrency : state.fromCurrency,
            fromCurrencyUsd : state.toCurrencyUsd,
            toCurrencyUsd : state.fromCurrencyUsd,
            fromAmount : state.toAmount,
            toAmount : state.fromAmount,
        } 
    }

    if (type==='SET_FROM_CURRENCY') {
        return {
            ...state,
            loading : true,
            fromCurrency : action.payload
        } 
    }

    if (type==='SET_TO_CURRENCY') {
        return {
            ...state,
            loading : true,
            toCurrency : action.payload
        } 
    }

    if (type==='SET_FROM_CURRENCY_USD') {
        return {
            ...state,
            fromCurrencyUsd : action.payload
        } 
    }

    if (type==='SET_TO_CURRENCY_USD') {
        return {
            ...state,
            toCurrencyUsd : action.payload
        } 
    }

    if (type==='SET_FROM_CURRENCY_AMOUNT') {
        return {
            ...state,
            fromAmount : action.payload
        } 
    }

    if (type==='SET_TO_CURRENCY_AMOUNT') {
        return {
            ...state,
            loading : false,
            toAmount : action.payload
        } 
    }

    return state
}

const useAssets = (init = initialState) => {
    const [{
        fromCurrency,
        toCurrency,
        fromCurrencyUsd,
        toCurrencyUsd,
        fromAmount,
        toAmount,
        loading
    }, dispatch] = useReducer(reducer, init)

    const interchange = () => {
        dispatch({ type : 'INTERCHANGE_CRYPTOCURRENCY' })
    }

    const setFromCurrency = (symbol : Cryptocurrency) => {
        dispatch({ type : 'SET_FROM_CURRENCY', payload : symbol })
    }

    const setToCurrency = (symbol : Cryptocurrency) => {
        dispatch({ type : 'SET_TO_CURRENCY', payload : symbol })
    }

    const setFromCurrencyUsd = (value : number) => {
        dispatch({ type : 'SET_FROM_CURRENCY_USD', payload : value })
    }

    const setToCurrencyUsd = (value : number) => {
        dispatch({ type : 'SET_TO_CURRENCY_USD', payload : value })
    }

    const setFromAmount = (value : number) => {
        dispatch({ type : 'SET_FROM_CURRENCY_AMOUNT', payload : value })
    }

    const setToAmount = (value : number) => {
        dispatch({ type : 'SET_TO_CURRENCY_AMOUNT', payload : value })
    }
    
    return {
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
    }
}

export default useAssets