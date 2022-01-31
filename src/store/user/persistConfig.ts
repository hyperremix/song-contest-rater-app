import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import { PersistConfig } from 'redux-persist/es/types';
import { rootPersistKey } from 'store/rootPersistKey';
import { TUserState } from 'store/user/types';

export const userPersistConfig: PersistConfig<TUserState> = {
  whitelist: ['isAuthenticated'],
  key: `${rootPersistKey}-user`,
  storage: ExpoFileSystemStorage,
  version: 1,
};
