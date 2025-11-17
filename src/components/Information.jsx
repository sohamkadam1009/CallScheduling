import React from "react";
import styles from "./Information.module.css";

const Information = () => {
  return (
    <div className={styles["information-section"]}>
      <div className={styles["profile-badge"]}>
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=expert"
          alt="Profile"
          className={styles["profile-img"]}
        />
        <div className={styles["verified-badge"]}>✓</div>
      </div>

      <h1 className={styles.title}>1:1 with an Investza Wealth Expert</h1>
      <p className={styles.subtitle}>Free • No obligations</p>

      <p className={styles.description}>
        Take control of your financial future. Learn how Investza PMS protects,
        manages, and grows your wealth with confidence.
      </p>

      <div className={styles["video-card"]}>
        <div className={styles["video-thumbnail"]}>
          <video
            src="https://d21ldyuk035o7q.cloudfront.net/websiteVideos/calendly_booking_video.mp4"
            className={styles["thumbnail-video"]}
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Information;
