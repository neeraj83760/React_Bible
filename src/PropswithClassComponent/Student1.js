import React from "react";

class Student1 extends React.Component {
//Interview question :   App jo bhi props pass karte ho functional and class component
// me usse app component me recieve karne ke baad modify nahi kar sakte 
    render(){
        console.log(this.props)
        return(

            <div><h1>Student {this.props.name}</h1>
            <h2>The Email iD is: {this.props.email}</h2>
            </div>
        )
    }
}


export default Student1;

