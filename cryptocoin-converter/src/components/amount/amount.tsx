import React from "react"
import './amount.css'
import { getPriceType } from "../../types.d"

type Props = 
    | { type : getPriceType.From, value : number, onChange : (event:React.ChangeEvent<HTMLInputElement>) => void }
    | { type : getPriceType.To, loading : boolean, amount : number }

const Amount = (props : Props) => {
    return (
        <div className="input-container">
            {
                props.type===getPriceType.From
                ? (
                    <input 
                    type="text"
                    className="amount-input"
                    onChange={props.onChange}
                    value={props.value}
                    />
                )
                : (
                    <input 
                    className="amount-input"
                    value={props.loading ? 'Loading...' : props.amount} 
                    disabled
                    />
                )
            }
        </div>
    )
}

export default Amount