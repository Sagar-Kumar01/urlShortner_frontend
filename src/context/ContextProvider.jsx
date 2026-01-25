import { Context } from "./Context";
import React, { useState,useEffect } from "react";

const ContextProvider = ({children}) => {
  let [allUrls, setAllUrls] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('isLogin') === 'true') {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/url/getAll`, {
        credentials: 'include'
      })
        .then((response) => response.json())
        .then((data) => setAllUrls(data.allUrl))
        .catch((error) => console.log(error));
    }
  }, []);
  console.log(allUrls)

  return (
    <Context.Provider value={{allUrls, setAllUrls}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
