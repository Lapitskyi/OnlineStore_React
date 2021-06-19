import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import HeaderContainer from './components/HeaderContainer';
import AuthContainer from '../page/Auth/AuthContainer';
import GoodsContainer from '../page/Goods/GoodsContainer';
import BasketContainer from '../page/Basket/BasketConteiner';
import ProductContainer from '../page/Product/ProductContainer';
import Footer from './components/Footer';
import Delivery from '../page/Delivery/Delivery';
import About from '../page/About/About';
import Home from '../page/Home/Home';
import Cabinet from '../page/Profile/Cabinet';

import './scss/MainLayout.scss';

const MainLayout = ({
  theme, lang, toggleLang, toggleTheme,
}) => (
  <div className={cn({ 'wrapper wrapper__white': !theme, 'wrapper wrapper__dark': theme })}>
    <HeaderContainer
      theme={theme}
      lang={lang}
      toggleTheme={toggleTheme}
      toggleLang={toggleLang}
    />
    <div className="content">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/goods" exact render={() => <GoodsContainer />} />
        <Route path="/goods/:productId" render={() => <ProductContainer />} />
        <Route path="/delivery" render={() => <Delivery />} />
        <Route path="/auth" render={() => <AuthContainer />} />
        <Route path="/cart" render={() => <BasketContainer product="text" />} />
        <Route path="/cabinet" render={() => <Cabinet />} />

      </Switch>
    </div>
    <Footer />
  </div>

);

MainLayout.defaultProps = {
  theme: false,
  lang: [],
  toggleTheme: () => {
  },
  toggleLang: () => {
  },
};

MainLayout.propTypes = {
  theme: PropTypes.bool,
  lang: PropTypes.arrayOf(PropTypes.object),
  toggleTheme: PropTypes.func,
  toggleLang: PropTypes.func,
};
export default MainLayout;
