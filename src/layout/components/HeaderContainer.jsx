import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { toggleLang } from '../../redux/translate-reducer';

const HeaderContainer = ({ menu, langT, ...props }) => {
  const [showMenu, setShowMenu] = useState(false);
  const onShowMenu = () => {
    setShowMenu(!!showMenu === false);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  const langToggle = (langId) => {
    props.toggleLang(langId);
  };

  return (
    <Header
      showMenu={showMenu}
      onShowMenu={onShowMenu}
      closeMenu={closeMenu}
      menu={menu.en}
      langT={langT}
      langToggle={langToggle}
    />
  );
};

const mapStateToProps = ({ translate }) => ({
  menu: translate.menu,
  langT: translate.langT,

});

export default compose(
  connect(mapStateToProps, { toggleLang })
)(HeaderContainer);

HeaderContainer.defaultProps = {
  menu: [],
  langT: [],
  toggleLang: () => {},
};

HeaderContainer.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  langT: PropTypes.arrayOf(PropTypes.object),
  toggleLang: PropTypes.func,
};
