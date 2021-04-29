import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './scss/MainLayout.scss';
import Dilivery from '../page/Dilivery/Dilivery';

const MainLayuot = () => (
  <div className="wrapper">

    <Header />
    <div className="content">
      <div className="container">
        <Route path="/dilivery" render={() => <Dilivery />} />
      </div>
    </div>
    <Footer />

  </div>

);

export default MainLayuot;
