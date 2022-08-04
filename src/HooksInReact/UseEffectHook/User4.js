import React,{useEffect, useState} from 'react'; 

function User4(props) {

    useEffect(()=>{
    
        console.warn('useEffect count is'+ props.count)

    },[props.count])

    return(

        <div className="m-5">
         {/* <h1>This is a App12 Component using useEffect Hook!</h1> */}
         <h2>The count Props: {props.count}</h2>
         <h2>The Data Props: {props.data}</h2> 
        </div>
    )
}

export default User4; 