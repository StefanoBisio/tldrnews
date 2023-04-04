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
                    {newsData.articles.results.map((article, index) => (
                        <Article key={index} index={index} article={article} />
                    ))}
                </div>
            )}
        


        </div>
    );
}