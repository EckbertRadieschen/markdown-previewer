import textReducer from "./textSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        text: textReducer,
    },
});

