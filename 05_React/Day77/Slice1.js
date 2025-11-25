import { createSlice } from "@reduxjs/toolkit";

const Foodslicer = createSlice({
    name: "slice1",
    initialState: { count: 0 },
    reducers: {
        addItems: (state) => {
            state.count += 1;
        },
        removeItems: (state) => {
            state.count -= 1;
        },
    }
});

export default Foodslicer.reducer;
export const { addItems, removeItems } = Foodslicer.actions;