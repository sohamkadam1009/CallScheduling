import React, { useEffect } from "react";
import styles from "./LoadingPage.module.css"; // UPDATED
import image from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/scheduleCall");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles["loading-page"]}>
      <div className={styles.container}>
        <div className={styles["profiles-container"]}>
          <div
            className={`${styles["profile-wrapper"]} ${styles["profile-1"]}`}
          >
            <img
              src={image}
              alt="Investment Expert 1"
              className={styles["profile-pic"]}
            />
          </div>

          <div
            className={`${styles["profile-wrapper"]} ${styles["profile-2"]}`}
          >
            <img
              src={image}
              alt="Investment Expert 2"
              className={`${styles["profile-pic"]} ${styles["profile-pic-main"]}`}
            />
          </div>

          <div
            className={`${styles["profile-wrapper"]} ${styles["profile-3"]}`}
          >
            <img
              src={image}
              alt="Investment Expert 3"
              className={styles["profile-pic"]}
            />
          </div>
        </div>

        <h1 className={styles.title}>
          Congratulations! You are eligible for Investza PMS
        </h1>

        <p className={styles.subtitle}>
          Assigning a Investza investment expert. Please avoid clicking back or
          closing the window
          <span className={styles["loading-dots"]}>
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
