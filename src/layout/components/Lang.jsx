import React from 'react';
import '../scss/Lang.scss';
import PropTypes from 'prop-types';

const Lang = ({
  langToggle,
  langT
}) => {
  return (
    <div className="lang">
      <ul className="lang__list ">
        {langT.map((item) => (
          <li key={item.id}>
            <button
              className={!item.lang ? 'lang__item ' : 'lang__item active'}
              type="button"
              onClick={() => langToggle(item.id)}
            >
              <img
                className="lang__img"
                src={item.imgLang}
                alt="lang"
              />
              {item.id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Lang.defaultProps = {
  langToggle: () => {
  },
  langT: []
};

Lang.propTypes = {
  langToggle: PropTypes.func,
  langT: PropTypes.arrayOf(PropTypes.object)
};

export default Lang;
