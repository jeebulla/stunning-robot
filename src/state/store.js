import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type RootStore = ReturnType<typeof store.getState>;
