import React,{useEffect, useState} from 'react';


// Maan lo humare pass bahut saare users hai API me but humein pata kaise chalega ki humien
// update ke button ki click pe user kounsa update karna hai
// update ki click ke saath humein ek ID bhi chahiye state ke andar taaki hum state
// se pata kar sake ki kounsi waali ID hai ..uske liye humien ID define karni padegi  const [userID, setUserID] = useState("");  

function App35(){
 const [users, setUsers] = useState([]);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [username, setUsername] = useState("");
 const [userId, setUserId] = useState(null);  

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
        setUserId(response[0].id)

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
  setUserId(users[id-1].id)
 }

 function updateUser(){

    // console.warn(name, username,email, userId) 
     
    let item = {name, username,email, userId} 
    
    fetch(`http://localhost:3000/users/${userId}`, 
    
    {method:'PUT',
    headers:{

        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)

 }).then((result)=>{

    result.json().then((response)=>{
    
        console.warn(response)
        getList();
    }) 
 })

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
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br /><br /> 
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} /><br /><br /> 
            <input type="text" value={email}   onChange={(e)=>setEmail(e.target.value)} /><br /><br /> 
            <button className="btn btn-warning" onClick={updateUser}>Update Items</button> 
            </div>    
            </div>
       </>
        
    )
}

export default App35;