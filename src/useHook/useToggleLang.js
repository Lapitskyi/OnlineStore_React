import { useState } from 'react';

import en from '../assets/icon/eng.png';
import ua from '../assets/icon/ua.png';
import ru from '../assets/icon/rus.png';

const useShowActive = () => {
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

  const toggleLang = () => {
    setLang(lang);
  };
  return {
    lang,
    toggleLang,

  };
};
export default useShowActive;
