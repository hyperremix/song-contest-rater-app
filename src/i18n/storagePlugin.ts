import * as Localization from 'expo-localization';
import { LanguageDetectorAsyncModule } from 'i18next';
import { storage } from 'utils/storage';

const languagStorageKey = 'song-contest-rater-language';

const detectUserLanguage = async (
  callback: (lang: string) => void,
): Promise<void> =>
  Localization.getLocalizationAsync().then((localization) =>
    callback(localization.locale.split('-')[0]),
  );

export const storagePlugin = (): LanguageDetectorAsyncModule => ({
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback) => {
    const result = await storage.getValue(languagStorageKey);
    return result ? callback(result) : detectUserLanguage(callback);
  },
  cacheUserLanguage: async (language: string) => {
    storage.storeValue(languagStorageKey, language);
  },
});
