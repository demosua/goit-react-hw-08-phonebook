
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './contacts/filterSlice';
import { contactsApi } from './contacts/contactsSlice';
import { api } from './auth/api';
import  authReducer  from '../redux/auth/authSlice'
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ [api.reducerPath]: api.reducer, [contactsApi.reducerPath]: contactsApi.reducer, filter: filterReducer, auth: authReducer })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), api.middleware, contactsApi.middleware,]
})

export const persistor = persistStore(store)