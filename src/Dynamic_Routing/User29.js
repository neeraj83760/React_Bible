import React from 'react';
import {useParams} from 'react-router-dom' 


function User29(props){
const params = useParams();
const {name} = params;  
console.warn(name)    
return( <div>
            <h1>
            User Component!!
            </h1>
        </div>
      )
}

export default User29;