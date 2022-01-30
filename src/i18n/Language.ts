export enum Language {
  en = 'en',
  de = 'de',
}

export const DefaultLanguage = Language.en;

export const getSupportedLanguage = (language: string): Language =>
  (Object.keys(Language).find(
    (supportedLanguage) => supportedLanguage === getShortLanguage(language),
  ) as Language) ?? Language.en;

export const getShortLanguage = (language: string): string =>
  language.split('-')[0];
