import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TldrButton } from '../summarize/TldrButton';
import { updateSummary } from '../summarize/summariesSlice';
import { summarizeArticle } from '../article/articleSlice';

import styles from './Article.module.css';
import defaultThumbnail from '../../TLDR-22.png'

import { motion } from 'framer-motion';

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

export const ArticleWithModal = ({ article, index }) => {

    const dispatch = useDispatch();
    const { title, content, image_url } = article;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [buttonText, setButtonText] = useState('TL;DR');
    const [buttonStatus, setbuttonStatus] = useState('initial');
    const summaries = useSelector((state) => state.summaries);

    const handleSummarize = async () => {
        setButtonText('Summarizing...');
        setbuttonStatus('loading');

        const result = await dispatch(summarizeArticle({ content, index }));

        if (summarizeArticle.fulfilled.match(result)) {
            dispatch(updateSummary({ index, summary: result.payload.summary }));
        }

        setButtonText('Done!');
        setbuttonStatus('success');
    };

    // handles clicks on the modal background
    const handleClick = (e) => {
        // If the click target is the same as the current target (i.e. the modal background)
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const onClose = () => {
        setIsModalOpen(false);
    };

    // handles clicks on the close button
    const handleCloseButtonClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <div className={styles.previewContainer} onClick={openModal}>
            {image_url ? (
                <img src={image_url} alt="" className={styles.image} />
            ) : (
                <img src={defaultThumbnail} alt="" className={styles.image} />
            )}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.excerpt}>{content}</p>
    
            {isModalOpen && (
                <div className={styles.modal} onMouseDown={handleClick}>
                    <motion.div
                        className={styles.modalContent}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className={styles.modalContent}>
                            <button className={styles.modalCloseButton} onClick={handleCloseButtonClick}>
                                X
                            </button>
                            {image_url ? (
                                <img src={image_url} alt="article image" className={styles.image} />
                            ) : (
                                <img src={defaultThumbnail} alt="article image" className={styles.image} />
                            )}
                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.content}>{summaries[index] || content}</p>
    
                            <TldrButton onSummarize={handleSummarize} buttonText={buttonText} buttonStatus={buttonStatus} />
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
    
};