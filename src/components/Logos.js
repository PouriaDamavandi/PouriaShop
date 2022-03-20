import React from "react";
import styles from "./Logos.module.css";
import Anxiety from "../images/anxiety.jpg";
import YesorNo from "../images/yesorno.jpg";

const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>What Should I Do?</h3>
      <img src={Anxiety} alt="Anxiety" />
      <img src={YesorNo} alt="YesorNo" />
    </div>
  );
};

export default Logos;
