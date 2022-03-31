import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        // now that we have added counterReducer to the store, it is available to the entire app, bvecause oof the provider
    }
})