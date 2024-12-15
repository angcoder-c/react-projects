import { useContext, useEffect, useId, useState } from 'react'
import { FiltersContext } from '../../context/filterContext'
import './filters.css'

const Filters = () => {
    const {filters, setFilters} = useContext(FiltersContext)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const handleOnChangePriceFilters = e => {
        const tempFilters = structuredClone(filters)
        tempFilters.minPrice = Number(e.target.value)
        setFilters(tempFilters)
    }
    
    const handleOnChangeCategoryFilters = e => {
        const tempFilters = structuredClone(filters)
        tempFilters.category = e.target.value
        setFilters(tempFilters)
    }

    return (
        <section className='filters-container'>
            <div className='price-filter'>
                <label htmlFor={minPriceFilterId}>Minimun price: </label>
                <input 
                type="range" 
                id={minPriceFilterId}
                onChange={handleOnChangePriceFilters}
                value={filters.minPrice}
                min="0"
                max="500"
                step={25}
                />
                <span>$ {filters.minPrice}</span>
            </div>
            <div className='category-filter'>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleOnChangeCategoryFilters}>
                    <option value="all">all</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="electronics">electronics</option>
                    <option value="jewelery">jewelery</option>
                    <option value="men's clothing">men's clothing</option>                
                </select>
            </div>

        </section>
    )
}

export default Filters