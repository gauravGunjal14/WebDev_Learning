import {configureStore} from "@reduxjs/toolkit";
import Slice1Reducer from "./Slice1";

const store = configureStore({
    reducer: {
        slice1: Foodslicer,
    },
});

export default store;