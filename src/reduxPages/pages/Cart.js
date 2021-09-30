import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction } from '../actions/cartActions'
import { url } from '../../common/backendportno'
import deleteCart from '../../images/delete.jpg'
import './cart.css'

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems)
  console.log(cartItems)
  const dispatch = useDispatch()

  const removeFromCart = (product) => {
    dispatch(removeFromCartAction(product))
  }

  const placeOrder=()=>{
    if(cartItems.length !== 0){

      alert("Your Order is Placed Successfully...!")
    window.location ='/customerHome'
    }
    else{
      alert("Your Cart is empty. Please add some items to place your Order!")
      window.location ='/customerHome/menulist'
    }
  }

  return (
    <div className="container">
      <h1 className="HorizontalSlider-title">My Cart</h1>
      <h5 className="col cart-items">Cart Items : {cartItems.length}</h5>
      
      <a href="/customerHome/menuList" className="btn btn-success">Add More</a>
        
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Id</th>
            <th></th>
            <th>Title</th>
            <th>Size</th>
            <th>Price(in Rs.)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product) => {
            return (
              <tr>
                <td>{product.product_id}</td>
                <td><img className="thumbnail" src={ url + '/' + product.thumbnail} alt="" /></td>
                <td>{product.title}</td>
                <td>{product.size}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn"
                    onClick={() => {
                      removeFromCart(product)
                    }}>
                    <img className="img-size" src={deleteCart} alt="delete"/>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody> 
      </table>
      <h6 className="black">Total Amount (in Rs.) :</h6>
      <button className="btn btn-success button end" onClick={
                      placeOrder
                    }> Place Your Order </button>
      
    </div>
  )
}

export default Cart
