import React from "react";


// Interview question : shouldComponentUpdate pehle call hota hai jiske andar
// humara return true hoga.. to componentDidUpdate baad me call hoga

class Student1 extends React.Component {
// Point1 : Maan lo agar aap API call kar rahe ho aur aapko ekdum se component remove
// karna hai to us request ko componentWillMount me cancel kar sakete hai. 

// Point2:  Agar aapki koi data loading chal rahi hai to usse cancel kar sakete ho 

// jaise hi component remove hoga App9 component se componentWillUnmount automatically
// run ho jaayega 
componentWillUnmount(){

    // alert("ComponentWillUnmount Called")

    console.warn("ComponentWillUnmount Called")
}
 
render() {
    // console.warn("This is Render method!!")
    return (

        <div className="App">
        <h1>Student1 Component!!</h1>
        </div>
    )
}

}

export default Student1; 