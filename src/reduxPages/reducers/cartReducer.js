const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add-to-cart':
      return [...state, action.product]

    case 'remove-from-cart':
       return state.filter((p) => p.product_id !== action.product.product_id)
      // remove the product from cartItems
      // const newItems = []
      // for (const product of state) {
      //   if (product.product_id !== action.product.product_id) {
      //     newItems.push(product)
      //   }
      // }
      // return newItems

    default:
      return state
  }
}

export default cartReducer
