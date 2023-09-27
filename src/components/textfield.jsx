import React from "react";

var TextField=(props)=>{
    
    
    return <div>
    <label htmlFor="fiels" className="mx-5 text-sm text-gray-700">{props.innerText}</label><div className="m-1"></div>
    <input type={`${props.encrypt}`}  name="field" onChange={(e)=>{props.call(e.target.value)}}
        className={`w-80 h-10 rounded-3xl outline outline-1
            text-md p-5
          ${props.set?`outline-gray-500 focus:outline-teal-500 focus:shadow-md focus:shadow-teal-500`:`outline-red-500 focus:shadow-md focus:shadow-red-500`} `}
     />
    <div className="mx-5 text-red-500 text-sm mt-1" hidden={props.set} > *{props.message}</div>
    <div className="mb-3"></div>
     </div>
}
export default TextField;