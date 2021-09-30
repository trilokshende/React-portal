import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { url } from '../common/backendportno';


const Register = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState();

    const history = useHistory();

    const handleSubmit = () => {
        if (firstname.length === 0 || lastname.length === 0 || email.length === 0 || password.length === 0 || mobile.length === 0 || address.length === 0 || city.length === 0 || pin === 0)
            alert("All fields are required")
         else {
            axios.post(url + '/user/register', { firstname: firstname, lastname: lastname, email: email, password: password, address: address, mobile: mobile, city: city, pin: pin, role: 'CUSTOMER' })
                .then((response) => {
                    console.log(response)
                    const result = response.status
                    console.log(result)
                    if (result === 200) {
                        alert('You have registered successfully. Please login to continue');
                        history.push('/');
                    } else {
                        alert('something went wrong ..try again');
                    }
                });
            }
    }

    return (
        <div className="wrapper register">
            <div id="formContent">
                <h3 className="title">Register with us</h3>
                <div className="form">
                    <table >
                        <tbody>
                            <tr>
                                <td> <input
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                    type="text"
                                    id="FirstName"
                                    className="username"
                                    placeholder="Name"
                                /></td>
                                <td> <input
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                    type="text"
                                    id="lastname"
                                    className="username"
                                    placeholder="LastName"
                                /></td>
                            </tr>
                            <tr>
                                <td> <input
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    id="email"
                                    className="username"
                                    placeholder="Email"
                                /></td>
                                <td> <input
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    type="password"
                                    id="password"
                                    className="password"
                                    placeholder="Password"
                                /></td>
                            </tr>
                            <tr>
                                <td> <input
                                    onChange={(e) => {
                                        setMobile(e.target.value);
                                    }}
                                    type="text"
                                    id="phone"
                                    className="username"
                                    placeholder="Phone"
                                /></td>
                                <td> <input
                                    onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}
                                    type="text"
                                    id="address"
                                    className="username"
                                    placeholder="Address"
                                /></td>
                            </tr>

                            <tr>
                                <td> <input
                                    onChange={(e) => {
                                        setCity(e.target.value);
                                    }}
                                    type="text"
                                    id="city"
                                    className="username"
                                    placeholder="City"
                                /></td>
                                <td> <input
                                    onChange={(e) => {
                                        setPin(e.target.value);
                                    }}
                                    type="text"
                                    id="address"
                                    className="username"
                                    placeholder="pin"
                                /></td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="center"> <input
                                    type="submit"
                                    className="customBtn"
                                    value="Signup"
                                    onClick={handleSubmit}
                                /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="form-footer"></div>
                <div id="formFooter">
                  <a className="underlineHover forgot-pswd" href="/login">
                    Cancel
                  </a>
                </div>
            </div>
        </div>
    );
}

export default Register;


