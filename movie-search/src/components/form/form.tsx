import React from "react"
import { FormProps } from "./form.types"

const Form : React.FC<FormProps> = ({
    onSubmit,
    onChange
}) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="search-bar" id="search-bar" onChange={onChange}/>
            <button type='submit'>Search</button>
        </form>
    )
}

export default Form