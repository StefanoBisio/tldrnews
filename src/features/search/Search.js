import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, selectNewsData } from './searchSlice';

import styles from './Search.module.css';

export const Search = () => {

    // usestate to control the input field value  
    const [searchValue, setSearchValue] = useState("");

    const dispatch = useDispatch();

    // Selector to get the API response data
    const searchStatus = useSelector(selectNewsData);

    const handleSearch = () => {
        dispatch(fetchNews(searchValue));
        setSearchValue("");
    }

    return (
        <div>
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

            <button onClick={handleSearch} className={styles.searchbutton}>
                Search
            </button>

            {searchStatus.status === 'loading' && <p>Loading...</p>}
            {searchStatus.status === 'failed' && <p>Error: {searchStatus.error}</p>}
        </div>
    );
}