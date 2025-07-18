export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // After every action, save the theme builder state
  if (action.type.startsWith("themeBuilder/")) {
    const themeBuilderState = store.getState().themeBuilder;
    localStorage.setItem(
      "themeBuilderState",
      JSON.stringify(themeBuilderState)
    );
  }
  return result;
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("themeBuilderState");
    if (serializedState === null) {
      return undefined; // No state in storage, use initial state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined; // Errors mean we use initial state
  }
};
