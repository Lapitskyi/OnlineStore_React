import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import HomeContainer from '../page/Home/HomeContainer';
import HeaderContainer from './components/HeaderContainer';
import AuthContainer from '../page/Auth/AuthContainer';
import GoodsContainer from '../page/Goods/GoodsContainer';
import BasketContainer from '../page/Basket/BasketContainer';
import ProductContainer from '../page/Product/ProductContainer';
import Footer from './components/Footer';
import Delivery from '../page/Delivery/Delivery';
import About from '../page/About/About';
import Cabinet from '../page/Profile/Cabinet';

import './scss/MainLayout.scss';

interface MainLayoutProps {
  theme: boolean,
  lang: any [],
  toggleLang: () => void,
  toggleTheme: () => void
}

const MainLayout: FC<MainLayoutProps> = ({
  theme,
  lang,
  toggleLang,
  toggleTheme,
}) => (
  <div className={cn('wrapper', { wrapper__white: !theme, wrapper__dark: theme })}>

    <HeaderContainer
      theme={theme}
      lang={lang}
      toggleTheme={toggleTheme}
      toggleLang={toggleLang}
    />
    <div className="content">
      <Switch>
        <Route path="/" exact render={() => <HomeContainer />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/goods" exact render={() => <GoodsContainer />} />
        <Route path="/goods/:productId" render={() => <ProductContainer />} />
        <Route path="/delivery" render={() => <Delivery />} />
        <Route path="/auth" render={() => <AuthContainer />} />
        <Route path="/cart" render={() => <BasketContainer />} />
        <Route path="/cabinet" render={() => <Cabinet />} />
      </Switch>
    </div>
    <Footer />
  </div>

);

export default MainLayout;
