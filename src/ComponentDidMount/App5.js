import React from "react";

// sabse pehle constructor call hoga fir render(kyonki iske andar poora HTMl ready ho jaata hai)
// than componentDidMount 
class App5 extends React.Component {

constructor(){

    super()
    this.state = {

        name: 'Sanju'
    }
        // console.warn('Constructor of App5 Component')
    
}


// Button ki click pe render method phir se to call hoga but componentDidMount 
//nahi call hoga componentDidMount sirf ek hi baar call hota hai 
// Isliye hum isme api call karte hai kyonki API usually humein ek hi 
// baar call karni hoti hai 

componentDidMount(){

    console.warn('componentDidMount')
}


// Render bhi ek lifecycle ka method hai
// Jab bhi humien Api call karni hoti hai to hum usse ComponentDidMount
// ke andar call karte hai 

render() {
    console.warn("This is Render method!!")
    return (

        <div className="App m-5">
        <h1>Component Did Mount!! Hi! {this.state.name}</h1>  
        <button className='btn btn-primary' onClick={()=>{this.setState({name:'Raaju'})}}>Update Name</button>
        </div>
    )
}

}

export default App5; 