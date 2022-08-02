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
import Input from './GetInputBoxValue/Input';
import App1 from './HideandShowElement/App1';
import Form from './Basic_Form/Form'
import Rendering from './Conditional_rendering/Rendering'
import App2 from './/PassFunctions_Asprops/App2'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
  {/* <App /> */}
  {/* <State /> */}
  {/* <StateUsingClass />
  <Student name ='Neeraj'/>
  <Student name ='Ram' address='DLF Phase 3'/>
  <Student1 name='DON'email = 'sonu@gmail.com'/>
  <Input />
  <App1 /> */}
  {/* <Form /> */}
  {/* <Rendering /> */}
  <App2 />
 </React.StrictMode>
);

