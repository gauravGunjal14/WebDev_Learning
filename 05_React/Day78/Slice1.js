import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FetchData = createAsyncThunk(
    // Action: type : payload
    'Coin/fetch',
    async (args, thunkAPI) => {

        try{
            const responce = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await responce.json();
            return data; 
        }
        catch(err){
            return rejectWithValue(err.message);
        }
    }
)


const CoinSlice = createSlice({
    name: 'slice1',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(FetchData.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(FetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(FetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});

export default slice1.reducer;
export { FetchData };