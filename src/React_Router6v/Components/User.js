import { useParams , useLocation } from "react-router-dom";
// how to pass parameters in routing : the answer is using useParams hooks 
function User(){
const params = useParams();
const { name } = params;


const location = useLocation()
console.warn(location)
// Maan lo agar aapko ek route se dusre route ki upar aapko data send karna hai 
// console.warn(name);
    return(
    <div>
       <h1>
       This is {name}'s Page!!
       </h1>    
    </div>    
    )
}

export default User;
