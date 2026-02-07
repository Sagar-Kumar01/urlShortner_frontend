import { Context } from "./Context";
import React, { useState, useEffect } from "react";

const ContextProvider = ({ children }) => {
  let [allUrls, setAllUrls] = useState([]);
  let [online, setOnline] = useState(false);

  let [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/health`)
      .then((response) => {
        if (response.ok) {
          setOnline(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setOnline(false);
      });

    if (localStorage.getItem('isLogin') === 'true') {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/url/getAll`, {
        credentials: 'include'
      })
        .then((response) => {
          if (response.status === 401 || response.status === 403) {
            // Token is invalid or missing, but localStorage says logged in
            localStorage.removeItem('isLogin');
            localStorage.removeItem('user');
            setUser(null);
            setAllUrls([]);
            throw new Error("Session expired");
          }
          if (!response.ok) {
            throw new Error("Failed to fetch URLs");
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.allUrl) {
            setAllUrls(data.allUrl);
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);


  return (
    <Context.Provider value={{ allUrls, setAllUrls, online, setOnline, user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
