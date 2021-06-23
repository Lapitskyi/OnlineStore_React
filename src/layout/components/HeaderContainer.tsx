import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import useShowMenu from '../../useHook/useShowMenu';
import { getBasketProduct } from '../../redux/selector';
import { AppStateType } from '../../redux/store';

interface HeaderContainerProps {
  theme: boolean,
  lang: any[],
  toggleTheme: (theme: boolean) => void,
  toggleLang: (id: string) => void,

}
const HeaderContainer: FC<HeaderContainerProps> = ({
  theme, lang, toggleLang, toggleTheme,
}) => {
  const { showMenu, onShowMenu, closeMenu } = useShowMenu(false);
  const products = useSelector(({ basket: { goodsOrder } }: AppStateType) => getBasketProduct(goodsOrder));

  return (
    <Header
      products={products}
      showMenu={showMenu}
      onShowMenu={onShowMenu}
      closeMenu={closeMenu}
      theme={theme}
      lang={lang}
      toggleTheme={toggleTheme}
      toggleLang={toggleLang}
    />
  );
};

export default HeaderContainer;
