import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { summarizeArticle } from '../article/articleSlice';
import { TldrButton } from '../summarize/TldrButton';
import { updateSummary } from '../summarize/summariesSlice';
import { motion } from 'framer-motion';

import styles from './Article.module.css';
import defaultThumbnail from '../../TLDR-22.png'


// Define animation variants for the modal
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

    // Initialize state for modal open status, button text, and button status
    const [buttonText, setButtonText] = useState('TL;DR');
    const [buttonStatus, setbuttonStatus] = useState('initial');
    const summaries = useSelector((state) => state.summaries);

    // OpenAI API call on TldrButton's onClick event
    const handleSummarize = async () => {
        
        // Update the button text and status
        setButtonText('Summarizing...');
        setbuttonStatus('loading');

        /* Dispatch the summarizeAritcle action with the content and index as payload.
        Including the index helps to uniquely identify each article in the list, 
        allowing the reducer to correctly update the summary for the corresponding 
        article. */
        const result = await dispatch(summarizeArticle({ content, index }));

        /* Check if the action was fulfilled and dispatch the updateSummary action.
        Again the index is included in the payload to help the reducer update the
        correct summary. 
        It is also essential to make sure the updated copy persists on the correct article after closing and reopening the modal.
        */
        if (summarizeArticle.fulfilled.match(result)) {
            dispatch(updateSummary({ index, summary: result.payload.summary }));
        }

        setButtonText('Done!');
        setbuttonStatus('success');
    };

    // handles clicks on the modal background
    const handleBackgroundClick = (e) => {
        // If the click target is the same as the current target (i.e. the modal background)
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Define the openModal function to set the isModalOpen state to true
    const openModal = () => {
        setIsModalOpen(true);
    };
    // Define the onClose function to set the isModalOpen state to false
    const onClose = () => {
        setIsModalOpen(false);
    };
    // Define the handleCloseButtonClick function to handle clicks on the close button
    const handleCloseButtonClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    return (
        
        <div className={styles.previewContainer} onClick={openModal}>
            {/* Render the article image or a default thumbnail */}
            {image_url ? (
                <img src={image_url} alt="" className={styles.image} />
            ) : (
                <img src={defaultThumbnail} alt="" className={styles.image} />
            )}

            <h2 className={styles.title}>{title}</h2>
            <p className={styles.excerpt}>{summaries[index] || content}</p>
    
            {isModalOpen && (
                // Render the modal
                <div className={styles.modal} onMouseDown={handleBackgroundClick}>
                    <motion.div
                        className={styles.modalContent}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className={styles.modalContent}>
                            {/* Render the close button and handle its click event */}
                            <button className={styles.modalCloseButton} onClick={handleCloseButtonClick}>Close</button>

                            {/* Render the article image or a default thumbnail */}
                            {image_url ? (
                                <img src={image_url} alt="article image" className={styles.image} />
                            ) : (
                                <img src={defaultThumbnail} alt="article image" className={styles.image} />
                            )}

                            <h2 className={styles.title}>{title}</h2>
                            <p className={styles.content}>
                                { (content || '').length === 0
                                    ? "Oops no content on this one! Not the best for this demo I'm afraid!"
                                    : summaries[index] || content
                                }
                            </p>
    
                            {/* Render the TldrButton component with data to manipulate it depending on API call status */}
                            <TldrButton onSummarize={handleSummarize} buttonText={buttonText} buttonStatus={buttonStatus} />
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
    
};