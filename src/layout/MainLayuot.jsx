import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './scss/MainLayout.scss';
import DiliveryPayment from '../page/Dilivery/DiliveryPayment';
import Auth from '../page/Auth/Auth';
import About from '../page/About/About';
import Home from '../page/Home/Home';

const MainLayuot = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/" exact render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/dilivery" render={() => <DiliveryPayment />} />
      <Route path="/auth" render={() => <Auth />} />
    </div>
    <Footer />
  </div>

);

export default MainLayuot;
