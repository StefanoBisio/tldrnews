import React from 'react';
import styles from './Home.module.css';

import { ArticlesList } from '../../features/articlesList/ArticlesList';
import { Search } from '../../features/search/Search';

export const Home = () => {
    return (
        <div className={styles.home}>
            <h1>TL;DR News</h1>
            <Search />
            <ArticlesList />
        </div>
    );
}