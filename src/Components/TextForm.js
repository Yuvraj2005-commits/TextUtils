import React , { useState } from "react";


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked", + text ); 
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  
  const handleLoClick = () => {
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleClearClick = () => {
    let newText= '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On change"); 
    setText(event.target.value); 
    // props.showAlert("Text changed", "success");
  }
  const handleCapitalize = () => {
  let newText = text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  setText(newText);
  props.showAlert("Converted to Capitalize", "success");
};

  const handlereverseClick = () => {
    let newText= text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed", "success");
  }
  const handleSpaceClick = () => {
    let newText= text.replace(/\s+/g, ' ').trim()
    setText(newText);
    props.showAlert("Extra space removed", "success");

  }
  const [text, setText] = useState("Enter the text here");
  return (
   <>
    <div className="container">
      <div className="mb-3">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light' }`}>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'light' ? 'dark' : 'light' }`}>
          For learning React
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={handleOnChange}
          value={text}
          rows="8"
        ></textarea>
      </div>
      <div className="btn">
         <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1"   onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1"   onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handleSpaceClick}>Remove extra space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handlereverseClick}>reverse text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"   onClick={handleCapitalize}>Captalize</button>



        




      </div>
    </div>
   <div className="container my-3">
       <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light' }`}>Your Text Summary</h2>
       <p className={`text-${props.mode === 'light' ? 'dark' : 'light' }`}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
       <p className={`text-${props.mode === 'light' ? 'dark' : 'light' }`}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
       <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light' }`}>Preview</h2> 
       <p className={`text-${props.mode === 'light' ? 'dark' : 'light' }`}>{text.length>0?text:"Nothing to preview"}</p>
   </div>
   </>
  );
}
