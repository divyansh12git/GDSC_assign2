import React from "react";
import FormBox from "./components/formbox";
import background from "./bg.jpeg"

function App() {
  return <>
  <div className="h-screen  lg:grid lg:grid-cols-2 z-10 ">
  <div className="bg-no-repeat bg-cover bg-scroll" style={{backgroundImage:`url(${background})`}}></div>
      <div className="flex  justify-center items-center mr-20" >
       <FormBox />
       
      </div>
  </div>
    
  </>
}

export default App;
