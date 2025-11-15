import React, { useState } from "react";
import "./Information.css";

// Information Component
const Information = () => {
  return (
    <div className="information-section">
      <div className="profile-badge">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=expert"
          alt="Profile"
          className="profile-img"
        />
        <div className="verified-badge">✓</div>
      </div>

      <h1 className="title">1:1 with an Investza Wealth Expert</h1>
      <p className="subtitle">Free • No obligations</p>

      <p className="description">
        Take control of your financial future. Learn how Investza PMS protects,
        manages, and grows your wealth with confidence.
      </p>

      <div className="video-card">
        <div className="video-thumbnail">
          <video
            src="https://d21ldyuk035o7q.cloudfront.net/websiteVideos/calendly_booking_video.mp4"
            className="thumbnail-video"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Information;
