import React,{useEffect, useState} from 'react';

function App33(){
 let [data, setData] = useState([]); 

 // fetch API ka code humesha useEffect me use kiya karo ..hum directly API call nahi karte
 // Reactjs me .isse hum useEffect me call karte hai .. class component me ComponentDidMOunt
 // ke andar use karte hai    

 useEffect(()=>{
     
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
 
    result.json().then((response)=>{

    // console.log(response)
    setData(response);
 })
 
 })


 },[])

 console.warn('Inside Console', data)
    return(
        <div className="m-5">
        <h1>Get API Call!!</h1>
        <table className="table table-striped table-bordered">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
        </tr>
        <tbody>
            {
                data.map((item)=>
                 
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
            </tr>
    
    
                )
            }
        </tbody>
        </table>    
        </div>
    )
}

export default App33;