import React from 'react';

import SideBar from './components/SideBar';

import './scss/Home.scss';
import HomeContent from './components/HomeContent';

const Home = () => (
  <div className="container">
    <div className="home">
      <SideBar />
      <HomeContent />
    </div>
  </div>
);
Home.defaultProps = {};
Home.propTypes = {};
export default Home;
