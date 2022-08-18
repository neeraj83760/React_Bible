import React,{useState} from "react";

function App31(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")

    function saveUser() {

        console.warn(name,email,mobile);
        let data = {name,email,mobile};   
        fetch('https://jsonplaceholder.typicode.com/posts',{
          
        method: 'POST',
        headers: { 'Accept': 'application/json',
                    'Content-Type': 'application/json'    
    },
      body:JSON.stringify(data)
        }).then((result)=> {
        // console.log('result',result)
        result.json().then((res)=>{
        
            console.warn('res',res)

        })
        })
  
    }

    return(

        <div className="m-5">
        <h1>POST API Example!!</h1>
        <input type="text" value= {name}  name="name" onChange={(e)=>{setName(e.target.value)}}/><br /><br />
        <input type="text" value= {email} name="email" onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
        <input type="text" value= {mobile}name="mobile" onChange={(e)=>{setMobile(e.target.value)}} /><br /><br />
        <button className="btn btn-primary" onClick={saveUser}>Save New User!</button>  
        </div>
    )
}

export default App31; 
