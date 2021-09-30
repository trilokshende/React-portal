import React from 'react'
//import '../App.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import AboutUs from '../CustomerPages/AboutUs'
 import Cart from '../reduxPages/pages/Cart'
// import Cart from '../addtocartcomponent/Cart'
import Logout from '../CustomerPages/Logout'
import Menu from '../CustomerPages/MenuList';
import Footer from '../AdminPages/Footer';
import DisplayPizza from '../components/DisplayPizza';
import '../CustomerPages/CustomerPages.css'
const CustomerHome = ()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    return (
            <div className="App ">  
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-custom">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <h1 className="nav-link white"> Pizza Oven </h1>
                            <ul></ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link white" to="/customerHome">Home</Link>
                                </li>
                                <ul></ul>
                                <li className="nav-item">
                                    <Link className="nav-link white" to="/customerHome/aboutUs">About Us</Link>
                                </li>
                                <ul></ul>
                                <li className="nav-item">
                                    <Link className="nav-link white" to="/customerHome/menuList">Menu</Link>             
                                </li>
                                <ul></ul>
                                <li className="nav-item">
                                    <Link className="nav-link white" to="/customerHome/cart">Cart</Link>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                        
                        <b className="white">Hi, {user.firstname} {user.lastname}</b>
                        <ul></ul>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link white" to="/customerHome/logout">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path='/customerHome/aboutUs' component={AboutUs} />
                    <Route path='/customerHome/menuList' component={Menu} />
                    <Route path='/customerHome/cart' component={Cart} />
                    {/* <Route path='/customerHome/search' component={Search} /> */}
                    <Route path='/customerHome/logout' component={Logout} />
                    <DisplayPizza/>
                </Switch>
                <Footer className="footer"/>
            </BrowserRouter>
            </div>
            
           )
}
export default CustomerHome

