import React, { useState } from "react"

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Button was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase", "success");
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces", "success");
  }


  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);  
  }

  return (
    <>
      <div style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange}
           style={{backgroundColor: props.mode === "dark" ? "#b7cde8" : "white",color: props.mode === "dark" ? "white" : "black"}} 
           id="myBox" rows="8" placeholder="Enter your text here"></textarea>
        </div>
        <button className={`btn btn-primary mx-1 my-1`} disabled={text.length === 0} onClick={handleUpClick} >Convert to Uppercase</button>
        <button className={`btn btn-primary mx-1 my-1`} disabled={text.length === 0} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className={`btn btn-primary mx-1 my-1`} disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-primary mx-1 my-1`} disabled={text.length === 0} onClick={handleCopyClick}>Copy Text</button>
        <button className={`btn btn-primary mx-1 my-1`} disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-2" style={{color: props.mode === "dark" ? "white" : "black"}}>
          <h2>Your Text Summary</h2>
          <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} mins read</p>
          <h3>Preview</h3>
          <p>{text.length>0 ? text: "No text to preview"}</p>
      </div>
    </>
  );
}
