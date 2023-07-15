// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import translationEN from '../public/locales/en.json'; // English translation file
import translationUz from '../public/locales/uz.json'; // French translation file


// Add your i18next configuration options here
const options = {
  resources: {
    en: {
      translation: translationEN
    },
    uz: {
      translation: translationUz
    },
  },
  fallbackLng: 'en',
  debug: true,
};

i18n.use(initReactI18next).init(options);

export default i18n;
