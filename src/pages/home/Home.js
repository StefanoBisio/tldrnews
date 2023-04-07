import React from 'react';
import styles from './Home.module.css';

import { ArticlesList } from '../../features/articlesList/ArticlesList';
import { Search } from '../../features/search/Search';

export const Board = () => {
    return (
        <div className={styles.board}>
            <h1>TL;DR News</h1>
            <Search />
            <ArticlesList />
        </div>
    );
}