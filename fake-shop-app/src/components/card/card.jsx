import './card.css'

const Card = ({
    product
}) => {
    return (
        <div className="product-card-container">
            <div className="product-card-img"></div>
            <div className="product-card-info">
                {product.title}
            </div>
        </div>
    )
}

export default Card