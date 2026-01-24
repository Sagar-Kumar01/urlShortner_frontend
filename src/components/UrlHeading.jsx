import React from 'react';
import styles from '../styles/UrlHeading.module.css';
import { FiChevronDown } from 'react-icons/fi';

const UrlHeading = () => {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.headingWrapper}>
        <div className={styles.urlHeading}>
          <span>Short Link</span>
          <span>Original Link</span>
          <span>Clicks</span>
          <span>Date</span>
        </div>
      </div>
    </div>
  );
};

export default UrlHeading;
