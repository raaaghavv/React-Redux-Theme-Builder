import { configureStore } from "@reduxjs/toolkit";
import themeBuilderReducer from "./slices/themeBuilderSlice";
import { localStorageMiddleware, loadState } from "./middleware/localStorage";

const preloadedState = {
  themeBuilder: loadState(),
};

export const store = configureStore({
  reducer: {
    themeBuilder: themeBuilderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState,
});
