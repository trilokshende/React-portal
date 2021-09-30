import React from 'react';

 class Logout extends React.Component{

    constructor(props)
    {
        super(props);
        localStorage.removeItem("user")
        this.state = {
           
           
        }
    }

   

    render(){
      return(
        window.location = '/'

      )
        
    }
}
export default Logout;