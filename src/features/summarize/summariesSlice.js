import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// Define an async thunk to summarize an article's content
export const summariesSlice = createSlice({
    name: 'summaries',
    initialState,
    reducers: {
        updateSummary: (state, action) => {
            const { index, summary } = action.payload;
            state[index] = summary;
        },
    },
});

export const { updateSummary } = summariesSlice.actions;

export default summariesSlice.reducer;
