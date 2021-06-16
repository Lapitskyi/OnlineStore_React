import React from 'react';
import PropTypes from 'prop-types';
import './scss/Title.scss';

export const H1 = ({ title }) => (
  <div className="title">{title}</div>
);

export const H2 = ({ title }) => (
  <div className="title__h2">{title}</div>
);

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: '',
};
H1.propTypes = propTypes;
H1.defaultProps = defaultProps;
H2.propTypes = propTypes;
H2.defaultProps = defaultProps;
