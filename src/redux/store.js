import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import taskReducer from "./slices/taskSlice";
import authReducer from "./slices/authSlice"; // ✅ Ensure authReducer is included

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer, // ✅ Add authentication state to Redux store
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export { store, persistor };
