import React, { useState } from "react";
import "../../styles/Toggle/Toggle.css";

function Toggle({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tContainer">
      <div className="toggle-container">
        <button
          onClick={toggleContent}
          className={`toggle-button ${isOpen ? "open" : ""}`}
        >
          {title}
        </button>
        <div className={`toggle-content ${isOpen ? "open" : "closed"}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Toggle;
