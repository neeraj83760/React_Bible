import react,{useState} from 'react';

// KeyNote : Saare ke saare lifecycle methods ek hi hook (useEffect) ke andar aa jaate hain

function App10(){
const [data, setData] = useState('Johnny')

function updateData(){

    setData('Rahul');
    console.warn(setData)
}
    return(

        <div className="m-5">
       
        <h1>Hello {data} from App10 Component!!</h1>
        <button className='btn btn-primary' onClick={updateData}>Update the Name</button>

        </div>
    
    )

}


export default App10;