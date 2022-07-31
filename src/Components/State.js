import {useState} from 'react'

// VVVIMP Point : we cant use state outside the component
// Also, State public hoti hai naa ki private. 

function State() {

// Jaise hi state update hoga poora State function re-render hoga    
// const [data, setData] = useState('Anil');

const [data, setData] = useState(0)

function onUpdate(){

    // setData('Rahul')
    setData(data +1)
}

console.warn("-------------")

return (
<div className=".container-md pl-5" style={{padding: '50' , margin: '50px'}}>
<h1>{data}</h1>
<button className='btn btn-primary' onClick={onUpdate}>Change the Name</button>
</div>
       )

}


export default State; 
