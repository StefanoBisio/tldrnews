import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, selectSearchState } from './searchSlice';

import styles from './Search.module.css';

export const Search = () => {

    // usestate to control the input field value  
    const [searchValue, setSearchValue] = useState("");

    const dispatch = useDispatch();

    // Selector to get the API response data
    const searchResults = useSelector(selectSearchState);

    return (
        <div>
            <input
                value={searchValue}
                className={styles.searchInput}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search here' 
            />
            
            {/* button that triggers the API call */}
            <button onClick={() => dispatch(fetchNews(searchValue))}>Search</button>
            
            {/* Display the status and error messages */}
            {searchResults.status === 'loading' && <p>Loading...</p>}
            {searchResults.status === 'failed' && <p>Error: {searchResults.error}</p>}

            {/* Render the raw JSON data */}
            {searchResults.status === 'fullfilled' && (
                <div>
                    <p>list of articles:</p>
                    {/* map through the articles and display some title and (foud at .results.title and .results.content) */}
                    {searchResults.articles.results.map((article, index) => (
                        <div key={index}>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}