import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files

import translationEN from 'public/locales/en/common.json';
import translationKM from 'public/locales/km/common.json';

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN
  },
  km: {
    translation: translationKM
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en' //default language,
});

export default i18n;
