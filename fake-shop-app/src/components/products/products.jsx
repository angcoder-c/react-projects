import './products.css'
import Card from '../card/card'

const Products = ({
    products
}) => {
    
    return (
        <div className='products-pool'>
            {
                products?.map((product, index) => {
                    return (
                        <Card 
                        key={index} 
                        product={product}
                        />
                    )
                })
            }
        </div>
    )
}

export default Products