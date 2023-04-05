import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    articles: [],
    status: 'idle',
    error: null,
  };

// Define the async thunk to fetch the news
export const fetchNews = createAsyncThunk(
    'search/fetchNews',
    async (searchTerm) => {
      const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_1984063673ab00fc718f174a37805a897d55b&q=${searchTerm}&language=en`);
      return await response.json();
    }
);

// Create the slice
const searchSlice = createSlice({
    name: 'search',
    initialState,
    // Define the synchronous actions
    reducers: {},
    // Define the async actions
    extraReducers: (builder) => {
      builder
        .addCase(fetchNews.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.articles = action.payload;
            state.status = 'fulfilled';
            state.error = null;
        })
        .addCase(fetchNews.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    },
  });

// Exporting actions is NOT needed as I don't have any sychronous actions
// export const { updateSearch } = searchSlice.actions;

// Define selector functions
export const selectNewsData = (state) => state.search;

// Export the actions and the reducer
export default searchSlice.reducer;
