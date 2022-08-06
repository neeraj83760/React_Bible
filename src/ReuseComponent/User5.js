import React from 'react';

function User5(props){

    return(
        <div className="">
       <table className='table table-striped table-dark' style={{border: '5px solid gold'}}>
       
          <tbody>
               <tr>
                    <td><h1>{props.data.name}</h1></td>
                    <td><h1>{props.data.email}</h1></td>
               </tr>
          </tbody>
       </table>
        </div>
    )

}

export default User5;