import React , {useRef} from "react";
import Child22 from "./Child22";

function App22(){
    let inputRef = useRef(null);
    function updateInput()
    {
        inputRef.current.value='1000'
        // inputRef.current.style.color = 'gold'
    }
     return(
         <div className="container m-2">
         <h1>ForwardRef Hook!!</h1>
         {/* make sure ki aap ref property hi use karo kyonki yahi property use hoti hai */}
         <Child22 ref={inputRef}/>
         <button className="btn btn-primary mt-5" onClick={updateInput}>Update InputBox</button>
         </div>
     )
 }
 
 export default App22;
 