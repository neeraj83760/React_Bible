import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { useState } from 'react';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
// import State from './Components/State';
import StateUsingClass from './Components/StateUsingClass';
import Student from './PropsWithFunctionalComponent/Student';
import Student1 from './PropswithClassComponent/Student1';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  {/* <App /> */}
  {/* <State /> */}
  <StateUsingClass />
  <Student name ='Neeraj'/>
  <Student name ='Ram' address='DLF Phase 3'/>
  <Student1 name='DON'email = 'sonu@gmail.com'/>

  </React.StrictMode>
);


