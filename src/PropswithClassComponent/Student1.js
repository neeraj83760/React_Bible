import React from "react";

class Student1 extends React.Component {

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

