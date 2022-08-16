import react,{useState} from 'react';

function App25(){

return(

    <div className='App m-5'>
     <h1>HOC Component!!</h1>
    <HOCRed cmp={Counter}/>
    <HOCGreen cmp={Counter}/>
    <HOCGold cmp={Counter}/>
    </div>
)

}
// higher order component wo component hota hai jo ek component as an Input le and return kare 
// ek component hi but us component me kuch add on karke jo as in input liya hai
// HOCRed as a wrapper kaam kar raha hai on the Counter Component pe

function HOCRed(props){

    return <h2 className='p-3' style={{backgroundColor:'red' , width:'180px', height:'100px'}}><props.cmp /></h2>
}

function HOCGreen(props){

    return <h2 className='p-3' style={{backgroundColor:'green' , width:'180px', height:'100px'}}><props.cmp /></h2>
}

function HOCGold(props){

    return <h2 className='p-3' style={{backgroundColor:'gold' , width:'180px', height:'100px'}}><props.cmp /></h2>
}

function Counter(){
const [count,setCount] = useState(0)

return <div>
       <h3>{count}</h3>
       <button className='btn btn-primary' onClick={()=> setCount(count + 1)}>Update</button>
       </div>
}

export default App25; 