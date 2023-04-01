import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Search.module.css';

export const Search = () => {
    return (
        <div>
            <input type="text" placeholder="Search" />
            <button>Search</button>
        </div>
    );
}