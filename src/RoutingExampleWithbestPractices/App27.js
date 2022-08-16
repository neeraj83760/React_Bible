import React from 'react'; 
import { Route, Routes} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home';
import AboutUs from './AboutUs';

function App27(){

    return(
        <div className='m-5'>
            {/* <h2>Router Component!!</h2> */} 
            <Nav /> 
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="about" element={<AboutUs />}></Route>
                </Routes>
            {/* </Router> */}
        </div>  
    )

}

export default App27;