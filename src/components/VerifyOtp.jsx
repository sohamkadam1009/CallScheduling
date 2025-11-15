// VerifyOtp.jsx
import React, { useState, useEffect } from "react";
import "./VerifyOtp.css";
import { useNavigate } from "react-router-dom";

const VerifyOtp = ({ phoneNumber, onVerify }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(26);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Timer effect
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setOtp(value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log("OTP Verified:", otp);
        //navigate
        navigate("/investmentDetails");

        if (onVerify) {
          onVerify(otp);
        }
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleResend = () => {
    setOtp("");
    setTimer(26);
    setCanResend(false);
    console.log("OTP Resent to", phoneNumber);
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        {/* Header */}
        <div className="otp-header">
          <h1 className="otp-title">Verify OTP</h1>
          <p className="otp-description">
            Enter the 4-digit OTP sent to{" "}
            <span className="otp-number">{phoneNumber}</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleVerify} className="otp-form">
          {/* OTP Input */}
          <div className="otp-input-group">
            <input
              type="text"
              inputMode="numeric"
              maxLength="4"
              placeholder="Enter 4 digit OTP"
              value={otp}
              onChange={handleOtpChange}
              className="otp-input"
              required
            />
          </div>

          {/* Consent Text */}
          <p className="otp-consent">
            By proceeding, you give consent to receive communication on WhatsApp
            and agree to our{" "}
            <a href="#terms" className="otp-link">
              Terms
            </a>{" "}
            and{" "}
            <a href="#privacy" className="otp-link">
              Privacy Policy
            </a>
          </p>

          {/* Buttons Container */}
          <div className="otp-buttons">
            <button
              type="button"
              onClick={handleResend}
              disabled={!canResend}
              className={`resend-btn ${!canResend ? "disabled" : ""}`}
            >
              Resend OTP {!canResend && `(${timer})`}
            </button>
            <button
              type="submit"
              disabled={otp.length !== 4 || isLoading}
              className={`verify-btn ${isLoading ? "loading" : ""}`}
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
