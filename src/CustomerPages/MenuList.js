import React, { useEffect } from 'react'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
import './CustomerPages.css'
import './MenuList.css'
import VegPizza from '../MenuList Pages/VegPizza'
import NonVegPizza from '../MenuList Pages/NonVegPizza'
// import Ingredients from '../MenuList Pages/Ingredients'
// import Toppings from '../MenuList Pages/Toppings'
import Beverages from '../MenuList Pages/Beverages'
import CategoryComponent from '../MenuList Pages/CategoryComponent'
import Cart from '../reduxPages/pages/Cart'
const Menu = ()=>{
    
    
    return (
        <div className="App"> 
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="background collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul></ul><ul></ul><ul></ul><ul></ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customerHome/menuList/vegPizza"><b>Veg Pizza</b></Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customerHome/menuList/nonVegPizza"><b>Non-Veg Pizza</b></Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customerHome/menuList/beverages"><b>Beverages</b></Link>             
                                </li>
                            </ul>
                            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customerHome/menuList/ingredients"><b>Ingredients</b></Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customerHome/menuList/toppings"><b>Toppings</b></Link>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </nav>
                
                <Switch>
                    <Route path='/customerHome/cart' component={Cart} />
                    <Route path='/customerHome/menuList/vegPizza' component={VegPizza} />
                    <Route path='/customerHome/menuList/nonVegPizza' component={NonVegPizza} />
                    <Route path='/customerHome/menuList/beverages' component={Beverages} />
                    {/* <Route path='/customerHome/menuList/ingredients' component={Ingredients} />
                    <Route path='/customerHome/menuList/toppings' component={Toppings} /> */}
                    <CategoryComponent/>
                </Switch>
            </BrowserRouter>     
        </div>
        )
}

export default Menu
