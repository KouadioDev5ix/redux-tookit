import { combineReducers, configureStore } from "@reduxjs/toolkit";
import configurationReducer from "./slices/Configuration/configurationSlice";
import storage from "redux-persist-indexeddb-storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducers = combineReducers({
  configuration: configurationReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage("appDB"),
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


