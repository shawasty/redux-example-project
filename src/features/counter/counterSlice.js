import { createSlice } from '@reduxjs/toolkit';
// createSlice creates a reducer collection of logic and actions
// for a single feature in an app
const initialState = {
    count: 0
}

export const counterSlice =  createSlice ({
    name: 'counter',
    initialState,
    reducers: {
        // this is where we will name all our different actions
        increment : (state) => {
            state.count +=1
        },
        decrement : (state) => {
            state.count -=1
        },
        reset : (state) => {
            state.count = 0;
        },
        incrementByCount: (state, action ) => {
            state.count += action.payload;
        }
    }
})

export const { increment, decrement, reset, incrementByCount } = counterSlice.actions;

// we need to export default reducer because the store will need that
export default counterSlice.reducer;