import { configureStore } from "@reduxjs/toolkit";
import themeBuilderReducer from "./slices/themeBuilderSlice";
import { localStorageMiddleware, loadState } from "./middleware/localStorage";

const preloadedState = {
  themeBuilder: loadState(),
};

export const store = configureStore({
  reducer: {
    themeBuilder: themeBuilderReducer,
    // We will add the previewSlice reducer here later
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState,
});
