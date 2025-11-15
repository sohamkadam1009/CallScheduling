import React, { useState, useEffect } from "react";
import { ChevronLeft, MessageCircle } from "lucide-react";
import "./EmailDetails.css";
import { useNavigate } from "react-router-dom";
import { DetailsContext } from "./contexts/Details";
import { useContext } from "react";
import { time } from "framer-motion";

const EmailDetails = ({ onBack }) => {
  const { data, setData } = useContext(DetailsContext);

  const [formData, setFormData] = useState({
    email: "",
    guestEmail: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  // Validate email format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Check if required fields are filled (only email is required now)
  useEffect(() => {
    const isEmailValid = validateEmail(formData.email);
    setIsFormValid(isEmailValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
      setData((prev) => ({
        ...prev,
        email: formData.email,
        guestEmail: formData.guestEmail,
      }));
      navigate("/confirmation");
    }
  };

  return (
    <div className="email-container">
      {/* Header */}
      <div className="email-header">
        <button className="back-btn" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <h1 className="email-title">
          Confirm your details to schedule the expert call
        </h1>
        <button className="help-btn">
          <MessageCircle size={20} />
          <span>Help</span>
        </button>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="email-form">
        {/* Email Fields Row */}
        <div className="email-inputs-row">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email ID"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="guestEmail"
              placeholder="Guest email ID (optional)"
              value={formData.guestEmail}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Anything specific you'd like to discuss? e.g, Help me with retirement solutions (optional)"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="6"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`submit-btn ${isFormValid ? "active" : "inactive"}`}
          disabled={!isFormValid}
        >
          Submit
          <span className="arrow">→</span>
        </button>
      </form>
    </div>
  );
};

export default EmailDetails;
