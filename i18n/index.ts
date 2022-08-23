import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_source from './locale/en_source';
import ar_source from './locale/ar_source';

const resources = {
  en: {
    translation: en_source
  },
  ar: {
    translation: ar_source
  }
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;