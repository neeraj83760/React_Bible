import React,{useEffect, useState} from 'react'; 

function App12() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
    
        console.warn('UseEffect Hook')

    })
    return(

        <div className="m-5">
         <h1>This is a App11 Component using useEffect Hook!</h1>
         <h2>The counter Value is {count}</h2>
         <button className='btn btn-primary' onClick={()=> setCount(count +1)}>Update Counter</button>
        </div>
    )
}

export default App12; 