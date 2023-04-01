import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNewsData } from '../../features/search/searchSlice';
import { Article } from '../../features/article/Article';

import styles from './ArticlesList.module.css';

export const ArticlesList = () => {

    const newsData = useSelector(selectNewsData);

    return (
        <div>
            <h2>articlesList</h2>

            {newsData.status === 'fullfilled' && (
                <div>
                    <p>test only: list of articles:</p>
                    {newsData.articles.results.map((article, index) => (
                        <div key={index}>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    ))}
                </div>
            )}

            <Article />
            <Article />
            <Article />
        </div>
    );
}