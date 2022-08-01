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
    <>
    <h1>Get Input box value</h1>
    {/* <h3>{data}</h3> */}
    {
      print?
      <h1> {data}</h1>
      :null
    }
    <input type={"text"} onChange={getData}/>
    <button onClick={()=> setPrint(true)}>Print Value</button>
    </>
)

}

export default Input;