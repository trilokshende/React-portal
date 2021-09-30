import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import {url} from '../common/backendportno'
import '../CustomerPages/MenuList.css'
import { addToCartAction } from '../reduxPages/actions/cartActions';
const Beverages = ()=>{
    const [products, setproducts] = useState([]);
    const dispatch = useDispatch()

  const addToCart = (product) => {
    alert("Successfully Added to the Cart...")
    // call the API to add the product to the cart
    dispatch(addToCartAction(product))
  }

    useEffect(() => {
        console.log(`products component gets loaded`)
        getProducts()
    }, []);
    
    const getProducts= () =>{
        // sending req to REST API
        axios.get( url + '/products/beverages')
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


    return (
        <div >
            <div className="HorizontalSlider-title">Beverages</div>
            <div className="HorizontalSlider-container table table-responsive">
                {
                    products.map((product)=>{
                        return (
                            <div className="component-container">
                                <div className="image-title">{product.title}</div>
                                <img className="size" src={url + '/' + product.thumbnail} alt="thumbnail"/><br/>
                                <div className="image-title">Price : Rs.{product.price}</div>
                                <button className=" center btn btn-success " onClick={() => {
                                    addToCart(product)
                                    }}>Add To Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )  
}

export default Beverages;