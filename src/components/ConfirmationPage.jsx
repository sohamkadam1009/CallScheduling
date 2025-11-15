import React, { useEffect, useState } from "react";
import {
  CheckCircle,
  Calendar,
  Clock,
  Mail,
  Users,
  ArrowRight,
} from "lucide-react";
import "./ConfirmationPage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DetailsContext } from "./contexts/Details";

const ConfirmationPage = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const { data, setData } = useContext(DetailsContext);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Mock data - replace with actual data from your state/props
  const appointmentDetails = {
    date: data.date,
    time: data.time,
    duration: "45 minutes",
    email: data.email,
    guestEmail: data.guestEmail,
    timezone: "Indian Standard Time (IST)",
  };

  const handleViewCalendar = () => {
    // Add calendar integration logic here
    console.log("Add to calendar");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="confirmation-wrapper">
      <div className={`confirmation-container ${showContent ? "show" : ""}`}>
        {/* Success Icon */}
        <div className="success-icon-wrapper">
          <div className="success-icon-bg"></div>
          <CheckCircle className="success-icon" size={80} />
        </div>

        {/* Main Heading */}
        <h1 className="confirmation-title">Meeting Confirmed!</h1>
        <p className="confirmation-subtitle">
          Your expert consultation has been successfully scheduled
        </p>

        {/* Details Card */}
        <div className="details-card">
          <div className="detail-item">
            <div className="detail-icon">
              <Calendar size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Date</span>
              <span className="detail-value">{appointmentDetails.date}</span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <Clock size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Time</span>
              <span className="detail-value">{appointmentDetails.time}</span>
              <span className="detail-timezone">
                {appointmentDetails.timezone}
              </span>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon">
              <Mail size={20} />
            </div>
            <div className="detail-content">
              <span className="detail-label">Confirmation sent to</span>
              <span className="detail-value">{appointmentDetails.email}</span>
              {appointmentDetails.guestEmail && (
                <span className="detail-value guest">
                  {appointmentDetails.guestEmail}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="info-banner">
          <div className="info-icon">📧</div>
          <div className="info-text">
            <p className="info-title">Check your email</p>
            <p className="info-description">
              We've sent a calendar invite and meeting details to your email
              address
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          {/* <button className="btn-secondary" onClick={handleViewCalendar}>
            <Calendar size={20} />
            Add to Calendar
          </button> */}
          <button className="btn-primary" onClick={handleGoHome}>
            Back to Home
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Footer Note */}
        <div className="footer-note">
          <Users size={16} />
          <span>Need to reschedule? Check your email for the meeting link</span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
