import React from "react";
import "./LoadingPage.css";
import image from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/scheduleCall"); // redirect after 3 seconds
    }, 6000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="container">
        <div className="profiles-container">
          <div className="profile-wrapper profile-1">
            <img
              src={image}
              alt="Investment Expert 1"
              className="profile-pic"
            />
          </div>

          <div className="profile-wrapper profile-2">
            <img
              src={image}
              alt="Investment Expert 2"
              className="profile-pic profile-pic-main"
            />
          </div>

          <div className="profile-wrapper profile-3">
            <img
              src={image}
              alt="Investment Expert 3"
              className="profile-pic"
            />
          </div>
        </div>

        <h1 className="title">
          Congratulations! You are eligible for Investza PMS
        </h1>

        <p className="subtitle">
          Assigning a Investza investment expert. Please avoid clicking back or
          closing the window
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
