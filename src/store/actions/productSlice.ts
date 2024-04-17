import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../index';
import {initialState, ProductRequest, ProductResponse, ProductResponseError} from "./interfaces";


const apiKey = 'bd90ba30'
export const fetchProducts = createAsyncThunk<ProductResponse[], ProductRequest, {
    rejectValue: ProductResponseError,
    state: RootState
}>(
    'products/fetchProducts',
    async (query, thunkAPI) => {
        const {page} = query
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=Pokemon&page=${page}`);
            return response.data as ProductResponse[];
        } catch (error) {
            return thunkAPI.rejectWithValue({error: 'Something went wrong'});
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