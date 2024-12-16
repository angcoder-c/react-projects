import Products from './components/products/products'
import Header from './components/header/header'
import useFilters from './hooks/useFilters'
import CartProvider from './context/cartContext'
import Cart from './components/cart/cart'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
	const {filterProducts} = useFilters()
	const [products, setProducts] = useState([])

	useEffect(()=>{
		const getProducts = async () => {
			setProducts(await filterProducts())
		}
		getProducts()
	}, [products])

	return (
		<CartProvider>
			<main>
				<Header/>
				<Products 
				products={products}
				/>
			</main>
			<Cart/>
		</CartProvider>
	)
}

export default App
