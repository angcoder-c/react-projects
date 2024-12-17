import { useReducer } from "react";
import { StateReducer, ActionReducer } from "../types";

const initialState : StateReducer = {
    fromCryptocoin : 'BTC',
    toCryptocoin : 'ETH',
    fromCryptocoinValueUSDValue : '',
    fromCryptocoinValueValue : '',
    toCryptocoinValueUSDValue : '',
    result : '',
}

const reducer = (state : StateReducer, action : ActionReducer) => {
    return state
}