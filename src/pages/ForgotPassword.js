import '../App.css';
import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { url } from '../common/backendportno';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');


    const history = useHistory()
    const updatePassword = () => {
        if (email.length === 0 && password.length === 0)
            alert("please enter email and password")
        else if (email.length === 0)
            alert("Email should not be empty")
        else if (password.length === 0)
            alert("Password should not be empty")
        else {
            if (password === cpassword) {
                axios.put(url + '/user/password', { email: email, password: password })
                    .then((response) => {
                        console.log(response)
                        const result = response.status
                        console.log(result)
                        if (result === 200) {
                            alert('Password changed Successfully. You can Login now')
                            history.push('/#')
                        } else {
                            alert('something went wrong ..try again')
                        }
                    });
            } else {
                alert('Confirm Password should be same as New Password!')
            }
        }
    }

    return (
        <div className="wrapper">
            <div id="formContent">
                <h2 className="title"> Reset Password</h2>
                <div className="form">
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="text"
                        id="email"
                        className="username"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        type="password"
                        id="password"
                        className="username"
                        placeholder="NewPassword"
                    />
                    <input
                        onChange={(e) => {
                            setCPassword(e.target.value);
                        }}
                        type="password"
                        id="confirmPassword"
                        name="password"
                        className="username"
                        placeholder="ConfirmPassword"
                    />
                    <input
                        type="submit"
                        className="customBtn"
                        value="Update"
                        name="cpassword"
                        onClick={updatePassword}
                    />
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

export default ForgotPassword;