// Import necessary libraries and components
import React from 'react';
import { useSelector } from 'react-redux';
import { selectNewsData } from '../../features/search/searchSlice';
import { ArticleWithModal as Article } from '../../features/article/ArticleWithModal';
import { motion } from 'framer-motion';

import styles from './ArticlesList.module.css';

export const ArticlesList = () => {
    // Access the news data from the Redux store using selectNewsData
    const newsData = useSelector(selectNewsData);

    // Define animation variants for articles to fade in when they become visible
    const fadeInArticleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <div>
            <h2>articlesList</h2>
            {/* Check if the newsData status is fulfilled */}
            {newsData.status === 'fulfilled' && (
                <div className={styles.gridContainer}>
                    {/* Map through the articles and render an Article component for each */}
                    {newsData.articles.results.map((article, index) => (
                        // Wrap the Article component in a motion.div to apply the fadeInArticleVariants animation
                        <motion.div
                            key={index}
                            variants={fadeInArticleVariants}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                        >
                            <Article index={index} article={article} />
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};
