import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {createServiceApi} from './services/api';
import rootReducer from './reducers';


const serviceApi = createServiceApi('/some/url');

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {serviceApi}
            }
        })
});
export type AppThunk = ThunkAction<void, RootState, unknown, any>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;