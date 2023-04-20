import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    displayedArticle: {},
    status: 'idle',
    error: null,
};

// Define an async thunk to summarize an article's content
export const summarizeArticle = createAsyncThunk(

    // Define the action type for this thunk
    'article/summarizeArticle',

    // Define the payload creator function
    async ({ content, index }) => {

        const { Configuration, OpenAIApi } = require("openai");
        
        const configuration = new Configuration({
            organization: "org-qKw75MSmu3fqPzxaRs4gQt4w",
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        
        //https://platform.openai.com/docs/api-reference/completions/create
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${content}\n\nTl;dr`,
            temperature: 0.7,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
        });

        if (response.data.choices) {
            return { summary: response.data.choices[0].text, index };
        } else {
            throw new Error('No summary found');
        }
    }
);

//this slice is used entirely to set the status of the summarizeArticle thunk
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(summarizeArticle.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(summarizeArticle.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // state.displayedArticle.content = action.payload;
                state.error = null;
            })
            .addCase(summarizeArticle.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default articleSlice.reducer;