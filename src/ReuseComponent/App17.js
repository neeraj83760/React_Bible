import React from "react";
import User5 from "./User5";

function App17() {

const Users = [

    {name: 'Anil',
     email: 'anil@gmail.com',
    },
    {
     name: 'San',
     email: 'san@gmail.com',   
    },
    
    {
     name:'Raaju',
     email: 'raaju@gmail.com',   
    },
    
    {
     name: 'Sanju',
     email: 'sanju@gmail.com',
    }
    
    ]


    return(

        <div className="m-5">
        <h1>Reuse Component with List</h1>
        
        {
         Users.map((item,i)=>

            <h1 key={i}>
             <User5 data={item}/>
            </h1>
         )
        }
        </div>
    )

}

export default App17; 