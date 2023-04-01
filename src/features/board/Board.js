import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Board.module.css';

import { ArticlesList } from '../../features/articlesList/ArticlesList';
import { Search } from '../../features/search/Search';

export const Board = () => {
    return (
        <div>
            <h2>Board</h2>
            <Search />
            <ArticlesList />
        </div>
    );
}