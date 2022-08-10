import React,{forwardRef} from 'react';
// ye jo aapne App22 se as a props pass kiya hai wo aapko Child22 function ke props argument me
// nahi ref argument me milega jo ki second argument hai Child22 function ka 
function Child22(props, ref) {

    return(
        <div className="container">
        <h1>Child Component in ForwardRef Folder!!</h1>
        <input type="text" ref={ref}/>
        </div>
    )
}

// ForwardRef is a wrapper that's which we have wrapped Child22 component with it.
export default forwardRef(Child22);

