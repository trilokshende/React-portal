import React from 'react'
import { useState , useEffect} from 'react';
import './Admin.css'

import axios from 'axios';
import { url } from '../common/backendportno'
import ProductRow from '../components/ProductRow';
import { Link } from 'react-router-dom';
const ManageProducts = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        console.log(`products component gets loaded`)
        getProducts()
    }, []);

    const getProducts= () =>{
        // sending req to REST API
        axios.get( url + '/products')
        .then((res) =>{
         //   const result = res.data
            console.log(res)
            if(res.status === 200){
                setproducts(res.data)
            }else{
                alert('Error while loading OR list might be empty!')
            }
        })
    }

        return(
        <div className="container">      
            <div className="HorizontalSlider-title">Product List</div> 
              <table class="table table-striped " >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th></th>
                            <th>Title</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th colSpan="2"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                         return <ProductRow product={product} />
                        })}
                        <td className="button">
                            <Link to="/adminHome/addProduct">
                                <a className="btn btn-success button">Add Product</a>
                            </Link>
                        </td>
                    </tbody>
                        
              </table>              
        </div>
    )
}

export default ManageProducts

