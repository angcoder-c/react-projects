import './card.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cartContext'

const Card = ({
    product
}) => {
    const {cart, addToCart, removeFromCart} = useContext(CartContext)
    const [inCart, setInCart] = useState(false);
    useEffect(()=>{
        const isProductInCart = cart.some(item => item.id === product.id);
        setInCart(isProductInCart)
    }, [cart])
    return (
        <div className="product-card-container">
            <div className="product-card-img">
                <img src={product.image} alt={product.title} />
                <div className='cover-image-hover'></div>
            </div>
            <div className="product-card-info">
                <div className='product-card-info-txt'>
                    <h4>{product.title}</h4>
                    <span>$ {product.price}</span>
                </div>
                <div className='product-card-info-button'>
                    <button 
                        onClick={e=>{
                            inCart
                            ? removeFromCart(product)
                            : addToCart(product)
                            setInCart(!inCart)
                        }}
                        className={inCart?'remove-button':'add-button'}
                        >
                            {
                                inCart
                                ? 'Remove'
                                : 'Add'
                            }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card