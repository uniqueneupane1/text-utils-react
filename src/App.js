// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About" />
      {/* <Navbar /> */}
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter the text to analyze" />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
