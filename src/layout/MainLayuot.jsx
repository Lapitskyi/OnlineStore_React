import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import Footer from './components/Footer';
import DiliveryPayment from '../page/Dilivery/DiliveryPayment';
import Auth from '../page/Auth/Auth';
import About from '../page/About/About';
import Home from '../page/Home/Home';
import MerchContainer from '../page/Merch/MerchContainer';
import './scss/MainLayout.scss';

const MainLayuot = () => (
  <div className="wrapper">
    <HeaderContainer />
    <div className="content">
      <Route path="/" exact render={() => <Home />} />
      <Route path="/about" render={() => <About />} />
      <Route path="/merch" render={() => <MerchContainer />} />
      <Route path="/dilivery" render={() => <DiliveryPayment />} />
      <Route path="/auth" render={() => <Auth />} />
    </div>
    <Footer />
  </div>

);

export default MainLayuot;
