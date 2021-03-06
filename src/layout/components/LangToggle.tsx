import React, { FC } from 'react';
import '../scss/LangToggle.scss';

interface LangToggleProps {
  toggleLang: (id: string) => void,
  lang: any [],
}

const LangToggle: FC<LangToggleProps> = ({
  toggleLang,
  lang,
}) => {
  const langSelect = lang.filter((item) => item.lang);
  const langNotSelect = lang.filter((item) => !item.lang);
  return (
    <div className="lang">
      <ul className="lang__list ">
        {[...langSelect, ...langNotSelect].map((item) => (
          <li key={item.id} className={!item.lang ? 'lang__item ' : 'lang__item active'}>
            <button
              className="lang__btn btn"
              type="button"
              onClick={() => toggleLang(item.id)}
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

export default LangToggle;
