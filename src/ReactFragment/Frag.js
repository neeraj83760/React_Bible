import React from 'react';
import Cols from './Cols';

function Frag(){

 return(

    <div className="m-5">
        <h1>React Fragment!!</h1>
        <table className="table table-striped table-hover table-dark">
        <tbody>    
        <tr>
            {/* TD ka elements humien Cols component me rakhe hai but 
            still humein ek error dikhegi browser console me regarding
            ki app <td> elements ko div tag ke andar directly nahi 
            rakh sakete ... but to fix this problem we can write td tags
            inside the <></> empty tags called react fragments 
            */}
            <Cols />
        </tr>    
        </tbody> 

        </table>
    </div>
 )   

}

export default Frag; 