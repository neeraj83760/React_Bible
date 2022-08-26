import {NavLink} from 'react-router-dom'
import '../Components/App100.css'

function Navbar(){

    return(
        <div className=''>
            {/* Kya diffrence aayega agar hum link ki jagah anchor tag use kar lenge to 
            kyonki wo bhi Link tag ki tarah hi work karte hai 
            */}

            {/* Maan lo ki DO ya usse jayeda user hai Anil and peter and etc then what you will do
            to kya hum har user ke liye alag alag page banayenge ... agar 1000 users hai
            to 1000 page banayenge ... doesnt make sense right? ...here 'params' in router6v comes
            to rescue .... to hum aise data pass karenege link me : '/User/Anil','/User/Peter'
            */}
        <ul className='navb'>
            {/* Link tag me hum className nahi dete kyonki ye rule ko aviod 
            karta hai aur humien application me warning bhi aa sakti hai 
            agar humien className use karna hai to humein Link ki jagah NavLink lena hoga 
            */}

            {/* React Router6v ne ek 'active' class ka feature diya hua hai 
            jisse aap devtools me jaake check kar sakete ho
            Ye active class har link jo humne neeche banye hai unpe hover
            karne se show hoti hai under the elements tab in the chrome delvloper tools  
            */}
            <li><NavLink className='navbarlink' to='/about'>About</NavLink></li>
            <li><NavLink className='navbarlink' to='/'>Home</NavLink></li>
            <li><NavLink className='navbarlink' to='/user/anil'>Anil</NavLink></li>
            <li><NavLink className='navbarlink' to='/user/peter'>Peter</NavLink></li>
            <li><NavLink className='navbarlink' to='/contact'>Contact</NavLink></li>
            <li><NavLink className='navbarlink' to='/filter'>Filter</NavLink></li>

        </ul>
        </div>
    )
}

export default Navbar;