// // import React from 'react'
// // const Home = ()=>{
// //     return (
// //             <div className="App"> 
// //                 <h6>Welcome to  Home page...</h6>
// //             </div>
// //             )
// // }

// // export default Home




// import React from 'react'
// import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'
// import '../CustomerPages/CustomerPages.css'
// import Login from '../pages/Login'


// //import Footer from './../AdminPages/Footer';
// import AboutUs from '../CustomerPages/AboutUs'
// const Home = ()=>{
//     return (
//         <div className="App">  
//         <BrowserRouter>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark ">
//                 <div className="container-fluid">
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//                         <h1> Pizza Oven </h1>
//                         <ul></ul>
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/home">Home</Link>
//                             </li>
//                             <ul></ul>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/aboutUs">About Us</Link>
//                             </li>
//                             <ul></ul>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/login">Login</Link>             
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <Switch>
//                 <Route path='/Home' component={Home} />
//                 <Route path='/aboutUs' component={AboutUs} />
//                 <Route path='/Login' component={Login} />
//             </Switch>
//         </BrowserRouter>
//         </div>





//       /*  <div className="App"> 
//             <BrowserRouter>
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light ">
//                     <div className="container-fluid">
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="background collapse navbar-collapse" id="navbarTogglerDemo01">
//                             <ul></ul><ul></ul><ul></ul><ul></ul>
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/customerHome/menuList/vegPizza"><b>Veg Pizza</b></Link>
//                                 </li>
//                             </ul>
//                             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/customerHome/menuList/nonVegPizza"><b>Non-Veg Pizza</b></Link>
//                                 </li>
//                             </ul>
//                             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/customerHome/menuList/beverages"><b>Beverages</b></Link>             
//                                 </li>
//                             </ul>
//                             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/customerHome/menuList/ingredients"><b>Ingredients</b></Link>
//                                 </li>
//                             </ul>
//                             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/customerHome/menuList/toppings"><b>Toppings</b></Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//                 <Switch>
//                     <Route path='/customerHome/menuList/vegPizza' component={VegPizza} />
//                     <Route path='/customerHome/menuList/nonVegPizza' component={NonVegPizza} />
//                     <Route path='/customerHome/menuList/beverages' component={Beverages} />
//                     <Route path='/customerHome/menuList/ingredients' component={Ingredients} />
//                     <Route path='/customerHome/menuList/toppings' component={Toppings} />
//                     <DisplayPizza/>
//                 </Switch>
//                 <Footer />
//             </BrowserRouter>     
//         </div>   */
//         )
// }

// export default Home