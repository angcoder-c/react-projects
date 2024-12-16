import { CartContext } from '../../context/cartContext'
import './cart.css'
import { useContext, useState } from 'react'

const Cart = () => {
    const {cart, removeUnitFromCart, addToCart, removeFromCart} = useContext(CartContext)
    const [showCart, setShowCart] = useState(false)
    const handleDecButton = product => {
        removeUnitFromCart(product)
    }

    const handleIncButton = product => {
        addToCart(product)
    }

    return (
        <>
        <div 
        className='float-cart-button'
        onClick={e=>setShowCart(!showCart)}
        >
            🛒
        </div>
        <div className={showCart?'cart':'hiddeCart'}>
            <div className='cart-content'>
                <h1>Cart</h1>
                <div className='cart-items'>
                    {cart?.map(product => (
                        <div key={product.id+'c'} className='cart-card-item'>
                            <h4>{product.title}</h4>
                            <p>$ {product.price}</p>
                            <div className='cart-card-item-count'>
                                <button 
                                className='remove-button'
                                onClick={e=>handleDecButton(product)}
                                >
                                    ➖
                                </button>
                                <p>{product.count}</p>
                                <button 
                                className='add-button'
                                onClick={e=>handleIncButton(product)}
                                >
                                    ➕
                                </button>
                            </div>
                            <button 
                                onClick={e=>removeFromCart(product)}
                                className='remove-button'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
        </>
    )
}

export default Cart