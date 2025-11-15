import { useState } from "react";
import "./ContactDetails.css";
import { useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleSendOTP = () => {
    if (phoneNumber.trim()) {
      console.log("Sending OTP to:", phoneNumber);
      // Handle OTP sending logic
      navigate("/verification");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow numbers
    if (value === "" || /^[0-9]+$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="contact-details-section">
      <div className="contact-header">
        <button className="back-btn" onClick={() => handleBack()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <span className="step-text">Step 2 of 4</span>
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

      <div className="contact-form-container">
        <h2 className="contact-title">Enter your contact details</h2>
        <p className="contact-subtitle">Receive a reminder before the call</p>

        <div className="phone-input-wrapper">
          <label className="input-label">Phone Number</label>
          <div className="phone-input-group">
            <span className="country-code">+91</span>
            <input
              type="tel"
              className="phone-input"
              value={phoneNumber}
              onChange={handlePhoneChange}
              maxLength="10"
              placeholder="Enter phone number"
            />
          </div>
        </div>

        <button
          className={`otp-button ${phoneNumber.length === 10 ? "active" : ""}`}
          onClick={handleSendOTP}
          disabled={phoneNumber.length !== 10}
        >
          Send OTP
        </button>

        <div className="contact-footer">
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

export default ContactDetails;
