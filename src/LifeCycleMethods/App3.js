import React from 'react';  

class App3 extends React.Component {
// Import keypoint :  Constructor class ka object bante hi call ho jaata hai ...to hum ise pehla lifeCyclemethod
// bhi kehte hai 
constructor(){
    super()
    console.warn('This is Constructor')

    this.state = {
        data:'Anil'
    }
}    

// render se bhi pehle constructor call hota hai class component me   
// Isiliye hum state constructor ke andar hi define karte hai  

// Keynote : Kabhi bhi constructor ke andar API call nahi karni chahiye 
// kyonki api call me time lagta hai humien usme componentDidMount me
// call kart hai

// Jaise hi state ya props update hoga render method apne aap rerender ho jaayega


render(){

    console.warn('This is Render')
    return <h1>Hello People! and {this.state.data}</h1>
}

}

export default App3;