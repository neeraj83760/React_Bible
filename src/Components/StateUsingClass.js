import React from "react";

class StateUsingClass extends React.Component{

// Class me state works like a container  
constructor(){

    super();
    this.state = {

        data: 'Anil'
    }
}

updateData(){

this.setState ( {

    data: 'Raaju'
})

}

render(){

    return(

        <div className="" style={{paddingLeft:'25rem', margin: '2rem'}}>
            <h3>{this.state.data}</h3>
            {/* In case of class we need to need to write the event handler function in the form of arrow function  */}
            <button className="btn btn-primary" onClick={()=>{this.updateData()}}> Change the name</button>
        </div>
    )

}

}

export default StateUsingClass; 