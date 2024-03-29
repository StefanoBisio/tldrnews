import React from 'react';
import styles from './Home.module.css';

import { ArticlesList } from '../../features/articlesList/ArticlesList';
import { Search } from '../../features/search/Search';

export const Home = () => {
    return (
        <div className={`page-wrapper ${styles.home}`}>
            <div className={'page-header'}>
                <h1>TL;DR News</h1>
                <p className={styles.subTitle}>Because we know you're too busy to read it all!</p>
            </div>
            <Search />
            <ArticlesList />
        </div>
    );
}