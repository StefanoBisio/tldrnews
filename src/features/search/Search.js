import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, selectNewsData } from './searchSlice';

import styles from './Search.module.css';

export const Search = () => {

    // usestate to control the input field value  
    const [searchValue, setSearchValue] = useState("");
    const [searchValueOnList, setSearchValueOnList] = useState("");

    const dispatch = useDispatch();

    // Selector to get the API response data
    const searchStatus = useSelector(selectNewsData);

    const handleSearch = () => {
        dispatch(fetchNews(searchValue));
        setSearchValueOnList(searchValue);
        setSearchValue("");
    }

    return (
        <div className={styles.searchContainer}>
            <input
                value={searchValue}
                className={styles.searchInput}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                placeholder='Search news!'
            />

            <button onClick={handleSearch} className={styles.searchButton}>
                Search
            </button>

            {searchStatus.status === 'loading' && <h2>Loading...</h2>}
            {searchStatus.status === 'fulfilled' && <h2>Latest news search for "{searchValueOnList ? searchValueOnList : ''}"</h2>}
            {searchStatus.status === 'failed' && <h2>There was an error with your search: {searchStatus.error}</h2>}
        </div>
    );
}