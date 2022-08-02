import react from 'react';
// import './App.css';

function User(props) {

    return(

        <div className="p-5">
       
         <h1>User Component</h1>
         <button className=' btn btn-primary' onClick={()=>props.data()} style={{margin: '30px'}}>Call Data Function</button>
         <button className=' btn btn-primary' onClick={props.data}>Call Data Function</button>

        </div>
    )
}

export default User;