import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en';
import ua from './ua';
import ru from './ru';

const resources = {
  en: { translation: en },
  ua: { translation: ua },
  ru: { translation: ru }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    react: {
      useSuspense: false
    },
    detection: {
      order: ['cookie', 'localStorage'],
      caches: ['cookie', 'localStorage']
    }
  });
export default i18n;
