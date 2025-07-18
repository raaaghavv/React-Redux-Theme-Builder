import { createSlice } from "@reduxjs/toolkit";
import { initialTheme } from "../initialState";

const themeBuilderSlice = createSlice({
  name: "themeBuilder",
  initialState: {
    currentTheme: initialTheme,
    selectedComponent: "title",
  },
  reducers: {
    selectComponent: (state, action) => {
      state.selectedComponent = action.payload;
    },
    updateComponentStyle: (state, action) => {
      const { component, category, property, value } = action.payload;
      if (state.currentTheme.components[component]) {
        if (category) {
          // For nested properties like colors, cornerRadius, etc.
          state.currentTheme.components[component][category][property] = value;
        } else {
          // For direct properties
          state.currentTheme.components[component][property] = value;
        }
      }
    },
    setThemeName: (state, action) => {
      state.currentTheme.name = action.payload;
    },
    resetTheme: (state) => {
      state.currentTheme = initialTheme;
    },
    loadTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
    // The saveTheme action is handled by middleware, so no reducer is needed
  },
});

export const {
  selectComponent,
  updateComponentStyle,
  setThemeName,
  resetTheme,
  loadTheme,
} = themeBuilderSlice.actions;

export default themeBuilderSlice.reducer;
