import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import User from './Components/User';
import Filter from './Components/Filter';
import ContactUS from './Nested_Routing/ContactUS';
import Company from './Nested_Routing/Company';
import Channel from './Nested_Routing/Channel';
import Other from './Nested_Routing/Other';
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute';

// Always remember reactJs ke bhi apne hooks hote hai and 
// jo package humne use kiya hai : react-router-dom  iske bhi apne inbuilt hook hote hai like
// Routes, Link, Nevigate .... ye react ke hooks nahi hai ye react-router-dom package ke hooks hai

function App40(){

    return (
    <div className='m-5'>
    <BrowserRouter>
    {/* <h1>React Router 6v !!</h1> */}
    {/* <Link to='/about'>About</Link><br />
    <Link to='/home'>Home</Link> */}
    <Navbar /> 
   <Routes>
        {/* <Route path='/home' element={<h1>Home Page is this !!</h1>} /> */}
        {/* <Route path='/' element={<Home />} /> */}


        <Route path='/' element={<ProtectedRoute Component={Home} />} />
  
       
     
        <Route path='/about' element={<ProtectedRoute Component={About} />} />
        
        {/* '/*' is path equal to astrick ka matlab agar upar ka koi URL match nahi ho raha 
         to message show karega : 404 Error!! ... means 
        */}
        {/* <Route path='/*' element={<h1>404 Error!!</h1>} /> */}
        {/* Contact waale link pe bhi click karoge to Navigate aapko re-route kar dega
        home page pe ... kyonki contact page exist hi nahi karta 
        */}
        <Route path='/user/:name' element={<User/>}/>
        <Route path='/filter' element={<Filter />} />

        {/* <Route path='/*' element={<Navigate to={'/'}/>}/> */}

        <Route path='/contact/' element={<ContactUS />}>
        
        <Route path= "company"  element={<Company />} />

        <Route path="channel" element={<Channel />} />
        
        <Route path="other" element={<Other />} /> 


        </Route>

        <Route path='/login' element={<Login />} />
        
         
   </Routes>
    </BrowserRouter>
    </div>
    )

}

export default App40;