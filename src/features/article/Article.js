import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

import { useDispatch, useSelector } from 'react-redux';
import { summarizeArticle } from './articleSlice';

import { TldrButton } from '../../features/summarize/TldrButton';

import styles from './Article.module.css';

//component that takes in the article data and displays it
export const Article = ({ index, article }) => {

    // destructuring the article object
    const { title, content, image_url } = article;

    // helper function to compose the prompt for the API
    const composePrompt = (copy) => {
        return `${copy}\n\nTl;dr`;
    };

    const displayedArticle = useSelector((state) => state.article.displayedArticle);
    const dispatch = useDispatch();

    const handleSummarize = () => {
        dispatch(summarizeArticle(content));
    };

    return (
        <div className={styles.previewContainer}>
            {image_url && (
                <img
                    src={image_url}
                    alt="article image"
                    className={styles.image}
                />
            )}
            <h2 className={styles.title}>{title}</h2>

            <p className={styles.excerpt}>{displayedArticle.content || content}</p>

            <TldrButton onSummarize={handleSummarize} />
        </div>
    );
}