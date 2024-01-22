import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import languageEN from "./languages/en/language.json";
import languageFR from "./languages/fr/language.json";
import languageRU from "./languages/ru/language.json";
import languageES from "./languages/es/language.json";
import languageZH from "./languages/zh/language.json";

const resources = {
  en: {
    translation: languageEN,
  },
  fr: {
    translation: languageFR,
  },
  ru: {
    translation: languageRU,
  },
  es: {
    translation: languageES,
  },
  zh: {
    translation: languageZH,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
