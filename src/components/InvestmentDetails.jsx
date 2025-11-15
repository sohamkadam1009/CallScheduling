import "./InvestmentDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InvestmentDetails = () => {
  const [selectedRange, setSelectedRange] = useState("");

  const navigate = useNavigate();

  const investmentRanges = [
    { id: "below-50", label: "Below ₹50 Lakhs" },
    { id: "50-2cr", label: "₹50 Lakhs to ₹2 Crores" },
    { id: "2-5cr", label: "₹2 Crores to ₹5 Crores" },
    { id: "10cr-plus", label: "₹10 Crore+" },
  ];

  const handleRangeSelect = (id) => {
    setSelectedRange(id);
  };

  const handleContinue = () => {
    if (selectedRange === "below-50") {
      console.log("Selected investment range:", selectedRange);
      // Handle navigation or form submission
      navigate("/getStarted"); //navigate to getStarted
    } else {
      navigate("/landingPage");
    }
  };

  return (
    <div className="investment-details-section">
      <div className="investment-header">
        <span className="step-text">Step 3 of 4</span>
        <button className="help-btn">
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

      <div className="investment-form-container">
        <h2 className="investment-title">
          What's the total value of your investments?
        </h2>
        <p className="investment-subtitle">
          Include Stocks, MFs, FDs, and cash. This will helps us personalise
          your experience
        </p>

        <div className="investment-options-grid">
          {investmentRanges.map((range) => (
            <button
              key={range.id}
              className={`investment-option ${
                selectedRange === range.id ? "selected" : ""
              }`}
              onClick={() => handleRangeSelect(range.id)}
            >
              <span className="option-label">{range.label}</span>
              <span className="radio-indicator">
                {selectedRange === range.id && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                )}
              </span>
            </button>
          ))}
        </div>

        <button
          className={`continue-button ${selectedRange ? "active" : ""}`}
          onClick={handleContinue}
          disabled={!selectedRange}
        >
          Continue
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>

        <div className="investment-footer">
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

export default InvestmentDetails;
