
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import { contactsApi } from './contactsSlice';
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
  combineReducers({ [contactsApi.reducerPath]: contactsApi.reducer, filter: filterReducer })
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
  middleware (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  },
})

export const persistor = persistStore(store)