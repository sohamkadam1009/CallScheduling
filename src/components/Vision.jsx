import React from "react";
import styles from "./Vision.module.css";

const Vision = () => {
  return (
    <div className={styles["vision-section"]}>
      <div className={styles["testimonial-container"]}>
        <div className={styles["profile-avatar"]}>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh"
            alt="Ananya Sharma"
            className={styles["avatar-img"]}
          />
        </div>

        <blockquote className={styles["testimonial-quote"]}>
          I never realized how much potential growth I was missing out on until
          this consultation.
        </blockquote>

        <div className={styles["testimonial-author"]}>
          <span className={styles["author-name"]}>- Ananya Sharma, </span>
          <span className={styles["author-title"]}>
            Co-founder, Horizon Capital
          </span>
        </div>
      </div>
    </div>
  );
};

export default Vision;
