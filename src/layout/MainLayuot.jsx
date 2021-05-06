import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import Footer from './components/Footer';
import Delivery from '../page/Delivery/Delivery';
import AuthConteiner from '../page/Auth/AuthConteiner';
import About from '../page/About/About';
import Home from '../page/Home/Home';
import GoodsContainer from '../page/Goods/GoodsContainer';
import BasketContainer from '../page/Basket/BasketConteiner';
import './scss/MainLayout.scss';

const MainLayuot = () => (
  <div className="wrapper">
    <HeaderContainer />
    <div className="content">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/goods" render={() => <GoodsContainer />} />
        <Route path="/dilivery" renyder={() => <Delivery />} />
        <Route path="/auth" render={() => <AuthConteiner />} />
        <Route path="/cart" render={() => <BasketContainer product="text" />} />
        <Redirect to="/" />
      </Switch>
    </div>
    <Footer />
  </div>

);

export default MainLayuot;
