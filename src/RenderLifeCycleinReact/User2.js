import React from 'react';

class User2 extends React.Component {

// jab bhi aap class me state banaoge aapko constructor banana hi padega    

constructor(){

    super();
    this.state = {
        email: 'neeraj@gmail.com'
    }
}

// Jaise hi component banke load hota hai render menthod khud hi 
// run ho jata hai 
    render() {
        console.warn('Render Method!!', this.state.email)
        return (

            <div>
                <h1>This is User2 Component !! Hi {this.state.name}</h1>
                <button onClick={() =>this.setState({email: 'ghildiyal@gmail.com'})}>Update Email Address </button>
            </div>
        )
    }
}


export default User2; 