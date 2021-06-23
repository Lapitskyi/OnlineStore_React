import React from 'react';
import NavSideBar from './NavSideBar';
import '../scss/SideBar.scss';

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar__inner">
      <NavSideBar />
    </div>
  </div>
);

export default SideBar;
