import React,{useEffect, useState} from 'react';

function App32(){
 let [data, setData] = useState([]); 

 // fetch API ka code humesha useEffect me use kiya karo ..hum directly API call nahi karte
 // Reactjs me .isse hum useEffect me call karte hai .. class component me ComponentDidMOunt
 // ke andar use karte hai    

 useEffect(()=>{
     
   getList();


 },[])

 console.warn('Inside Console', data)


 function getList(){

    fetch("http://localhost:3000/users").then((result)=>{
 
        result.json().then((response)=>{
    
        // console.log(response)    
        setData(response);
     })
     
     })
 }

 function deleteUser(id){

    // alert(id)
    fetch(`http://localhost:3000/users/${id}`, 
    
    {method:'DELETE'
 }).then((result)=>{

    result.json().then((response)=>{
    
        console.warn(response)
        getList();
    }) 
 })
 }
    return(
        <div className="m-5">
        <h1>Delete Items got through API Call!!</h1>
        <table className="table table-striped table-bordered">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Delete Record</td>
        </tr>
        <tbody>
            {
                data.map((item,i)=>
                 
            <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><button class="btn btn-primary" onClick={()=>deleteUser(item.id)}>Delete</button></td>
            </tr>
    
    
                )
            }
        </tbody>
        </table>    
        </div>
    )
}

export default App32;