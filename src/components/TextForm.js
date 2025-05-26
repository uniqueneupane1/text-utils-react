import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");


  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("Value Changed");
    setText(event.target.value);
  };

  const isTextEmpty = text.trim() === "";
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-outline-success" onClick={handleUpClick} disabled = {isTextEmpty}>
          Convert to upper case
        </button>
        <button className="btn btn-outline-success mx-2" onClick={handleLoClick} disabled = {isTextEmpty}>
          Convert to lower case
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p><b>{isTextEmpty ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</b></p>
        <p><b>{0.008 * (isTextEmpty ? 0 : text.trim().split(/\s+/).length)} minutes to read</b></p>
        <h2>Preview</h2>
        <p>{isTextEmpty ? "Nothing to preview." : text}</p>
      </div>
    </>
  );
}
