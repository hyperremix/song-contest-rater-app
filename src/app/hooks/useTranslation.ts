import { useTranslation as i18nextUseTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = i18nextUseTranslation();
  return {
    t: (key: string, interpolationMap?: { [key: string]: string }): string =>
      t(key, interpolationMap),
    i18n,
  };
};
