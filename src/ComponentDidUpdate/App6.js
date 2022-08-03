import React from "react";

class App6 extends React.Component {

constructor(){

    super()
    this.state = {

        // name: 'Sanju'
        counter: 0
    }

    console.warn('This is App6 constructor')
        
    
}

// componentDidUpdate state and props ke update hone ke baad hi chalega jo
// ki diffrent hai from componentDidMount ke compare me 
componentDidUpdate(preProps, preState, snapshot) {
     
    // preState matlab counter browser pe the updated value print karega
    // but console me value -1 hogi .... example : browser pe hai 1 to cosole pe
    // hoga 0 and so on and so forth 
    // Iska faayeda ye hota hai ki hum check karwa sakete hai jo phichli 
    // waali state and a waali state similar hai ki nahi
    // For example: Aap API se data get kar rahe ho aur previous Sate ki value
    // same hai to hum if condition ke andar usse check kar sakete hai 
    
    console.warn('ComponentDidUpdate', preState,preProps)

}

// componentDidMount(){

//     console.warn('componentDidMount')
// }

render() {
    console.warn("This is Render method!!")
    return (

        <div className="App m-5">
        {/* <h1>Component Did Mount!! Hi! {this.state.name}</h1>   */}
        {/* <button className='btn btn-primary' onClick={()=>{this.setState({name:'Raaju'})}}>Update Name</button> */}
        <h1>The counter Value is {this.state.counter}</h1>
        <button className='btn btn-primary' onClick={()=>{this.setState({counter:this.state.counter+1})}}>Update Name</button>
        </div>
    )
}

}

export default App6; 