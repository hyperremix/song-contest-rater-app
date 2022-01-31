import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import { userReducer, userSliceKey } from 'store/user';
import { userPersistConfig } from 'store/user/persistConfig';

export const clearPersistStorage = () => {
  ExpoFileSystemStorage.removeItem(`persist-${userPersistConfig.key}`);
};

export const rootReducer = combineReducers({
  [userSliceKey]: persistReducer(userPersistConfig, userReducer),
});
