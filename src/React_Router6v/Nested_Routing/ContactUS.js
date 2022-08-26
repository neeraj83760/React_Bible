import {Link, Outlet } from 'react-router-dom'

function ContactUS(){

    
    return(
        <div className="">
        <h1>Contact US Page !!!</h1>
        <h2>Here we have some other Business!!</h2>
        <Link to={'company'}>Company</Link> <br /> 
        <Link to={'channel'}>Channel</Link> <br />
        <Link to={'other'}>Other</Link> <br />
        <Outlet />
        </div> 
    )
}   

export default ContactUS;
