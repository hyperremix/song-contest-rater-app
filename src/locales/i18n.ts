import i18next from 'i18next';
import AsyncStoragePlugin from 'i18next-react-native-async-storage';
import i18nextReactNative from 'i18next-react-native-language-detector';
import { initReactI18next } from 'react-i18next';
import de from './de/translation.json';
import en from './en/translation.json';
import { convertLanguageJsonToObject } from './translations';

export const translationsJson = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en);

export const i18n = i18next
  .use(initReactI18next)
  .use(i18nextReactNative)
  .use(AsyncStoragePlugin('en'))
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
