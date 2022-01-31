import { useAppSetup } from 'app/hooks';
import 'dayjs/locale/de';
import { registerRootComponent } from 'expo';
import AppLoading from 'expo-app-loading';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationThemeProvider } from 'theme';
import { App } from './app/App';
import './i18n/i18n';
import { configureAppStore } from './store/configureAppStore';

const { store, persistor } = configureAppStore();

const Root: FC = () => {
  const { appIsReady, setAppIsReady, setupApplication } = useAppSetup();

  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={setupApplication}
        onFinish={() => setAppIsReady(true)}
        onError={console.error}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationThemeProvider>
          <App />
        </ApplicationThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default registerRootComponent(Root);
