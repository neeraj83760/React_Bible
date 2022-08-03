import React from "react";
import Student1 from "./Student1";

class App9 extends React.Component {

constructor(){

    super()

    this.state = {

        show: true
    }
    
    // console.warn('This is App6 constructor')
        
}
 
render() {


    // console.warn("This is Render method!!")
    return (

        <div className="App m-5">
         {
            this.state.show ? <Student1 /> : <h1>Child Component Removed!</h1>
         }   
        {/* <h1>Component will Unmount!!</h1> */}
        {/* <Student1 /> */}
        <button className='btn btn-primary' onClick={()=>this.setState({show: !this.state.show})}>Toggle Child Component!</button>
        </div>
    )
}

}

export default App9; 