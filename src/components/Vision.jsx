import React from "react";
import "./Vision.css";

const Vision = () => {
  return (
    <div className="vision-section">
      <div className="testimonial-container">
        <div className="profile-avatar">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh"
            alt=" Ananya Sharma"
            className="avatar-img"
          />
        </div>

        <blockquote className="testimonial-quote">
          I never realized how much potential growth I was missing out on until
          this consultation.
        </blockquote>

        <div className="testimonial-author">
          <span className="author-name">- Ananya Sharma, </span>
          <span className="author-title">Co-founder, Horizon Capital</span>
        </div>
      </div>
    </div>
  );
};

export default Vision;
