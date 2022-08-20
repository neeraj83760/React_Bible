import React,{useState} from 'react';
import User37 from './User37'  

function App37(){
const [count, setCount] = useState(0)

function updateCounter(){

    setCount(Math.floor(Math.random()*10) )

}
    return(
        <div className="m-5">
         {/* <h1>{count}</h1> */}
         <User37 count ={count}/>
         <button className="btn btn-danger" onClick={updateCounter}>Update Counter</button>  
        </div>
    )
}

export default App37;