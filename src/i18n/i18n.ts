import i18next, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { asyncStoragePlugin } from './asyncStoragePlugin';
import { DefaultLanguage, Language } from './Language';
import de from './locales/de.json';
import en from './locales/en.json';
import { convertLanguageJsonToObject } from './translations';

export const resources: Record<Language, ResourceLanguage> = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

convertLanguageJsonToObject(en);

export const i18n = i18next
  .use(initReactI18next)
  .use(asyncStoragePlugin())
  .init({
    resources,
    fallbackLng: DefaultLanguage,
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  });
