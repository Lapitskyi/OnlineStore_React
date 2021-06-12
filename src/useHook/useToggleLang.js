import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import en from '../assets/icon/eng.png';
import ua from '../assets/icon/ua.png';
import ru from '../assets/icon/rus.png';

const useToggleLang = () => {
  const [lang, setLang] = useState([
    {
      id: 'en',
      lang: true,
      imgLang: en
    },
    {
      id: 'ua',
      lang: false,
      imgLang: ua
    },
    {
      id: 'ru',
      lang: false,
      imgLang: ru
    }
  ]);
  const { i18n } = useTranslation();

  const toggleLang = (id) => {
    i18n.changeLanguage(id);

    setLang(
      lang.map((itemLang) => {
        if (itemLang.id === id) {
          return {
            ...itemLang,
            lang: true
          };
        }
        if (itemLang.id !== id) {
          return {
            ...itemLang,
            lang: false
          };
        }
        return itemLang;
      })
    );
  };
  return {
    lang,
    toggleLang
  };
};
export default useToggleLang;
