import React from "react";
import styles from "./Alert.module.css";

const Alert = () => {
  return (
    <div className={styles.alertWrapper}>
      <p>Contact already exist !</p>
    </div>
  );
};

export default Alert;
