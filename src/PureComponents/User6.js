import React from 'react'
// React.component ke jagah PureComponent likh to jo console.warn ki 
// statment hai wo ek hi baar chalegi agar aap button ki click me "this.setState({counter:1})"
// constant value rakhte ho to 

class User6 extends React.Component {
     
  render() {
    
    console.warn('User Component Check-rerendering')
    return (

        <div className="">
            <h1>Pure Components!!{this.props.count}</h1>
            {/* <button onClick={() => this.setState({counter:this.state.counter+ 1})}> Increment Counter</button> */}

        </div>
    )
  }

}

export default User6; 