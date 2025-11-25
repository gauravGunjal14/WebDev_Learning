import { createSlice } from "@reduxjs/toolkit";

const reactSlice = createSlice({
    name: "Slicer1",
    initialState: {count: 0},
    reducers: {
        Increment: (state) => {state.count += 1;},
        Decrement: (state) => {state.count -= 1;},
        Reset: (state) => {state.count = 0;},
        CustomCounter: (state, actions) => {
            const value = Number(actions.payload) || 0;
            state.count = state.count + value}
    }
});

export const { Increment, Decrement, Reset, CustomCounter } = reactSlice.actions;
export default reactSlice.reducer;