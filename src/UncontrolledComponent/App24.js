import React,{useRef} from 'react';

function App24(){

   // submitForm function will stop the reloading of the form when we will click on the 
   // submit button , also as per the feature of reactjs it creates a single page application
   // so reloading is not allowed
   
   let inputRef= useRef(null)
   let inputRef2= useRef(null)

// In Submit form function we are manupulating DOM directly using useRef and getElementById because
// it's an UnControlled event 
   function submitForm(e){

    e.preventDefault();
    console.warn('input Field 1', inputRef.current.value);
    console.warn('input Field 2', inputRef2.current.value);

    let input3= document.getElementById('input').value;
    console.warn('input Field 3', input3);

    }
  

    return(
        <>

        <h1 className='m-1'>UnControlled Component!! </h1>

        <form onSubmit={submitForm}>
            <input ref={inputRef} type="text" className='m-1'/><br/>
            <input ref={inputRef2} type="text" className='m-1'/><br/>
            <input id='input' type="text" className='m-1'/><br/>
            <button className='btn btn-primary m-1'>Submit</button>
        </form>
        </>
    )

}

export default App24;

