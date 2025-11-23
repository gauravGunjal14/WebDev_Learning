import { configureStore } from "@reduxjs/toolkit";
import reactSlice from "./Slicer1";

const store = configureStore({
    reducer: {
        slice1: reactSlice,
    }
});

export default store;