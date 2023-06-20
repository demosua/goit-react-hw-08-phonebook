
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './contacts/filterSlice';
import { api } from './backend/api';
import  authReducer  from 'redux/auth/authSlice';
import { contactsApi } from 'redux/contacts/contactsApi';
import contactsReducer from 'redux/contacts/contactsSlice';
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
  combineReducers({ [api.reducerPath]: api.reducer, [contactsApi.reducerPath]: contactsApi.reducer, filter: filterReducer, auth: authReducer, contacts: contactsReducer })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), api.middleware, contactsApi.middleware]
})

export const persistor = persistStore(store)