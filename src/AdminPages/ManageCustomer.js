import React from 'react'
import { useState , useEffect} from 'react';
import './Admin.css'

import axios from 'axios';
import { url } from '../common/backendportno'
import CustomerRow from '../components/CustomerRow';
const ManageCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        console.log(`Customers component gets loaded`)
        getCustomers()
    }, []);

    const getCustomers= () =>{
        // sending req to REST API
        axios.get( url + '/user/customers')
        .then((res) =>{
         //   const result = res.data
            console.log(res)
            if(res.status === 200){
                setCustomers(res.data)
            }else{
                alert('Error while loading OR list might be empty!')
            }
        })
    }

        return(
        <div className="container">      
            <div className="HorizontalSlider-title">Customers List</div> 
              <table class="table table-striped " >
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Contact No.</th>
                            <th>Account Createad On</th>
                            <th>Last Updated On</th>
                            {/* <th colSpan="2"> Actions </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => {
                         return <CustomerRow customer={customer} />
                        })}
                        {/* <td className="button">
                            <Link to="/adminHome/addProduct">
                                <a className="btn btn-success button">Add Product</a>
                            </Link>
                        </td> */}
                    </tbody>
                        
              </table>              
        </div>
    )
}

export default ManageCustomers