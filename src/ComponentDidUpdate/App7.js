import React from "react";


// Keypoint : state update hum render method ke andar nahi karwate 
// kyonki jitni baar state update hoga utni baar render call ho jaayega
// to hum ye avoid karte hai 

// Keypoint : componentDidUpdate ko chalne se hum ruka sakte hai ? Ans is Yes
// by using shouldComponentUpdate function ko false set karke

// Interview question: Kya humien componentDidUpdate ke andar API call karni chahiye? 

class App7 extends React.Component {

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
    
    console.warn('ComponentDidUpdate', preState.counter,this.state.counter, snapshot)
    // Yahi same cheez aap preProps ke saath bhi check kar sakete ho 
    // if(preState.counter=== this.state.counter){

    //     alert('Previous state not changed its same')
    // }

    //below line of code infinte loop chala dega kyonki jaise hi 
    // state update hogi componentDidUpdate fir se run ho jaayega

    // this.setState({counter:this.state.counter+1})

    // but hum above loop ko infinite chalne se rok sakete hai if condition
    // ke andar likhkar 

    if(this.state.counter < 10){

    this.setState({counter:this.state.counter+1})
    }

}

// componentDidMount(){

//     console.warn('componentDidMount')
// }

render() {
    console.warn("This is Render method!!")
    return (

        <div className="App m-5">
        <h1>The counter Value is {this.state.counter}</h1>
        <button className='btn btn-primary' onClick={()=>{this.setState({counter:1})}}>Update Name</button>
        </div>
    )
}

}

export default App7; 