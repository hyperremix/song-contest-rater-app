import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'store/rootReducer';
import { rootSaga } from 'store/rootSaga';

export const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
