import React from 'react';
import {CommonContext} from './CommonContext'
import Main from './Main'
import UpdateButton from './UpdateButton'
import Header from './Header'
import Footer from './Footer'
class App39 extends React.Component {

    constructor() {
    
        super()
        
        this.updateColor = (color) =>{
            this.setState({
            color:color
            })    
            }

        this.state = {
        color:"gold",
        updateColor:this.updateColor
        }   

       
    }

    render() {

        return (

             // <div className="">
            //  <h1>Complete and Easy Example for Context API!!</h1>    
           //   </div>
          //  Jo provider ke andar value jaane waali hai wo  <CommonContext.Provider /> issesse jaayegi
            <CommonContext.Provider value={this.state}>

            <Header />   
            
            <h1>Complete and Easy Example of Context API !!!!</h1>

            <Main />

            <UpdateButton />

            <Footer />

            </CommonContext.Provider>
        )
    } 
}

export default App39;
