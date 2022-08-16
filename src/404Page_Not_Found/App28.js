import React from 'react'
import {BrowserRouter as Router, Link,Route, Routes} from 'react-router-dom'

function App28()
{
   return(
    
    <div className='m-5'>
    <Router>
    <Link to="/">Home Page</Link><br/>
    <Link to="/about">AboutUs</Link><br/>
    <Link to="/User">User Page</Link>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        {/* '*' this path will tell if not route is allll0 */}
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </Router>
   </div>

   )
}

function Home(){

  return(
   <div>
   <h1>Home Page!!</h1>
   </div>

  )
}

function AboutUs(){

  return(
  <div>
  <h1>About Us Page!!</h1>
  </div> 
   
  )  

}


function PageNotFound(){

    return(
    <div>
    <h1>This Page Does Not Exist!!</h1>
    </div> 
     
    )  
  
  }

export default App28; 