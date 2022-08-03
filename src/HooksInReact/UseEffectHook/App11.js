import React,{useEffect, useState} from 'react'; 

// Using useEffect hook without Condition

function App11() {

    const [count, setCount] = useState(0);

    // Jaise hi component banega useEffect utni baar hi call hoga like componentDidMount
    // work karta hai class component me.

    // Counter ke har Increment pe useEffect method call ho raha hai similar like componentDidMount
    // ki tarah 
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

export default App11; 