// import { Configuration, OpenAIApi } from "openai";

// import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';

// // Define the initial state
// const initialState = {
//     input: [],
//     output: [],
//     status: 'idle',
//     error: null,
// };
  
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// delete configuration.baseOptions.headers['User-Agent'];

// const openai = new OpenAIApi(configuration);

// export const fetchTldrData = createAsyncThunk(
//     'search/fetchTldrData',
//     async (articleBody) => {

//     const response = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: `${articleBody}\n\nTl;dr`,
//         temperature: 0.7,
//         max_tokens: 60,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 1,
//     });
//     }
// );


// // Create the slice
// const summarizeSlice = createSlice({
//     name: 'search',
//     initialState,
//     // Define the synchronous actions
//     reducers: {},
//     // Define the async actions
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchTldrData.pending, (state) => {
//           state.status = 'loading';
//         })
//         .addCase(fetchTldrData.fulfilled, (state, action) => {
//             state.output = action.payload;
//             state.status = 'fullfilled';
//             state.error = null;
//         })
//         .addCase(fetchTldrData.rejected, (state, action) => {
//           state.status = 'failed';
//           state.error = action.payload;
//         });
//     },
//   });

// // Exporting actions is NOT needed as I don't have any sychronous actions
// // export const { updateSearch } = searchSlice.actions;

// // Define selector functions
// export const selectTlDrData = (state) => state.tldr;

// // Export the actions and the reducer
// export default summarizeSlice.reducer;
