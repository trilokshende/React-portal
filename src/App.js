import './App.css';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';// Link,  Switch,
import Register from './pages/Register';
import CustomerHome from './pages/CustomerHome';
import LoginForm from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import AdminHome from './AdminPages/AdminHome';

function App() {
 const user=JSON.parse(localStorage.getItem('user'));
 
  return (
    <div className="App">  
      
       <BrowserRouter>
            <Route path='/react-portal' component={LoginForm} />
          <Route path='/' component={LoginForm} exact/>
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={Register} />
          <Route path='/changePassword' component={ForgotPassword} />
          
          <Route path='/customerHome'>
             {!user ? <Redirect to="/"/> : <CustomerHome/>}
          </Route>
          <Route path='/adminHome'>
             {!user ? <Redirect to="/"/> : <AdminHome/>}
          </Route>
       </BrowserRouter> 
    </div>
  );
}
  
export default App;
