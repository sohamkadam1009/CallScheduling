// NameDetails Component
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NameDetails.css";

const NameDetails = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // const handleBack = () => {
  //   // navigate(-1);
  // };

  const handleNext = () => {
    if (name.trim()) {
      console.log("Name submitted:", name);
      // Handle navigation or form submission
      navigate("/contactDetails");
    }
  };

  return (
    <div className="name-details-section">
      <div className="header">
        {/* <button className="back-button" onClick={() => handleBack()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button> */}
        <span className="step-indicator">Step 1 of 4</span>
        <button className="help-button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Help
        </button>
      </div>

      <div className="form-container">
        <h2 className="form-title">What is your name?</h2>

        <div className="input-wrapper">
          <input
            type="text"
            className="name-input"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          className={`next-button ${name.trim() ? "active" : ""}`}
          onClick={handleNext}
          disabled={!name.trim()}
        >
          Next
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>

        <div className="footer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="footer-text">Your data is 100% protected</span>
        </div>
      </div>
    </div>
  );
};

export default NameDetails;
