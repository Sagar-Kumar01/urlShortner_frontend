import React, { useEffect } from "react";
import styles from "../styles/UrlList.module.css";
import { useContext } from "react";
import { Context } from "../context/Context";


const UrlList = () => {
  const { allUrls, setAllUrls } = useContext(Context);

  return (
    <div className={styles.urlTableContainer}>
      <div className={styles.tableWrapper}>
        {allUrls.map((url) => (
          <div key={url.shortUrl} className={styles.urlRow}>
            {/* Short Link */}
            <div className={styles.shortLinkColumn}>
              <a
                href={`/?code=${url.shortUrl}`}
                className={styles.shortLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${window.location.origin}/${url.shortUrl}`}
              </a>
            </div>

            {/* Original Link */}
            <div className={styles.originalLinkColumn}>
              <a
                href={url.longUrl}
                className={styles.originalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {url.longUrl}
              </a>
            </div>

            {/* Clicks */}
            <div className={styles.clicksColumn}>
              {url.clicks.toLocaleString()}
            </div>

            {/* Date */}
            <div className={styles.dateColumn}>{url.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrlList;
