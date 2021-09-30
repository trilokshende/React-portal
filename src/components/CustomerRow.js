import { Link } from 'react-router-dom'
import {url} from '../common/backendportno'
import UpdateProduct from '../AdminPages/UpdateProduct'
import axios from 'axios'

const CustomerRow = ( {customer} ) =>{

    // const updateProduct=()=>{
    //     return <UpdateProduct />
    // }
    // const deleteProduct =(id)=>{
    //     axios.delete( url + '/products/deleteProduct/'+id).then((res)=>{
    //         console.log( res)
    //         if( res.status === 200){
    //             alert(`Product deleted successfully!!`)
    //         // go to product List page i.e to ManageProducts 
    //              window.location='/adminHome/manageProducts'
    
    //          }
    //     })
    // }
    return(
        <tr>
            <td>{customer.user_id}</td>
            <td>{customer.firstname} {customer.lastname}</td>
            <td>{customer.address}</td>
            <td>{customer.city}</td>
            <td>{customer.mobile}</td>
            <td>{customer.created_on}</td>
            <td>{customer.updated_on}</td>
            {/* <td>
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
            </td> */}
        </tr>
    )
}

export default CustomerRow