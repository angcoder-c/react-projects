import React from "react"
import './selectForm.css'
import { type Cryptocurrency } from "../../types.d"
import { SUPPORTED_ASSETS } from "../../constants"

type Props = { 
    defaultValue : Cryptocurrency, 
    onChange : (event : React.ChangeEvent<HTMLSelectElement>)=>void
}

const SelectAsset = ({
    defaultValue,
    onChange
} : Props) => {
    return (
        <select className="select-asset" onChange={onChange} value={defaultValue}>
            {
                Object.entries(SUPPORTED_ASSETS).map(([symbol, name]) => {
                    return (
                        <option key={symbol} value={symbol}>
                            {name}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default SelectAsset