import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputReducer";
import outputReducer from "./outputreducer";
import themeReducer from "./themeReducer";

export default configureStore({
  reducer: {
    input: inputReducer,
    output: outputReducer,
    theme: themeReducer,
  },
});
