import React from "react";
import "./Header.css";
const Header = ({ handleElementClick, activeStates }) => {
  return (
    <div className="content text-center">
      <div className="slider-navigation mb-3 me-2">
        <button
          className={activeStates === 0 ? "nav-btn active" : "nav-btn"}
          onClick={() => handleElementClick(0)}
        >🥰</button>
        <button
          className={activeStates === 1 ? "nav-btn active" : "nav-btn"}
          onClick={() => handleElementClick(1)}
        >🌸</button>
        <button
          className={activeStates === 2 ? "nav-btn active" : "nav-btn"}
          onClick={() => handleElementClick(2)}
        >🏖️</button>
        <button
          className={activeStates === 3 ? "nav-btn active" : "nav-btn"}
          onClick={() => handleElementClick(3)}
        >🌳</button>
        <button
          className={activeStates === 4 ? "nav-btn active" : "nav-btn"}
          onClick={() => handleElementClick(4)}
        >❄️</button>
      </div>
      <h1>
      Let's start <br/><span>Working</span>
      </h1>
      <h5 className="text-light fw-normal">What's the most impactful thing you can do right now?</h5>
      
    </div>
  );
};

export default Header;
