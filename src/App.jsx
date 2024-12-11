import React, { useState } from "react";

function App(){
    const [value,setValue]=useState(1)
    const notify =()=>{
setValue(value -1)
    }

    return <>
    <h1 className="">{value}</h1>
    <button onClick={notify} className="">
        Click here
    </button>
    </>

  
}

export  default   App;