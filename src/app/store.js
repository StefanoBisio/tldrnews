import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '../features/search/searchSlice';
import articleReducer from '../features/article/articleSlice';
import summariesReducer from '../features/summarize/summariesSlice';

export const store = configureStore({
  reducer: {
    // The search state is managed by the searchReducer
    search: searchReducer,
    // The article state is managed by the articleReducer
    article: articleReducer,
    // The summaries state is managed by the summariesReducer
    summaries: summariesReducer,
  },
});
