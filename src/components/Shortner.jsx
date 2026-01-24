import React, { useState } from "react";
import styles from "../styles/Shortner.module.css";
import { FiLink } from "react-icons/fi";


const Shortner = () => {

  return (
    <div className={styles.shortner}>
      <h1>Shorten Your Loooong Links :)</h1>
      <p>
        SortSortLink is an efficient and easy-to-use URL shortening service that streamlines your online experience.
      </p>

      <div className={styles.inputContainer}>
        <input type="text" placeholder="Enter the link here" />
        <button className={styles.shortenBtn}>Shorten Now!</button>
      </div>
    </div>
  );
};

export default Shortner;
