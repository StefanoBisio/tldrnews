import React from 'react';
import { useSelector } from 'react-redux';
import { selectNewsData } from '../../features/search/searchSlice';
import { Article } from '../../features/article/Article';
import { motion } from 'framer-motion';

import styles from './ArticlesList.module.css';

export const ArticlesList = () => {

    const newsData = useSelector(selectNewsData);

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
            {newsData.status === 'fulfilled' && (
                <div className={styles.gridContainer}>
                    {newsData.articles.results.map((article, index) => (
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



