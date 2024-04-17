import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../index';
import {initialState,  ProductResponse, ProductResponseError} from "./interfaces";


const apiKey='bd90ba30'
export const fetchProducts = createAsyncThunk<ProductResponse[], undefined, { rejectValue: ProductResponseError, state: RootState }>(
    'products/fetchProducts',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=pokemon`);
            return response.data as ProductResponse[];
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: 'Something went wrong' });
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.error = undefined
        state.loading = false
    })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
        })
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
});


export const {} = productSlice.actions

export const selectProducts = (state: RootState) => state.products.products

export default productSlice.reducer