import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../images/loremlogo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <ul className={styles.lists}>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={Logo} alt="Lorem Logo" />
      </div>
    </header>
  );
};

export default Navbar;
