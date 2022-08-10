import React,{forwardRef} from 'react';

function Child22(props, ref) {

    return(
        <div className="container">
        <h1>Child Component in ForwardRef Folder!!</h1>
        <input type="text" ref={ref}/>
        </div>
    )
}

export default forwardRef(Child22);