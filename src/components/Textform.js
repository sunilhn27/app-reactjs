import React, { useState } from "react";

export default function Textform(props) {
    
   
  const [text, setText] = useState("");

  const [text1, setText1] = useState("Your Summary");

  const handleUpClick = () => {
    console.log("Clicked on Handle Click");
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Inside onchange");
    setText(event.target.value);
  };

  const handleClearTextOnClick =()=>{
    let newText = "";
    setText(newText);
  };

  const handleChangeSummary =()=>{
    if(text1==="Your Summary"){
        setText1("Text Summary");
    }else{
        setText1("Your Summary");
    }
  };

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-2">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Upper </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert to Lower </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClearTextOnClick}> Clear Text </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleChangeSummary}> Change HeadLine Summary </button>

    </div>
    <h1>{text1}</h1>
    <p>  {text.split("").length} your words and your Characters {text.length} </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something to preview"}</p>
    </>
  );
}
