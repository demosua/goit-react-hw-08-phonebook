
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './contacts/filterSlice';
import { contactsApi } from './contacts/contactsSlice';
import { authorizationApi } from './auth/authSlice';
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
  combineReducers({ [authorizationApi.reducerPath]: authorizationApi.reducer, [contactsApi.reducerPath]: contactsApi.reducer, filter: filterReducer })
);

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: filterReducer,
//   },
//     middleware: getDefaultMiddleware => [
//       ...getDefaultMiddleware(), contactsApi.middleware,
//     ],
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), authorizationApi.middleware, contactsApi.middleware,]
})

export const persistor = persistStore(store)