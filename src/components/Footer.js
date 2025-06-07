import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <div className="footer-container mt-4" style={props.style}>
      <hr className="footer-divider" />
      <div className="footer-bottom d-flex mt-3">
        <p>
          © {new Date().getFullYear()} Unique Neupane. All rights reserved.
        </p>
        <p className="mx-2">Built with ❤️ using React</p>
      </div>
    </div>
  );
}
