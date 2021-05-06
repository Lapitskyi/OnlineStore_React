import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import App from './App';

const AppContainer = ({ themeT }) => {
  return (
    <App themeT={themeT} />
  );
};

const mapStateToProps = ({ showAction }) => ({
  themeT: showAction.themeT
});

export default compose(
  connect(mapStateToProps, {})
)(AppContainer);

AppContainer.defaultProps = {
  themeT: false,
};
AppContainer.propTypes = {
  themeT: PropTypes.bool,
};
