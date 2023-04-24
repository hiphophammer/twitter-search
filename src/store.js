import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./features/language/languageSlice";

export default configureStore({
  reducer: {
    language: languageReducer,
  },
});
