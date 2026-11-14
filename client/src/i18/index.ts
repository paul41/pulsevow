
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import bn from './locales/bn/translation.json';
import ta from './locales/ta/translation.json';
import te from './locales/te/translation.json';
import mr from './locales/mr/translation.json';
import kn from './locales/kn/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
        en: { translation: en },
        hi: { translation: hi },
        bn: { translation: bn },
        ta: { translation: ta },
        te: { translation: te },
        mr: { translation: mr },
        kn: { translation: kn }
    },

    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'bn', 'ta', 'te', 'mr', 'kn'],

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
