import React from 'react';
import styles from '../styles/UrlList.module.css';

// Sample data for demonstration
const sampleUrls = [
  {
    id: 1,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://www.twitter.com/tweets/8erelCoihu/',
    clicks: 1313,
    date: 'Oct - 10 -2023'
  },
  {
    id: 2,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://www.youtube.com/watch?v=8J7ZmHOiXuk',
    clicks: 4313,
    date: 'Oct - 08 -2023'
  },
  {
    id: 3,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://www.adventuresinwanderlust.com/',
    clicks: 1013,
    
    date: 'Oct - 01 -2023'
  },
  {
    id: 4,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://vimeo.com/625257654',
    clicks: 1313,
    date: 'Sep - 20 -2023'
  },
  {
    id: 5,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://unsplash.com/photos/2KjfNwOzfFVQ',
    clicks: 1423,
    date: 'Sep - 18 -2023'
  },
  {
    id: 6,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://unsplash.com/photos/2KjfNwOzfFVQ',
    clicks: 1423,
    date: 'Sep - 18 -2023'
  },
  {
    id: 7,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://unsplash.com/photos/2KjfNwOzfFVQ',
    clicks: 1423,
    date: 'Sep - 18 -2023'
  },
  {
    id: 8,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://unsplash.com/photos/2KjfNwOzfFVQ',
    clicks: 1423,
    date: 'Sep - 18 -2023'
  },
  {
    id: 9,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://unsplash.com/photos/2KjfNwOzfFVQ',
    clicks: 1423,
    date: 'Sep - 18 -2023'
  },
  {
    id: 10,
    shortUrl: 'https://linkly.com/Bn41aCOlnxj',
    originalUrl: 'https://unsplash.com/photos/2KjfNwOzfFVQ',
    clicks: 1423,
    date: 'Sep - 18 -2023'
  }
];


const UrlList = () => {

  return (
    <div className={styles.urlTableContainer}>
      <div className={styles.tableWrapper}>

        {sampleUrls.map((url) => (
          <div key={url.id} className={styles.urlRow}>

            {/* Short Link */}
            <div className={styles.shortLinkColumn}>
              <a href={url.shortUrl} className={styles.shortLink} target="_blank" rel="noopener noreferrer">
                {url.shortUrl}
              </a>
            </div>

            {/* Original Link */}
            <div className={styles.originalLinkColumn}>
              <a href={url.originalUrl} className={styles.originalLink} target="_blank" rel="noopener noreferrer">
                {url.originalUrl}
              </a>
            </div>


            {/* Clicks */}
            <div className={styles.clicksColumn}>
              {url.clicks.toLocaleString()}
            </div>


            {/* Date */}
            <div className={styles.dateColumn}>
              {url.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrlList;
