import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {RootState} from '../index';
import {
    initialState, MoviesRequest,
    MoviesDetailResponse,
    MoviesDetailResponseError,
    MoviesResponse,
   MoviesResponseError
} from "./interfaces";


const apiKey = 'bd90ba30'
export const getMovies = createAsyncThunk<MoviesResponse[], MoviesRequest , {
    rejectValue: MoviesResponseError,
    state: RootState
}>(
    '/getPokemon',
    async (query, thunkAPI) => {
        const {page,y,type}=query
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=Pokemon&page=${page}&y=${y}&type=${type}`);
            return response.data as MoviesResponse[];
        } catch (error) {
            return thunkAPI.rejectWithValue({error: 'Something went wrong'});
        }
    }
);
export const getMovieDetail = createAsyncThunk<MoviesDetailResponse, string, {
    rejectValue: MoviesDetailResponseError,
    state: RootState
}>(
    '/detail',
    async (imdbId, thunkAPI) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`);
            return response.data as MoviesDetailResponse;
        } catch (error) {
            return thunkAPI.rejectWithValue({error: 'Something went wrong'});
        }
    }
);
const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder.addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload
        state.error = undefined
        state.loading = false
    })
        .addCase(getMovies.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
        })
        .addCase(getMovies.pending, (state) => {
            state.loading = true
        })
        .addCase(getMovieDetail.fulfilled, (state, action) => {
            state.moviesDetail = action.payload
            state.loading = false
        })
        .addCase(getMovieDetail.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false
        })
        .addCase(getMovieDetail.pending, (state) => {
            state.loading = true
        })
});


export const {} = movieSlice.actions

export const selectMovies= (state: RootState) => state.movies.movies
export const selectMovieDetail= (state: RootState) => state.movies.moviesDetail

export default movieSlice.reducer