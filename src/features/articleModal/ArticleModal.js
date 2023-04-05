import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import { TldrButton } from '../summarize/TldrButton';
import { summarizeArticle } from '../article/articleSlice';

import defaultThumbnail from '../../TLDR-22.png'
import styles from './ArticleModal.module.css';


const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
        },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};



const ArticleModal = ({ article, onClose }) => {
    const { title, content, image_url } = article;

    const [buttonText, setButtonText] = useState('TL;DR');
    const [buttonClass, setButtonClass] = useState(styles.tldrButton);


    const displayedArticle = useSelector((state) => state.article.displayedArticle);

    const dispatch = useDispatch();

    const handleSummarize = async () => {
        setButtonText('Summarizing...');
        setButtonClass(styles.tldrButtonWorking);
        
        await dispatch(summarizeArticle(content));
        
        setButtonText('Done!');
        setButtonClass(styles.tldrButtonDone);
    };
    
    // handles clicks on the modal background
    const handleClick = (e) => {
        // If the click target is the same as the current target (i.e. the modal background)
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // handles clicks on the close button
    const handleCloseButtonClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div className={styles.modal} onMouseDown={handleClick}>
            <motion.div
                className={styles.modalContent}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className={styles.modalContent} >
                    <button className={styles.modalCloseButton} onClick={handleCloseButtonClick}>X</button>
                    {image_url ? (
                        <img
                            src={image_url}
                            alt="article image"
                            className={styles.image}
                        />
                    ) : (
                        <img
                            src={defaultThumbnail}
                            alt="article image"
                            className={styles.image}
                        />
                    )}
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.content}>{displayedArticle.content || content}</p>
                    <TldrButton onSummarize={handleSummarize} buttonText={buttonText} buttonClass={buttonClass} />
                </div>
            </motion.div>
        </div>
    );
};

export default ArticleModal;
