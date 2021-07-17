import { createContext } from "react";

export const locales = [
  {
    code: "en_US",
    label: "English",
  },
  {
    code: "de_DE",
    label: "Deutsch",
  },
];

export const Locale = {
  language: locales[0].code,
  setLanguage: () => {},
};

export const getShortLocale = (locale) => locale.substr(0, 2);
export const LocaleContext = createContext(Locale);
