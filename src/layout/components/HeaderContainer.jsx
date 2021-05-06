import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './Header';
import { themeToggle, toggleLang } from '../../redux/showAction-reducer';

const HeaderContainer = ({
  menu,
  langT,
  themeT,
  ...props
}) => {
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

  const toggleTheme = () => {
    props.themeToggle();
  };

  return (
    <Header
      showMenu={showMenu}
      onShowMenu={onShowMenu}
      closeMenu={closeMenu}
      menu={menu.en}
      langT={langT}
      langToggle={langToggle}
      toggleTheme={toggleTheme}
      themeT={themeT}
    />
  );
};

const mapStateToProps = ({ showAction }) => ({
  menu: showAction.menu,
  langT: showAction.langT,
  themeT: showAction.themeT
});

export default compose(
  connect(mapStateToProps, { toggleLang, themeToggle })
)(HeaderContainer);

HeaderContainer.defaultProps = {
  menu: [],
  langT: [],
  themeT: false,
  toggleLang: () => {
  },
  themeToggle: () => {
  }
};

HeaderContainer.propTypes = {
  themeT: PropTypes.bool,
  menu: PropTypes.arrayOf(PropTypes.object),
  langT: PropTypes.arrayOf(PropTypes.object),
  toggleLang: PropTypes.func,
  themeToggle: PropTypes.func
};
