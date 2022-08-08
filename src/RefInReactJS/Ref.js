import React,{createRef} from "react";

class Ref extends React.Component {

    constructor(){

        super();
        this.inputRef= createRef();

    }

    componentDidMount(){

        // console.warn(this.inputRef)
        //ye jo hum current.value modify karwa rahe hai ye direct DOM manupulation hai 
        console.warn(this.inputRef.current.value = '1999')
    }


        getValue(){

            
        }

    render() {
   
        return (

            <div className="m-5">
                <h1>Ref In React!!</h1>
                <input type="text" ref={this.inputRef}/>
            </div>
        )

    }
}


export default Ref; 