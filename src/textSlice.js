import {createSlice} from "@reduxjs/toolkit";
import defaultText from "./defaultText.js"

const textSlice = createSlice({
    name: "text",
    initialState: defaultText,
    reducers: {
        setText: (state, action) => action.payload,
    },
});

export const {setText} = textSlice.actions;
export default textSlice.reducer;