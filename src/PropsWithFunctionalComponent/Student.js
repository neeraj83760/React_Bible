import { useState } from "react"


function Student(props){

    console.log(props)

    const [name, setName] = useState('Sanjay')
return(

    <div style={{margin : '10px'}}>
    <h1> Hi {props.name}! and {name}  Student Component!!</h1>
    <h2> The Address is {props.address}</h2>
    <button className="btn btn-primary" onClick={()=>{setName('Raaju')}}>Update Name</button>
    </div>
       
       )

}

export default Student;

