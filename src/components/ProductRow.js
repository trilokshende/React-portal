import { Link } from 'react-router-dom'
import {url} from '../common/backendportno'
import UpdateProduct from '../AdminPages/UpdateProduct'
import axios from 'axios'

const ProductRow = ( {product} ) =>{

    const updateProduct=()=>{
        return <UpdateProduct />
    }
    const deleteProduct =(id)=>{
        axios.delete( url + '/products/deleteProduct/'+id).then((res)=>{
            console.log( res)
            if( res.status === 200){
                alert(`Product deleted successfully!!`)
            // go to product List page i.e to ManageProducts 
                 window.location='/adminHome/manageProducts'
    
             }
        })
    }
    return(
        <tr>
            <td>{product.product_id}</td>
            <td>
                <img className="thumbnail" src={ url + '/' + product.thumbnail} alt="" />
            </td>
            <td>{product.title}</td>
            <td>{product.size}</td>
            <td>{product.price}</td>
            <td>{product.p_qty}</td>
            <td>
                <Link to="/adminHome/updateProduct">
                <button className="btn-primary" onClick={updateProduct}>
                    Update Product
                </button>
                </Link>
                
            </td>
            <td>
                <button className="btn-danger" onClick={()=>{
                    deleteProduct(product.product_id)
                }}>
                    Delete Product
                </button>
            </td>
        </tr>
    )
}

export default ProductRow