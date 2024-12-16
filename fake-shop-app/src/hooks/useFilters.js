import { useContext } from "react"
import { FiltersContext } from "../context/filterContext"
import fetchProducts from "../service/fetchProducts"
import MockResponse from '../mocks/response.json'

const useFilters = () => {
    const {filters, setFilters} = useContext(FiltersContext)
    const filterProducts = async () => {
        const products = MockResponse// await fetchProducts()
        return products.filter(product=>{
            return (
                product.price>filters.minPrice 
                && (
                    product.category===filters.category ||
                    filters.category==='all'
                )
            )
        })
    }
    return {filters : filters, filterProducts, setFilters}
}

export default useFilters