import React from "react";
import {useState} from 'react';

function App1(){
const [status,setStatus] = useState(false)
    return(

        <div className="App1">
            {/* neeeche ke curly braces me hum ye 
            check kar rahe hai ki status true hai ya nahi 
            */}
            {
            status? <h1>Hello Text!!!</h1>:null  
 
            }
        {/* <h1>Hello Text!!!</h1> */}
        {/* <button onClick={()=>{setStatus(true)}}>Show Text</button>
        <button onClick={()=>{setStatus(false)}}>Hide Text</button> */}

        <button onClick={()=>{setStatus(!status)}}>Toggle</button>
        </div>
    )
}

export default App1; 