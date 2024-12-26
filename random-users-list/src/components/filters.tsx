import React from "react"

type Props = {
    resetFilters : ()=>void
    countryField : string,
    handleCountryFilter : (event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Filters = ({ resetFilters, countryField, handleCountryFilter } : Props) => {
    return (
        <div className="filters">
            <button 
            onClick={()=>resetFilters()}
            >
                Reset State
            </button>
            <input 
            type="text" 
            onChange={handleCountryFilter} 
            value={countryField} 
            placeholder='Country...'
            />
        </div>
    )
}

export default Filters