import {useSearchParams } from 'react-router-dom'

function Filter(){

    // setSearchParams : Iska use searchParams ke vice versa hota hai 
    // jaise searchParams me url ki values and data ko web page pe display karte hain waise hi
    // setSearchParams me web page ki values and data ko url me add kate hai 

    const [searchParams , setSearchParams] = useSearchParams();
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const Age = searchParams.get('age');
    const city = searchParams.get('city');
    return(
        <div className="">
        <h1>This is Filter Component!! : The Age is : {Age} and the City is : {city}</h1>
        <input type='text' placeholder='Set Text in Query Params' onChange={(e)=> setSearchParams({text: e.target.value, age:12})} /> <br /><br />
        <button className='btn btn-danger'onClick={()=> setSearchParams({age:27})}>Set Age in Query Params</button>
        </div> 
    )
}

export default Filter;
