import React from "react"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import User29 from "./User29"

function App29(){
//    Maan lo kal humare pass 20 or 50 users ho jaaye to static routing to possible
//    hi nahi hai dynamic routing hi use karni padegi 
    let users = [
        {id:1 , name:'Neeraj', email:'neeraj@gmail.com'},
        {id:2 , name:'Sanju', email:'Sanju@gmail.com'},
        {id:3 , name:'Rahul', email:'Rahul@gmail.com'},
        {id:4 , name:'Suraj', email:'Suraj@gmail.com'},
        {id:5 , name:'Anil', email:'Anil@gmail.com'}
               ]
 
    return(
        <div className="m-5">
        <Router>
            <h1>Dynamic Routing!!</h1>
            {
    
            users.map((item)=> 
            
            <div className="">
            <Link to={'/users/'+ item.id}><h6>{item.name}</h6></Link>          
            </div>) 
            }
        <Route path='/user/:id'><User29 /></Route>    
        </Router>
        </div>
          )

}

export default App29; 