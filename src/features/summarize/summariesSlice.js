import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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
