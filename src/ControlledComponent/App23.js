import React, { useState} from 'react';

function App23(){
    let [val, setVal] = useState('')
    let [item, setItem] = useState('')

    return(
        <div className="m-5">
        <h1>Controlled Component!! </h1>
         {/* You will not be able to change the value attribute from Input element because
         100 dalkar aapne value fix kar di hai and yahi value humein handle karni hoti hai
         state ke throug.. agar hum value attribute na de to hum inputbox element me 
         kuch bhi value enter kar sakte hai 
         */}
        <input type="text" className="m-3" value={val} onChange={(e)=>{setVal(e.target.value)}}/>

        <input type="text" value={item} onChange={(e)=>{setItem(e.target.value)}}/>

        <h3>{val}</h3> 

        </div>
    )

}

export default App23;

