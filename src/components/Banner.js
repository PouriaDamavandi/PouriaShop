import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/Banner.png";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="Banners place" />
      <div className={styles.textContainer}>
        <h1>Pouria Damavandi</h1>
        <p>This is the Test Paragraph</p>
      </div>
    </div>
  );
};

export default Banner;
