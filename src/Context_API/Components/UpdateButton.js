import React from 'react';
import {CommonContext} from './CommonContext'
function UpdateButton() {

        return (

            
          // Yaha hum consume karenge Jo Provider me hai
          // Always remember consumer ke andar hum values nahi dete hai jaise humien producer
          // ke andar pass ki hai 
          // Also remember consumer ke andar humara callback function hota hai 
            <CommonContext.Consumer>
            
            {
                ({updateColor})=> (

                    <div>
                        
                    <button className='btn btn-primary' onClick={()=> updateColor('tomato')}>Upadate Color!!</button><br /><br />
                    <button className='btn btn-primary' onClick={()=> updateColor('#1E90FF')}>Upadate Color!!</button>

                    

                    </div>
                )
            }

            </CommonContext.Consumer>
        )
    } 


export default UpdateButton;
