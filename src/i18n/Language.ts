export enum Language {
  English = 'en',
  German = 'de',
}

export const DefaultLanguage = Language.English;

export const getSupportedLanguage = (language: string): Language =>
  (Object.keys(Language).find(
    (supportedLanguage) => supportedLanguage === getShortLanguage(language),
  ) as Language) ?? Language.English;

export const getShortLanguage = (language: string): string =>
  language.split('-')[0];
