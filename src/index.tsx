import { IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { ApplicationThemeProvider } from 'theme';
import { App } from './app/App';
import './i18n/i18n';
import { configureAppStore } from './store/configureStore';

const store = configureAppStore();

export default registerRootComponent(() => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationThemeProvider>
      <App />
    </ApplicationThemeProvider>
  </Provider>
));
