import React from "react";
import styles from "./LoadingPage.module.css";
import Abhishek from "../assets/abhishek.webp";
import Pooja from "../assets/pooja.webp";
import Varun from "../assets/varun.webp";

const LoadingPage = () => {
  return (
    <div className={styles["loading-page"]}>
      <div className={styles.container}>
        <div className={styles["profiles-container"]}>
          <div
            className={`${styles["profile-wrapper"]} ${styles["profile-1"]}`}
          >
            <img
              src={Pooja}
              alt="Investment Expert 1"
              className={styles["profile-pic"]}
            />
          </div>

          <div
            className={`${styles["profile-wrapper"]} ${styles["profile-2"]}`}
          >
            <img
              src={Abhishek}
              alt="Investment Expert 2"
              className={`${styles["profile-pic"]} ${styles["profile-pic-main"]}`}
            />
          </div>

          <div
            className={`${styles["profile-wrapper"]} ${styles["profile-3"]}`}
          >
            <img
              src={Varun}
              alt="Investment Expert 3"
              className={styles["profile-pic"]}
            />
          </div>
        </div>

        <h1 className={styles.title}>Congratulations!</h1>

        <p className={styles.subtitle}>
          your meeting has been scheduled with one of your experts from Investza
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
