// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const textColor = mode === "dark" ? "white" : "black";
  const bgColor = mode === "dark" ? "#2c3238" : "white";
  const textAreaStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2c3238";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <Routes>
          <Route
            exact path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
                style={textAreaStyle}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} style={textAreaStyle} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
