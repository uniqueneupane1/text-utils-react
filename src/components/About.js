import React, { useEffect } from "react";

export default function About(props) {
  useEffect(() => {
    document.title = "About | TextUtils";
  }, []);
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // })

  // const [btnText, setBtnText] = useState("Enable dark mode")

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //     });
  //     setBtnText("Enable light mode");
  //   } else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor:'white',
  //     })
  //     setBtnText("Enable dark mode");
  //   }
  // }

  // const textColor = props.mode === "dark" ? "white" : "black";
  // const bgColor = props.mode === "dark" ? "#2c3238" : "white";
  // const textStyle = {
  //   color: textColor,
  //   backgroundColor: bgColor,
  // }
  return (
    <div className="container" style={props.style}>
      <h1 className="my-3">About TextUtils</h1>
      <p>
        A <strong>TextUtils</strong> is a simple yet powerful utility-based web
        application built with <strong>React</strong>. It offers a fast and
        responsive user experience and is designed to help users efficiently
        analyze and manipulate text.
      </p>
      <div className="accordion" id="accordionExample">
        <h2 className="my-4 mb-3">Features</h2>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              // style={myStyle}
              style={props.style}
            >
              <strong>Convert to Upper Case</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Quickly transform all text to uppercase. Useful for emphasis,
              headings, and formatting.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={props.style}
              // style={textStyle}
              // style={myStyle}
            >
              <strong>Convert to Lowercase</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Convert your entire text to lowercase, ideal for uniformity or
              data processing.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={props.style}
              // style={textStyle}
              // style={myStyle}
            >
              <strong>Convert to Title Case (Capitalize each word)</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Capitalizes the first letter of each word. Great for writing
              titles or headlines.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={props.style}
              // style={textStyle}
              // style={myStyle}
            >
              <strong>Clear Text</strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Clears all the text from the input area so you can start fresh.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              // style={myStyle}
              style={props.style}
            >
              <strong>Remove Extra Spaces</strong>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Eliminate multiple spaces between words and sentences for clean,
              readable text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              // style={myStyle}
              style={props.style}
            >
              <strong>Remove Punctuation</strong>
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Strips out punctuation marks from the text. Useful for
              preprocessing text for analysis.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
              // style={myStyle}
              style={props.style}
            >
              <strong>Copy to Clipboard</strong>
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Allows you to copy the modified text with a single click using the
              clipboard API.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
              // style={myStyle}
              style={props.style}
            >
              <strong>Text Summary</strong>
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Shows word count, character count, and estimated reading time for
              the input text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
              // style={myStyle}
              style={props.style}
            >
              <strong>Dark / Light Mode</strong>
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Toggle between dark and light themes for a more comfortable
              viewing experience.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.style}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
              // style={myStyle}
              style={props.style}
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils works seamlessly across all major modern browsers
              including Chrome, Firefox, Edge, Safari, and Opera. It is
              responsive and accessible, ensuring a consistent experience on
              both desktop and mobile devices.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick= {toggleStyle} className="btn btn-outline-success">
          {btnText}
        </button>
      </div> */}
      <h2 className="my-4">Why Choose TextUtils?</h2>
      <p>
        TextUtils is fast, lightweight, and completely free. With its clean user
        interface and real-time processing, you get immediate feedback on your
        text transformations. It's designed to be responsive across all
        devices—desktops, tablets, and phones—so you can work anywhere, anytime.
      </p>
    </div>
  );
}
