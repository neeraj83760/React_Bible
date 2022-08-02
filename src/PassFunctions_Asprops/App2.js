import React from 'react';
import User from './User';
import Member from './Member';

function App2(){

    function getData(){

        alert("hello from World!");
    }

  return(

    <div className="App">

        <User data={getData}/> 
        <div>
            <Member data={getData}/>
        </div>
    </div>
  )
}

export default App2; 