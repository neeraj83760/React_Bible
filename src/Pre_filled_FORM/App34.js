import React,{useEffect, useState} from 'react';

function App34(){
 const [users, setUsers] = useState([]);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [username, setUsername] = useState("");
  


 useEffect(()=>{
     
   getList();


 },[])

//  console.warn('Inside Console', data)


 function getList(){

    fetch("http://localhost:3000/users").then((result)=>{
 
        result.json().then((response)=>{
    
        // console.log(response)    
        setUsers(response);
        setName(response[0].name);
        setUsername(response[0].username);
        setEmail(response[0].email);

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

 function selectUser(id){
// users[id] ek next ka data deta hai because array me Indexing 0 se start hoti hai
// isliye humien -1 karna padega ID se 
//   console.log(users[id-1])
  setName(users[id-1].name);
  setUsername(users[id-1].username);
  setEmail(users[id-1].email);
 }
    return(
       <>
            <h1 className='m-5'>Prefilled FORM!!</h1>
            <div className="m-5 d-flex justify-content-end">
            
            <table className="table table-striped table-bordered">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>Delete Record</td>
                <td>Update Record</td>
            </tr>
            <tbody>
                {
                    users.map((item,i)=>
                     
                <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td><button class="btn btn-primary" onClick={()=>deleteUser(item.id)}>Delete</button></td>
                    <td><button class="btn btn-success" onClick={()=>selectUser(item.id)}>Update </button></td>

                </tr>
        
        
                    )
                }
            </tbody>
            </table>
            <div className="m-5">
            <input type="text" value={name}/><br /><br /> 
            <input type="text" value={username}/><br /><br /> 
            <input type="text" value={email}/><br /><br /> 
            <button className="btn btn-dark">Update Items</button> 
            </div>    
            </div>
       </>
        
    )
}

export default App34;