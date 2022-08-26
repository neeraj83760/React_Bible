import {useNavigate, useLocation} from 'react-router-dom' 

function Home(){
    const navigate = useNavigate()
    const location = useLocation()

    console.warn(location)
    // Jab bhi aap ek route se dusre route pr jaate ho to ek unique key Generate hoti hai
    // us route ki .. pehle hash, state, search ye sab khaaali milenge jab aap console.warn(location)
    // statement se check karoge console me ... but jaise hi aap queryParams daaloge URL me for example
    // http://localhost:3000/filter?price=10  to search me '?age=10' ye show hoga 

    // Keypoint: useLocation hook me dekhe to hash bhi route ka type hota hai for example: http://localhost:3000/#10 
    // to search me '#10' ye show hoga 

    const navToPage =()=> {
   
       navigate('/about'); // this will navigate to about us page on button clicking so how
       // we can navigate page on particular condition 
       let x = true;
       if(x){

        navigate('/about');

       }else{

        navigate('/filter');
       }
    }
    return(

        <div>
        <h1>This is Home Page !!</h1> 
           {/* Yaha pe hum button ki clicking par routing kar rahe hai useNavigate hook ki help se
            hum conditional routing bhi kar sakte hai by taking invoking user defined function
           */}
        {/* <button onClick={()=> navigate('/about')} className="btn btn-primary"> Go to about Page !!</button> <br /> <br />
        <button onClick={()=> navigate('/filter')} className="btn btn-warning"> Go to Filter Page !!</button> */}

<button onClick={()=> navToPage()} className="btn btn-primary"> Go to about Page !!</button> <br /> <br />
<button onClick={()=> navToPage()} className="btn btn-warning"> Go to Filter Page !!</button>
        </div>
    )  
}

export default Home;