import React from 'react';
import PropTypes from 'prop-types';
import '../scss/ThemeToggle.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

const ThemeToggle = ({
  themeT,
  toggleTheme
}) => {
  return (
    <div className="theme">
      <label htmlFor="checkbox">
        <input
          className="theme__input"
          type="checkbox"
          id="checkbox"
          checked={themeT}
          onChange={() => toggleTheme(themeT)}
        />
        <div className="theme__label">
          <svg className="theme__icon">
            <use href={`${sprite}#moon`} />
          </svg>
          <svg className="theme__icon">
            <use href={`${sprite}#sun`} />
          </svg>
          <div className="theme__ball" />
        </div>

      </label>
    </div>
  );
};
ThemeToggle.defaultProps = {
  themeT: false,
  toggleTheme: () => {
  }

};
ThemeToggle.propTypes = {
  themeT: PropTypes.bool,
  toggleTheme: PropTypes.func

};

export default ThemeToggle;
