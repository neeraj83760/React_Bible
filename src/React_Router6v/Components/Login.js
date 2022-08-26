import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Login(){
    
   const login =()=> {
   
    localStorage.setItem('login', true)
    navigate('/')
    }
    const navigate = useNavigate();  

    useEffect(()=>{
    
        let login = localStorage.getItem('login')
        if(login){
        // If user is already logged in then we will redirect him to home page 
        navigate('/')
  
        }  
  
      })
    
    return(
        <div className="m-5">
        <h1>Login Page !!!</h1>
        <input type="text" /> <br /> <br />
        <input type="text" /> <br /> <br />
        <button className='btn btn-danger' onClick={login}>Login!!</button>
        </div> 
    )
}   

export default Login;
