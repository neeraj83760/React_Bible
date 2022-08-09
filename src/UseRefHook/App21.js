import React,{useRef} from 'react';

function App21(){
   let inputRef = useRef(null);
   
   function handleInput(){

    console.warn('function called!!')
    // inputRef.current.value = '1000';
    // inputRef.current.focus();
    inputRef.current.style.color = 'gold'
   }

    return(
        <div className="container m-2">
        <h1>useRef Hook!!</h1>
        {/* Jiska bhi aap DOM manupulate karna chate ho wo ref={} is tarah se likh to element me*/}
        <input type="text" ref={inputRef}/>
        <button className='btn btn-primary m-5' onClick={handleInput} >Click Button!!</button>
        </div>
    )
}

export default App21;
