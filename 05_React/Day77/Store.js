import {configureStore} from "@reduxjs/toolkit";
import Foodslicer from "./Slice1";

const store = configureStore({
    reducer: {
        slice1: Foodslicer,
    },
});

export default store;