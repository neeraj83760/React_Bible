import React from 'react'

function App14(){
// const Students = ['Anil','Raaju','Sanju','Manoj']

const Students = [

{name: 'Anil',
 email: 'anil@gmail.com',
},
{
 name: 'San',
 email: 'san@gmail.com',   
},

{
 name:'Raaju',
 email: 'raaju@gmail.com',   
},

{
 name: 'Sanju',
 email: 'sanju@gmail.com',
}

]

// Map function bhi looping ke liye use hota hai 

// Students.map((item)=>{`

//     console.warn('My Name is '+ item)

// })

// for(let i=0; i<Students.length; i++){

//     console.warn('In for loop My Name is '+ Students[i])
// }

// In console both for loop and map function are giving the same result
// means both loops will print all the names present in the Students array
// But the key point is in return statement only map function works within the
// return statement of the function 

return (

<div className="m-5">

<h1>Handle Array with List!!</h1>

<table className="table table-dark table-striped table-bordered">
    
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email Address</th>
        </tr>
      </thead>
      {
        Students.map((data)=> 
        
           <tr> 
               <td><h1>{data.name}</h1></td>
               <td><h1>{data.email}</h1></td>
           </tr>
    
        )
    
    
    
    }
</table>

{/* for(let i=0; i<Students.length; i++){

<h1>{Students[i]}</h1> */} 
{/* The above given for loop not gonna work inside the return statement of the
functional component 
*/}


</div>
)

}

export default App14;