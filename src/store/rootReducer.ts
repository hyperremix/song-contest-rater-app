// [IMPORT NEW REDUCER ABOVE]
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import { userReducer, userSliceKey } from 'store/user';
import { userPersistConfig } from 'store/user/persistConfig';

export const clearPersistStorage = () => {
  ExpoFileSystemStorage.removeItem('persist-' + userPersistConfig.key);
  // [INSERT NEW REDUCER KEY ABOVE]
};

export const rootReducer = combineReducers({
  [userSliceKey]: persistReducer(userPersistConfig, userReducer),
  // [INSERT NEW PERSISTED REDUCER ABOVE]
});
