import React, { useEffect } from "react";
import styles from "../styles/UrlList.module.css";
import { useContext } from "react";
import { Context } from "../context/Context";


const UrlList = () => {
  const { allUrls, user } = useContext(Context);

  return (
    <div className={styles.urlTableContainer}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {!user && (
          <div className={styles.guestWarning}>
            ⚠️ Links generated as a guest are not saved. Login to keep them permanently!
          </div>
        )}
        <div className={styles.tableWrapper}>
          {allUrls.map((url) => (
            <div key={url.shortUrl} className={styles.urlRow}>
              {/* Short Link */}
              <div className={styles.shortLinkColumn}>
                <span className={styles.mobileLabel}>Short Link:</span>
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
                <span className={styles.mobileLabel}>Original Link:</span>
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
                <span className={styles.mobileLabel}>Clicks:</span>
                {url.clicks.toLocaleString()}
              </div>

              {/* Date */}
              <div className={styles.dateColumn}>
                <span className={styles.mobileLabel}>Date:</span>
                {new Date(url.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrlList;
