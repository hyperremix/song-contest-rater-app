import * as eva from '@eva-design/material';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { registerRootComponent } from 'expo';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useThemeSlice } from 'theme/slice';
import { selectIsLightTheme } from 'theme/slice/selectors';
import { getThemeFromStorage } from 'theme/slice/utils';
import { App } from './app';
// Initialize languages
import './locales/i18n';
import { configureAppStore } from './store/configureStore';

const store = configureAppStore();

const Root = () => {
  const { actions } = useThemeSlice();
  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    getThemeFromStorage().then((isLightTheme) => {
      dispatch(actions.changeTheme(isLightTheme));
    });
  });

  const isLightTheme = useSelector(selectIsLightTheme);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={eva[isLightTheme ? 'light' : 'dark']}
      >
        <App />
      </ApplicationProvider>
    </>
  );
};

export default registerRootComponent(() => (
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>
));

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}
