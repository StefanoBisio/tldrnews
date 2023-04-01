import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ArticlesList.module.css';

import { Article } from '../../features/article/Article';

export const ArticlesList = () => {
    return (
        <div>
            <h2>articlesList</h2>

            {/* maps through articles in the state and renders an Article component for each article */}
            {/* {articles.map(article => {
                return (
                    <Article key={article.id} article={article} />
                );
            })} */}

            <Article />
            <Article />
            <Article />
        </div>
    );
}