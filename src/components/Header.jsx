import React from "react";
import styles from "../styles/Header.module.css";
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.logoSection}>
        <h2>SortSortLink</h2>
      </div>

      <div className={styles.authSection}>
        <button>
          <span>Login</span>
          <FiArrowRight />
        </button>
        <button className={styles.signup}>Register Now!</button>
      </div>
    </header>
  );
};

export default Header;
