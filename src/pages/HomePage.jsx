import React, { useState } from 'react';
import Header from '../components/Header';
import Shortner from '../components/Shortner';
import UrlList from '../components/UrlList';
import UrlHeading from '../components/UrlHeading';
import { useContext } from 'react';
import { Context } from '../context/Context';
import '../App.css';

const HomePage = () => {
  const { online } = useContext(Context);

  return (
    <div className="pageContainer">
      <Header/>
      <Shortner />
      <UrlHeading />
      <div className="listSection">
        <UrlList />
      </div>
      <h1 style={{color:"red"}}>{online ? "" : "Please wait while the server is starting up..."}</h1>
    </div>
  );
};

export default HomePage;
