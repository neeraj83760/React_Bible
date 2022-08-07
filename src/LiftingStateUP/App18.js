import React from "react";
import Child from "./Child";

function App18(){

    function parentAlert(data){
    
        alert(data)

    }
   
    // let data = 'Neeraj Ghildiyal'
    return(
         <div className="m-5">
              <h1>Lifting Up State!</h1>
              {/* <Child name= {data}/>  */}

              <Child alert={parentAlert}/> 
              
         </div>  
          )

}

export default App18;