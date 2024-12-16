import './products.css'
import Card from '../card/card'

const Products = ({
    products
}) => {
    return (
        <div className='products-pool'>
            {
                products?.map(product => {
                    return (
                        <Card 
                        key={product.id} 
                        product={product}
                        />
                    )
                })
            }
        </div>
    )
}

export default Products