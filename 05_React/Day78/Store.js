import {configureStore} from "@reduxjs/toolkit";
import CoinSlice from "./Slice1";

const store = configureStore({
    reducer: {
        slice1: CoinSlice,
    },
});

export default store;