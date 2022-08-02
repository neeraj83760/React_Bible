import React from "react";
import User2 from "./User2";
import {useState} from 'react';

function App4() {
const [name, setName] = useState('Raaju');

    return(

        <div className="">
        
        <User2 name={name}/> 
        <button onClick={()=>setName('Chacha')}>Update Name</button>  
        </div>
    )
}

export default App4; 