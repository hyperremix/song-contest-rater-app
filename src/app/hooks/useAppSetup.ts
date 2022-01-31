import { initI18n } from 'i18n/i18n';
import { useState } from 'react';

export const useAppSetup = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  const setupApplication = async () => {
    await initI18n();
  };

  return { appIsReady, setAppIsReady, setupApplication };
};
