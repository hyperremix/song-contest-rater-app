import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import { LanguageDetectorAsyncModule } from 'i18next';

const languagStorageKey = 'song-contest-rater/language';

const detectUserLanguage = async (
  callback: (lang: string) => void,
): Promise<void> =>
  Localization.getLocalizationAsync().then((localization) =>
    callback(localization.locale.split('-')[0]),
  );

export const asyncStoragePlugin = (): LanguageDetectorAsyncModule => ({
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback) => {
    try {
      const language = await AsyncStorage.getItem(languagStorageKey);
      if (language) {
        return callback(language);
      }

      return detectUserLanguage(callback);
    } catch (error) {
      detectUserLanguage(callback);
    }
  },
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(languagStorageKey, language);
    } catch (error) {
      // do nothing
    }
  },
});
