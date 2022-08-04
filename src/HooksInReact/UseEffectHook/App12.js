import React,{useEffect, useState} from 'react';
import User4 from './User4';
import User from './User4' 

// Lecture name : useEffect  with state and props in react js
function App12() {
    const [data, setData] = useState(10) 
    const [count, setCount] = useState(0);
    // useEffect dono button jo banaye gaye hai dono pe call hoga 
    // because ye componentDidMount ke jaise work karta hai but if
   // hum chate hai ki wo ek hi button ki clicking pe chale tab hum
   // kya karenge... humein sirf parameter me pass karna hoga 'data' 
   
   // Jaise hum data argument me pass karnenge to 
   // useeffect ussi ke liye chalega
   // hum argument me props bhi pass kar sakete hai ... like props.data
   // so usi hisaab se useEffect hook chalega

    // useEffect(()=>{
    
    //     // console.warn('UseEffect Hook Called!!')
    //     console.warn('Called with Data state!!')

    // },[data])

    // useEffect(()=>{
    
    //     // console.warn('UseEffect Hook Called!!')
    //     console.warn('Called with Count state!!')

    // },[count])
    return(

        <div className="m-5">
         {/* <h1>This is a App12 Component using useEffect Hook!</h1> */}
         {/* <h2>The counter Value is {count}</h2>
         <h2>The Data is {data}</h2> */}
         <User4 count={count} data={data} />
         <button className='btn btn-primary' onClick={()=> setCount(count +1)}>Update Counter</button>
         <button className='btn btn-primary m-2' onClick={()=> setData(data +1)}>Data Counter</button>

        </div>
    )
}

export default App12; 