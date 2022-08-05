import React from 'react'

// Lecture name: List with bootstrap in reactJS 
// Resolving qnique Key error

// VVVVVVIMP Interview question: Each child in the list should have a unique key props : Ye error jo console
// me aa rahi thi wo hum below mentioned program me fix karenege ...key daalkar
// map function me 

// Key humien islye chahiye hoti hai kyonki jab bhi hum list of elements lete hai to 
// humien har element ke lye ek key chahiye hoti taaki react ka virtual DOM list of
// elements ko easily identify kar le 

function App15(){

const Users = [

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

return (

<div className="m-5">

<h1>Handle Array with Bootstrap List!!</h1>

<table className="table table-dark table-striped table-bordered">
    
        <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email Address</th>
        </tr>
      </thead>
      <tbody>
          {
          // Ab aapne key i daaldya now u will not get this error console : Each child in the list should have a unique key props 
            Users.map((data,i)=> 
         // Map me hum specific data bhi show kar sakte hai table me condition lagake    
                data.name === 'Anil'?
                   <tr key={i}> 
                       <td><h1>{data.name}</h1></td>
                       <td><h1>{data.email}</h1></td>
                   </tr> : null
            
        
            )
          }
      </tbody>
            
</table>
</div>
)

}

export default App15;