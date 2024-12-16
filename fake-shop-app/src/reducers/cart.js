const reducer = (state, action) => {
    if (action.type==='ADD_TO_CART'){
        let cart = structuredClone(state)
        const filteredCart = cart.filter((product, index) => {
            if (product.id===action.product.id) {
                cart[index].count++
            } 
            return product.id===action.product.id
        })

        if (filteredCart.length===0){
            cart = [...cart, action.product]
            cart[cart.length-1].count = 1
        }

        return cart
    }

    if (action.type==='REMOVE_FROM_CART'){
        let cart = structuredClone(state)
        return cart.filter(product => product.id!==action.product.id)
    }

    if (action.type==='REMOVE_UNIT_FROM_CART'){
        let cart = structuredClone(state)

        cart.map((product, index) => {
            if (product.id===action.product.id) {
                cart[index].count--
            }
        })
        return cart.filter(product => product.count!==0)
    }

    if (action.type==='CLEAR_CART'){
        return []
    }
}

export default reducer