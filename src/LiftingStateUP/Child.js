
// Asli naaam hai is topic ka :  React js send data child to parent
function Child(props) {

     //Jaisa data variable sent kiya hai parent component(App18) me 
     // wasie hum poora object bhi send kar sakete hai 
    const data ='Neeraj Ghildiyal'  

    return(
         <div>
              {/* <h1>Child Component: {props.name}</h1> */}
              <h1>Child Component</h1>
              <button onClick={()=> props.alert(data)} className="btn btn-primary">Click Me!</button>    
         </div>  
          )

}

export default Child;