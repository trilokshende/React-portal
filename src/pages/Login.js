
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../styles/login.css"
import image from "../logo/logo.jpg"
import { url } from '../common/backendportno';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkLogin = () => {

        if (email.length === 0 && password.length === 0)
            toast("please enter email and password")
        else if (email.length === 0)
            toast("Email should not be empty")
        else if (password.length === 0)
            toast("Password should not be empty")
        
        else {
            axios.post(url + '/auth/authenticate', { email: email, password: password }).then((res) => {
                //   this.setState({ user: res });
                 console.log(res);

                let data = res.data.role; 
                const user = {
                    firstname : res.data.firstname,
                    lastname : res.data.lastname
                }

                if (data === "CUSTOMER" && user !== null) {
                    localStorage.setItem("user",JSON.stringify(user))
                    window.location = '/customerHome'
                }
                else if (data === "ADMIN" && user !== null) {
                    localStorage.setItem("user",JSON.stringify(user))
                    window.location = '/adminHome/manageProducts'
                }
                else{
                  if  (data !== "ADMIN" || data !== "CUSTOMER")
                    toast("Wrong username or password")
            
                } 
            })
            .catch(error => {
               toast("Please enter valid Email or Password");
            });

        }
    }

    return (

        <div className="height">
            <div className="overflow-auto">
                <div className="wrapper">
                    <div id="formContent">
                        <h2 className="title"> Pizza Oven  </h2>

                        <div className="first">
                            <img
                                src={image}
                                id="icon"
                                alt="User Icon"
                                style={{ borderRadius: "50%" }}
                            />
                        </div>

                        <div className="form">
                            <input
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                id="signin"
                                className="username"
                                placeholder="Email Id"
                            />
                            <input
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                                id="password"
                                className="password"
                                placeholder="Password"
                            />
                            <input
                                type="submit"
                                className="customBtn"
                                value="Login"
                                onClick={checkLogin}
                            />
                            <ToastContainer/>
                        </div>
                        <div id="formFooter">
                            <a
                                className="underlineHover forgot-pswd float-start"
                                href="/changePassword">
                                Forgot Password
                            </a>
                            <a className="underlineHover forgot-pswd float-end" href="/register">
                                Signup Here
                            </a>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LoginForm;







