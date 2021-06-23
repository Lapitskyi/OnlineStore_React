import React, { FC } from 'react';
import '../scss/ThemeToggle.scss';
import sprite from '../../assets/spriteSvg/sprite.svg';

interface ThemeToggleProps {
  theme: boolean,
  toggleTheme: (theme: boolean) => void,
}
const ThemeToggle: FC<ThemeToggleProps> = ({
  theme,
  toggleTheme,
}) => {
  return (
    <div className="theme">
      <label htmlFor="checkbox">
        <input
          className="theme__input"
          type="checkbox"
          id="checkbox"
          checked={theme}
          onChange={() => toggleTheme(theme)}
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
export default ThemeToggle;
