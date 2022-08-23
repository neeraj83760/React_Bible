import {useState} from 'react'

function Form(){
const [name, setName] = useState('');
const [tnc,setTnc] = useState(false); // tnc is terms and conditions
const [interest, setInterest] = useState(''); 
function getFormData(e){

    console.warn(name,tnc,interest);
    // Ye function form ko submit hone se rokta hai 
    e.preventDefault();

}
return(

    <div className="App container">
    <h1>Handle form in React</h1>
    <form action="" onSubmit={getFormData}>
        <input type="text" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} /><br /><br />
        <select name="" id="">
          <option value="">Marvel</option>
          <option value="">DC COMIC</option>
          <option value="">CHAMPAK</option>
        </select> <br /><br />
        <input type="checkbox" id="" onChange={(e)=>setName(e.target.checked)} style={{margin:'5px'}}/>
        <span>Accept Terms and Condition</span>
        <br /><br />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
)

}

export default Form; 