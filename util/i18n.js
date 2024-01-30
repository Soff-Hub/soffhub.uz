// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import translationRu from '../public/locales/ru.json'; // French translation file
import translationEN from '../public/locales/en.json'; // English translation file
import translationUz from '../public/locales/uz.json'; // French translation file


// Add your i18next configuration options here
const options = {
  resources: {
    ru: {
      translation: translationRu
    },
    en: {
      translation: translationEN
    },
    uz: {
      translation: translationUz
    },
  
  },
  lng: 'ru', 
  fallbackLng: 'ru', // Orqaga qaytish til
  interpolation: {
    escapeValue: false // HTML qatlamalarini qattiq qilib ko'rsatish
  }
};

i18n.use(initReactI18next).init(options);

export default i18n;
