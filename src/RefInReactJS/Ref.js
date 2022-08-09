import React,{createRef} from "react";

class Ref extends React.Component {

    constructor(){

        super();
        this.inputRef= createRef();

    }

    componentDidMount(){

        // console.warn(this.inputRef)
        //ye jo hum current.value modify karwa rahe hai ye direct DOM manupulation hai 
        // console.warn(this.inputRef.current.value = '1999')
    }


        getValue(){

            console.warn(this.inputRef.current.value)
            this.inputRef.current.style.color = 'gold'
        }

    render() {
   
        return (

            <div className="m-5">
                <h1>Ref In React!!</h1>
                <input type="text" ref={this.inputRef}/>
                <button onClick={()=>this.getValue()}>Check Ref</button>
            </div>
        )

    }
}


export default Ref; 