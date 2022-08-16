import React from 'react'; 
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom'


function App26(){

    return(
        <div>
            {/* <h2>Router Component!!</h2> */} 
            <Router>
            <Link to="/home">Home Page</Link><br />
            <Link to="/about">About Us</Link>
                <Routes>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="about" element={<AboutUs />}></Route>
                </Routes>
            </Router>
        </div>  
    )

}

function Home(){

    return(

        <div className="">
        <h1>Home Page!!</h1>
        <p>This is Home Page of a Website !!</p>
        </div>
    )
}

function AboutUs(){

    return(

        <div className="">
        <h1>AboutUs Page!!</h1>
        <p>This is About Us Page of a Website !!</p>
        </div>
    )
}

export default App26;