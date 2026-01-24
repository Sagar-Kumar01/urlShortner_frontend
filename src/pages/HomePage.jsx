import React from 'react';
import Header from '../components/Header';
import Shortner from '../components/Shortner';
import UrlList from '../components/UrlList';
import UrlHeading from '../components/UrlHeading';
import '../App.css';

const HomePage = () => {
  return (
    <div className="pageContainer">
      <Header />
      <Shortner />
      <UrlHeading />
      <div className="listSection">
        <UrlList />
      </div>
    </div>
  );
};

export default HomePage;
