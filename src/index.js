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
import App3 from './/LifeCycleMethods/App3'
import App4 from './/RenderLifeCycleinReact/App4'
import App5 from './/ComponentDidMount/App5'
import App6 from './/ComponentDidUpdate/App6'
import App7 from './/ComponentDidUpdate/App7'

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
  {/* <App2 /> */}
  {/* <App3 /> */}

  {/* <App4 /> */}
  {/* <App5/>  */}
  {/* <App6 /> */}
  <App7 />
 </React.StrictMode>
);

