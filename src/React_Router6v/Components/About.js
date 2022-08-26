import {Link} from 'react-router-dom'

function About(){

    return(

        <div>
        <h1>This is About Us Page!!</h1>
        {/* As per lecture 10 which is on useLcation hooks hum url me hash, search jaise
         attributes to pass kar sakete hai but if the data is big, or if it's a 'state' we can't pass
         it in URL so in that case in the Link element we have to pass state value which is an 
         Object  
        */}
        <Link to="/user/anil" state={{name:'Sanju', age:27 }}>Anil</Link>    
        </div>
    ) 
}


export default About;