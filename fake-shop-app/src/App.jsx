import Products from './components/products/products'
import Header from './components/header/header'
import MockResponse from './mocks/response.json'
import { FiltersContext } from './context/filterContext'
import './App.css'
import { useState, useContext, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState(MockResponse)
  const [filtered, setFilteredProducts] = useState(MockResponse)
  const {filters, setFilters} = useContext(FiltersContext)

  useEffect(()=>{
		const filterProducts = products.filter(product=>{
			return (
				product.price>filters.minPrice && (
					product.category===filters.category ||
					filters.category==='all'
			))
		})
		setFilteredProducts(filterProducts)
	}, [filters])

  return (
    <>
      <Header/>
      <Products 
		products={filtered}
		/>
    </>
  )
}

export default App
