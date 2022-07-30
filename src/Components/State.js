import {useState} from 'react'

function State() {

// Jaise hi state update hoga poora State function re-render hoga    

const [data, setData] = useState('Anil');

function onUpdate(){

    setData('Rahul')
}

console.warn("-------------")

return(
<div className=".container-md pl-5" style={{padding: '50' , margin: '50px'}}>
<h1>{data}</h1>
<button className='btn btn-primary' onClick={onUpdate}>Change the Name</button>
</div>

)

}


export default State; 
