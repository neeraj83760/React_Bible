import React,{useState} from 'react';

function App36(){
const [count, setCount] = useState(0)

function updateCounter(){
    // setCount(count +1);
    // math.random function random values dega: to ab hum chahte hai ki 
    // humein current value and previous value ka diffrence pata chale 
    // but problem ye hai ki hum previous value ko save karke rakh hi 
    // nahi sakte ... agar variable me bhi store karenge to state ke update
    // hone ke saath saath variable bhi update ho jaayega but ...react
    // ne khud se hi iska ek tareeka diya hua hai jo ki bahut hi pyara hai
    //solution diya hai .... setCount callback function bhi leta hai to 
    // we can also write 

    // let rand = Math.floor(Math.random()*10)
    
    // // setCount(rand);

    // setCount((prev)=>{

    // console.warn(prev)
    // if(prev < 5){
    // alert('Low value')
    // }
    // return rand;  
    // })


    // setCount(count + 5) 
    
    // Async function hone ki wajah se loop pehle hi 5 baar chal jaayega 
    // tab setCount function chalega ..aur button ki click pe one one value Incerment karega
    // Is problem ka solution hai callback function pass karna setCount me 
    for(let i = 0; i < 5; i++)
    {
        // setCount(count + 1) 
        setCount((prev)=> prev +1)

    }
    
}
    return(
        <div className="m-5">
        <h1>The Count value is: {count}</h1>
        <button className='btn btn-primary' onClick={updateCounter}>Click me to update Count!</button>   
        </div>
    )
}

export default App36;