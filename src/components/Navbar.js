import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../images/loremlogo.svg"
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.lists}>
          <li>Home Page</li>
          <li>Products</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className={styles.logo}>
          <img className={styles.logo} src={Logo} alt="Lorem Logo"/>
      </div>
    </header>
  );
};

export default Navbar;
