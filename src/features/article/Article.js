import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

// import { TldrButton } from '../../features/summarize/TldrButton';

// import styles from './Article.module.css';

//component that takes in the article data and displays it
export const Article = ({ article }) => {

    // destructuring the article object
    const { title, content, image_url } = article;

    // helper function to compose the prompt for the API
    const composePrompt = (copy) => {
        return `${copy}\n\nTl;dr`;
    };

    const [displayedArticleCopy, setDisplayedArticleCopy] = useState(content);

    const handleSummarize = async (input = composePrompt(content)) => {

        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: input,
            temperature: 0.7,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 1,
        });

        console.log(response)

        if (response.data.choices) {
            setDisplayedArticleCopy(response.data.choices[0].text);
        }
    }

    return (
        <div>
            <h2>{title}</h2>

            <p>{displayedArticleCopy}</p>

            <img src={image_url} alt="article image" />

            <button onClick={() => handleSummarize()} >test</button>

            {/* <TldrButton generateResponse={generateResponse(composePrompt(content))} /> */}
        </div>
    );
}