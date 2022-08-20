import React from 'react';
import {useEffect,useRef} from 'react';  

function User37(props){
    // useRef last waali value ko uthayega DOM se .. to current value update
    // hone se pehle hi ye useEffect chal jaayega aur ye apni last value ko store
    // kar lega aur baad me count ke andar new value aayegi 

    const lastVal = useRef();
    
    useEffect(()=>{
       // current useEffect ki predefined property
        lastVal.current = props.count;
    })
    
    const previousProps = lastVal.current
    return(
        <div className="">
         <h1>Current Val  :   {props.count}</h1>
         <h2>Previous Val : {previousProps}</h2>   
        </div>
    )
}

export default User37;

