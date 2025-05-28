import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const textColor = props.mode === "dark" ? "white" : "black";
  const bgColor = props.mode === "dark" ? "#343a40" : "white";
  const textAreaStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Value Changed");
    setText(event.target.value);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    // alert("Text copied to clipoard");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); // waits for 2000 milliseconds and then sets the copied state back to false
  };

  const isTextEmpty = text.trim() === "";
  return (
    <>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control ${props.mode==='dark'?'textarea-dark':'textarea-light'}`}
            id="myBox"
            value={text}
            placeholder="Enter text here"
            onChange={handleOnChange}
            style={textAreaStyle}
            rows="8"
          ></textarea>
        </div>
        <button
          className={`btn btn-outline-success text-${
            props.mode === "dark" ? "white" : "#198754"
          }`}
          onClick={handleUpClick}
          disabled={isTextEmpty}
        >
          Convert to upper case
        </button>
        <button
          className={`btn btn-outline-success mx-2 text-${
            props.mode === "dark" ? "white" : "#198754"
          }`}
          onClick={handleLoClick}
          disabled={isTextEmpty}
        >
          Convert to lower case
        </button>
        <button
          className={`btn btn-outline-success text-${
            props.mode === "dark" ? "white" : "#198754"
          }`}
          onClick={handleClearText}
          disabled={isTextEmpty}
        >
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          <b>
            {isTextEmpty ? 0 : text.trim().split(/\s+/).length} words and{" "}
            {text.length} characters
          </b>
        </p>
        <p>
          <b>
            {0.008 * (isTextEmpty ? 0 : text.trim().split(/\s+/).length)}{" "}
            minutes to read
          </b>
        </p>
        <div className="container border" style={textAreaStyle}>
          <h2 className="d-flex justify-content-between">
            Preview
            <button
              className="text-secondary"
              onClick={handleCopyClick}
              style={{
                background: "none",
                border: "none",
                color: "#0d6efd",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: isTextEmpty ? "not-allowed" : "pointer",
                pointerEvents: isTextEmpty ? "none" : "auto",
              }}
              title="Copy to clipboard"
            >
              <FontAwesomeIcon
                icon={copied ? faCheck : faClipboard}
                size="xs"
                className="mx-1"
                style={textAreaStyle}
              />
              <span
                style={{
                  ...textAreaStyle,
                  fontSize: "15px",
                }}
              >
                {copied ? "copied" : "copy"}
              </span>
            </button>
          </h2>
          <p style= {{color: props.mode==='dark'?'#888585':'grey'}}>
            {isTextEmpty ? "Nothing to preview." : text}
          </p>
        </div>
      </div>
    </>
  );
}
