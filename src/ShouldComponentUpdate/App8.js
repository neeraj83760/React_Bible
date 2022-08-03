import React from "react";

// Interview question : hum componentDidUpdate ke andar api ko call kar sakte hai
// Isme koi issue nahi hai but only in case agar aapko conditional call karwani hai to
// agar conditional call nahi karwani hai to to aap componentDidUpdate me API call
// nahi karoge.... otherwise u can use componentDidMount 


// Interview question : componentDidUpdate pehle call hota hai ya shouldComponentUpdate 
// pehle call hota hai ?   ... give the answer 

class App8 extends React.Component {

constructor(){

    super()
    this.state = {

        counter: 0
    }
    // console.warn('This is App6 constructor')
        
}
// shouldComponentUpdate apne aap me rendering ko block kar deta hai
// aur state ko update process me rukaawat daalta hai but agar hum
// shouldComponentUpdate me return true kar dete hai to wo state
// ko update process me rukaawat nahi daalega  

// shouldComponentUpdate ka by default behavior component ko update nahi hone deta 
// isliye humein return true kar dete bydefault wo false hota hai 
shouldComponentUpdate(){

    console.warn('This is shouldComponentUpdate', this.state.counter)
    // return true

    // Aap condition bhi laga sakte ho shouldComponentUpdate me
    // Agar hum condition ke hisaab se shouldComponentUpdate ko use karein
    // to Isse humari application ki speed badhegi kyonki hum issesse 
    // component rendering control kar rahe hai 
    if(this.state.counter < 5) {

        return true
    }

}

render() {
    // console.warn("This is Render method!!")
    return (

        <div className="App m-5">
        <h1>The counter Value is {this.state.counter}</h1>
        <button className='btn btn-primary' onClick={()=>{this.setState({counter:this.state.counter + 1})}}>Update Name</button>
        </div>
    )
}

}

export default App8; 