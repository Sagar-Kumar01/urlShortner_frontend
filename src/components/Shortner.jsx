import { useState,useContext } from "react";
import styles from "../styles/shortner.module.css";
import { Context } from "../context/Context";

const Shortner = () => {
  const { allUrls, setAllUrls } = useContext(Context);
  let [inputUrl, setInputUrl] = useState("");


  function handelSend(){
    fetch(`${import.meta.env.VITE_BACKEND_URL}/url/short`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ longUrls: inputUrl })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        setAllUrls([{shortUrl:data.shortUrl,longUrl:data.longUrl,clicks:data.clicks,createdAt:data.createdAt}, ...allUrls]);
        setInputUrl("");
      } else if (data.message === "Unauthorized - Invalid token") {
        alert("Invalid or expired token. Please login again.");
      } else {
        alert(data.message || "Failed to create short URL");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error creating short URL");
    });
  }

  return (
    <div className={styles.shortner}>
      <h1>Shorten Your Loooong Links :)</h1>
      <p>
        SortSortLink is an efficient and easy-to-use URL shortening service that streamlines your online experience.
      </p>

      <div className={styles.inputContainer}>
        <input type="text" placeholder="Enter the link here" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
        <button className={styles.shortenBtn} onClick={handelSend}>Shorten Now!</button>
      </div>
    </div>
  );
};

export default Shortner;
