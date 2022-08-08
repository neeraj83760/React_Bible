import React,{useState, useMemo} from 'react'

function App20(){

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multiCountMemo = useMemo(function multiCount(){
    
        console.warn('multiCount')    
        return count*5;

    },[count])// jab count update hoga tabhi function run karna ...unesscary function 
    // ko run nahi la

   // multiCount function Update Item ki button clicking pe bhi call hota rahega even uska 
   // kuch kaam hai bhi nahi ..uska link sirf Update Counter se hai kyonki multiCount function me
   // hum sirf count variable ko hi return kar rahe hai function se. 
   // function ka baar baar run karna performance ko impact karta hai
   // Agar hum useMemo hook use karle to component ko samjayega ki update kab hona hai


    // function multiCount(){
    
    // console.warn('multiCount')    
    // return count*5;
    // }

    return(

        <div className="m-5">
        <h1>useMemo Hook in React!</h1>
        <h2>The value of Counter is : {count}</h2>
        <h2>The value of Item is : {item}</h2>
        {/* <h2>{multiCount()} </h2>    */}
        <h2>{multiCountMemo}</h2>
        <button className='btn btn-primary m-1' onClick={()=>setCount(count +1)}>Update Counter</button>
        <button className='btn btn-primary' onClick={()=>setItem(item * 10)}>Update Item</button>

        </div>
    )


}

export default App20;