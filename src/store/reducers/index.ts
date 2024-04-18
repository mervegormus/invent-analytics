import { combineReducers } from '@reduxjs/toolkit';
import movieSlice from "../actions/movieSlice";

const rootReducer:any = combineReducers({
    movies: movieSlice,
});

export default rootReducer;