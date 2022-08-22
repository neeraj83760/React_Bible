import {useState} from 'react'   

function Input(){

const [data, setData] = useState(null)
const [print, setPrint] = useState(false)

function getData(val){

// console.log(val.target.value);
setData(val.target.value);
setPrint(false);
}    

return(
    <div className='m-5'>
    <h1>Get Input box value</h1>
    {/* <h3>{data}</h3> */}
    {
      print?
      <h1> {data}</h1>
      :null
    }
    {/* OnChange ka matlab jaise jaise hum input box me value input karte rahe waise waise
        wo humien milti rahe 
    */}
    <input className='form-control' style={{width:'50%'}} type={"text"} onChange={getData}/><br /><br />
    <button className='btn btn-primary' onClick={()=> setPrint(true)}>Print Value</button>
    </div>
)

}

export default Input;