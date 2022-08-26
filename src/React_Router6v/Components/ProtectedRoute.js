import { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom'

function ProtectedRoute(props){
     const {Component} = props
     const navigate = useNavigate();  
    // here we will check the comdition wehter customer is loggedIn or not
    
    useEffect(()=>{
    
      let login = localStorage.getItem('login')
      if(!login){
      
      navigate('/login')

      }  

    })
    
    return(
        <div className="m-5">
        <Component />
        </div> 
    )
}   

export default ProtectedRoute;
 