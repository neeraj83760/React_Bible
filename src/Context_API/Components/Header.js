import React from 'react';
import {CommonContext} from './CommonContext'
class Header extends React.Component {

    render() {

        return (

            
          // Yaha hum consume karenge Jo Provider me hai
          // Always remember consumer ke andar hum values nahi dete hai jaise humien producer
          // ke andar pass ki hai 
          // Also remember consumer ke andar humara callback function hota hai 
            <CommonContext.Consumer>
            
            {
                ({color})=> (

                    <h1 style={{backgroundColor: color}}>Hello, this is Header Page!!</h1>
                )
            }

            </CommonContext.Consumer>
        )
    } 
}

export default Header;
