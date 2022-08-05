import React from 'react'

function App16(){

const Users = [

{name: 'Anil',
 email: 'anil@gmail.com',
 address: [
     {
         Hn: '10',
         City:'Jaipur',
         Country: 'India',
     },
     {
        Hn: '1',
        City:'Dehradun',
        Country: 'India',
    },
    {
        Hn: '101',
        City:'Delhi',
        Country: 'India',
    },
    {
        Hn: '104',
        City:'Morisis',
        Country: 'Malisiya',
    }


 ]
},
{
 name: 'San',
 email: 'san@gmail.com',
 address: [
    {
        Hn: '10',
        City:'Jaipur',
        Country: 'India',
    },
    {
       Hn: '1',
       City:'Dehradun',
       Country: 'India',
   },
   {
       Hn: '101',
       City:'Delhi',
       Country: 'India',
   },
   {
       Hn: '104',
       City:'Morisis',
       Country: 'Malisiya',
   }


]   
},

{
 name:'Raaju',
 email: 'raaju@gmail.com',
 address: [
    {
        Hn: '10',
        City:'Jaipur',
        Country: 'India',
    },
    {
       Hn: '191',
       City:'Dehradun',
       Country: 'India',
   },
   {
       Hn: '101',
       City:'Delhi',
       Country: 'India',
   },
   {
       Hn: '104',
       City:'Morisis',
       Country: 'Malisiya',
   }


]   
},

{
 name: 'Sanju',
 email: 'sanju@gmail.com',
 address: [
    {
        Hn: '10',
        City:'Jaipur',
        Country: 'India',
    },
    {
       Hn: '1',
       City:'Dehradun',
       Country: 'India',
   },
   {
       Hn: '101',
       City:'Delhi',
       Country: 'India',
   },
   {
       Hn: '104',
       City:'Morisis',
       Country: 'Malisiya',
   }


]
}

]

return (

<div className="m-5">

<h1>Handle Array with Bootstrap List!!</h1>
<table className="table table-striped table-hover table-dark">
<tbody>

<tr>
    <td>Name</td>
    <td>Email</td>
    <td>Address</td>
</tr>

{
 Users.map((item)=>
 
 <tr>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>
    <table className="table table-striped table-hover table-dark">

   
        
        <tbody>{
            
            item.address.map((data)=>
            
        <tr>
        <td>{data.City}</td>
        <td>{data.Hn}</td>
       </tr>
            
            )
            
            }
        </tbody>   

            
    

</table>

</td>

</tr>

 
 )

 
}


</tbody>

</table>


</div>
)

}

export default App16;