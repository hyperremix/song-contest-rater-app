import i18next, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DefaultLanguage, Language } from './Language';
import de from './locales/de.json';
import en from './locales/en.json';
import { storagePlugin } from './storagePlugin';
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

export const initI18n = async () => {
  await i18next
    .use(initReactI18next)
    .use(storagePlugin())
    .init({
      resources,
      fallbackLng: DefaultLanguage,
      returnEmptyString: false,
      interpolation: {
        escapeValue: false,
      },
    });
};

export default i18next;
