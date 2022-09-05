import "./App.css";
 import Narbar from "./components/Narbar";
 import Textform from "./components/Textform";
 import React, { useState } from 'react'
import Pagenation from "./components/Pagenation";

 

function App() {
  const [mode ,setMode] =useState('light');

  const toggleMode =() =>{        
    if(mode==='light'){
      console.log("inside toggle mode true")
        setMode("dark");
        document.body.style.backgroundColor="grey";
    }else{
      setMode('light');
      document.body.style.backgroundColor="white";
    }

  }

  return (
     <>
            <Narbar text="Text Utils" mode={mode} toggleMode={toggleMode} link="Links"></Narbar>
              <div className="container">
              <Textform heading="Enter Example text" />          
              </div> 
                <div className="container" >
                <Pagenation/>
                </div>
        
    </>
  );
}

export default App;
