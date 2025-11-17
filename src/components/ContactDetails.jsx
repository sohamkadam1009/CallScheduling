import { useState } from "react";
import styles from "./ContactDetails.module.css";
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
      navigate("/verification", { replace: true });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]+$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className={styles["contact-details-section"]}>
      <div className={styles["contact-header"]}>
        <button className={styles["back-btn"]} onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <span className={styles["step-text"]}>Step 2 of 4</span>

        <button className={styles["help-btn"]}>
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

      <div className={styles["contact-form-container"]}>
        <h2 className={styles["contact-title"]}>Enter your contact details</h2>
        <p className={styles["contact-subtitle"]}>
          Receive a reminder before the call
        </p>

        <div className={styles["phone-input-wrapper"]}>
          <label className={styles["input-label"]}>Phone Number</label>

          <div className={styles["phone-input-group"]}>
            <span className={styles["country-code"]}>+91</span>

            <input
              type="tel"
              className={styles["phone-input"]}
              value={phoneNumber}
              onChange={handlePhoneChange}
              maxLength="10"
              placeholder="Enter phone number"
              onKeyDown={(e) => {
                if (e.key === "Enter" && phoneNumber.length === 10)
                  handleSendOTP();
              }}
            />
          </div>
        </div>

        <button
          className={`${styles["otp-button"]} ${
            phoneNumber.length === 10 ? styles.active : ""
          }`}
          onClick={handleSendOTP}
          disabled={phoneNumber.length !== 10}
        >
          Send OTP
        </button>

        <div className={styles["contact-footer"]}>
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

          <span className={styles["footer-text"]}>
            Your data is 100% protected
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
