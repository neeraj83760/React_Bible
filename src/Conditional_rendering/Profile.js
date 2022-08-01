import {useState} from "react";

function Profile(){
    
    const [loggedIn, setLoggedIn] = useState(false); // false matlab wo banda
    // loggedIn nahi hai aur true kar denge to Hello Anil aayega output me
        
   
        return(

            <div className="">
                {loggedIn?<h1>Hello Anil!!</h1> : <h1>Hello Guest!</h1> }
            </div>
             )    
}

export default Profile;