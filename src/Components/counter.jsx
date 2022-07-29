import React, { Component } from 'react';

class Counter extends Component {
    // ctrl + D for multicursor editing
    // state is a special property in react component . It's an object which
    // Includes any data which this component needs 
    
    state = {
        count:0,
        imageUrl:"https://picsum.photos/200"
    }

    // styles ={

    //     fontSize : 10,
    //     fontWeight : "bold"
    // }
    render() { 
    
        return <div className="m-5">   
                    {/* <img src={this.state.imageUrl} alt="" /> */}
                    {/* The below mentioned styling is called Inline styling */}
                   <span style={{fontSize : 10}} className='badge badge-danger m-3 p-2'>{this.formatCount()}</span>
                   <button className='btn btn-primary'>Increment</button>
               </div>
    }


    formatCount(){
        const {count} = this.state;  
        return count === 0 ? 'Zero' : count; 
    }
}
 
export default Counter;