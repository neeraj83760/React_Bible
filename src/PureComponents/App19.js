import React from 'react'
// import {PureComponent} from 'react';
import User6 from './User6';

class App19 extends React.Component {
  
  constructor(){

    super();
    this.state = {

        counter: 1
    }
  }   
    
  render() {

    console.warn('Check-rerendering')

    return (

        <div className="">

            <User6  count={this.state.counter}/>
            {/* <h1>Pure Components!! Counter value is{this.state.counter}</h1> */}
            <button onClick={() => this.setState({counter:this.state.counter+ 1})}> Increment Counter</button>
            {/* <button onClick={() => this.setState({counter:1})}> Increment Counter</button> */}

        </div>
    )
  }

}

export default App19; 