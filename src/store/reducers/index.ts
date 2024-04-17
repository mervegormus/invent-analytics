import { combineReducers } from '@reduxjs/toolkit';
import productSlice from "../actions/productSlice";

const rootReducer:any = combineReducers({
    products: productSlice,
});

export default rootReducer;