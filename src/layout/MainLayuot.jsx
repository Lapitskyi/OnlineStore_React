import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import Footer from './components/Footer';
import DiliveryPayment from '../page/Dilivery/DiliveryPayment';
import AuthConteiner from '../page/Auth/AuthConteiner';
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
      <Route path="/auth" render={() => <AuthConteiner />} />
    </div>
    <Footer />
  </div>

);

export default MainLayuot;
