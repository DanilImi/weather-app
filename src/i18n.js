import i18n from 'i18next';
//import Backend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const en = require('./locales/en/translation.json')
const ru = require('./locales/ru/translationRu.json')
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {...en}
      },
      ru: {
        translations: {...ru}
      }
    },
    fallbackLng: 'en',
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
})

export default i18n