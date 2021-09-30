import { Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import '../App.css';

import ManageCustomers from './ManageCustomer';
import ManageProducts from './ManageProducts';
import ManageStaff from './ManageStaff';
import ManagePrice from './ManagePrice';
import AddProduct from './AddProduct';
import  UpdateProduct  from './UpdateProduct';
import Logout from '../CustomerPages/Logout';
import Footer from './Footer';
import '../CustomerPages/CustomerPages.css'


const AdminHome = () =>{
    const user=JSON.parse(localStorage.getItem('user'));
    return (
    <div className="App">
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <h1 className="nav-link white"> Pizza Oven Admin</h1>
                        <ul></ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link white" to="/adminHome/manageProducts" >Manage Products</Link>
                            </li>
                            <ul></ul>
                            {/* <li className="nav-item">
                                <Link className="nav-link white" to="/adminHome/manageStaff" >Manage Staff</Link>
                            </li>
                            <ul></ul>
                            <li className="nav-item">
                                <Link className="nav-link white" to="/adminHome/managePrice" >Manage Pricing</Link>             
                            </li>
                            <ul></ul> */}
                            <li className="nav-item">
                                <Link className="nav-link white" to="/adminHome/manageCustomer" >View all Customer</Link>
                            </li>
                        </ul>
                    </div>
                    <b className=" white">Hi, {user.firstname} {user.lastname}</b>
                    <ul></ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link white" to="/customerHome/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route path="/adminHome/manageProducts" component={ManageProducts} />
                {/* <Route path="/adminHome/manageStaff" component={ ManageStaff} />
                <Route path="/adminHome/managePrice" component={ManagePrice} />     */}
                <Route path="/adminHome/manageCustomer" component={ManageCustomers} />
                <Route path="/adminHome/addProduct" component={AddProduct} />
                <Route path="/adminHome/updateProduct" component={UpdateProduct} />  
                <Route path='/customerHome/logout' component={Logout} />                  
            </Switch>
            <Footer className="footer"/>
        </BrowserRouter>
    </div>
    )
}

export default AdminHome