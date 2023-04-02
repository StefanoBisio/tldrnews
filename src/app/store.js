import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
// import summarizeReducer from '../features/summarize/tldrButtonSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer
    // summarize: summarizeReducer,
  },
});
