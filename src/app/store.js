import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import articleReducer from '../features/article/articleSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    article: articleReducer,
  },
});